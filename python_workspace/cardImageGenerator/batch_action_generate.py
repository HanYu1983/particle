import websocket
import json
import requests
import uuid
import time
import os
import glob

# ComfyUI 伺服器設定
COMFYUI_URL = "127.0.0.1:8000"
WS_URL = f"ws://{COMFYUI_URL}/ws"
PROMPT_URL = f"http://{COMFYUI_URL}/prompt"
VIEW_URL = f"http://{COMFYUI_URL}/view"

# 檔案路徑設定
PROMPTS_DIR = "action_prompts"
OUTPUT_DIR = "action_output_images"

# 確保輸出資料夾存在
os.makedirs(OUTPUT_DIR, exist_ok=True)

def get_workflow_files():
    """取得當前目錄下所有 image_ 開頭的 json 工作流檔案"""
    files = glob.glob("image_*.json")
    return sorted(files)

def select_workflow(workflow_files):
    """讓使用者選擇要使用的工作流檔案"""
    print("\n=== 可用的工作流檔案 ===")
    for i, wf in enumerate(workflow_files, 1):
        name = os.path.splitext(wf)[0]
        print(f"  {i}. {name}")
    
    while True:
        try:
            choice = input(f"\n請選擇工作流 (1-{len(workflow_files)}): ").strip()
            idx = int(choice) - 1
            if 0 <= idx < len(workflow_files):
                return workflow_files[idx]
            else:
                print(f"請輸入 1 到 {len(workflow_files)} 之間的數字")
        except ValueError:
            print("請輸入有效的數字")

def load_workflow(workflow_path):
    """載入基礎工作流 JSON"""
    with open(workflow_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def get_prompt_files():
    """取得 prompts 資料夾中的所有 txt 檔案"""
    return glob.glob(os.path.join(PROMPTS_DIR, "*.txt"))

def get_generated_prompts():
    """從 output 資料夾取得已經生成過的提示詞名稱"""
    generated = set()
    if os.path.exists(OUTPUT_DIR):
        for filename in os.listdir(OUTPUT_DIR):
            # 圖片格式為 {prompt_name}_{comfy_filename}
            # 例如: 魔杖_z-image-turbo_00140_.png
            # 我們需要提取提示詞名稱（第一個底線前的部分）
            base_name = os.path.splitext(filename)[0]
            # 找到第一個底線，提取提示詞名稱
            if '_' in base_name:
                prompt_name = base_name.split('_', 1)[0]
                generated.add(prompt_name)
    return generated

def find_clip_text_encode_node(workflow):
    """自動尋找 CLIPTextEncode 節點"""
    for node_id, node in workflow.items():
        if node.get("class_type") == "CLIPTextEncode":
            return node_id
    return None

def find_ksampler_node(workflow):
    """自動尋找 KSampler 節點"""
    for node_id, node in workflow.items():
        if node.get("class_type") == "KSampler":
            return node_id
    return None

def find_primitive_string_node(workflow):
    """尋找 PrimitiveStringMultiline 節點（用於 ernie 工作流）"""
    for node_id, node in workflow.items():
        if node.get("class_type") == "PrimitiveStringMultiline":
            return node_id
    return None

def find_switch_node(workflow):
    """尋找 ComfySwitchNode 節點"""
    for node_id, node in workflow.items():
        if node.get("class_type") == "ComfySwitchNode":
            return node_id
    return None

def find_primitive_boolean_node(workflow):
    """尋找 PrimitiveBoolean 節點"""
    for node_id, node in workflow.items():
        if node.get("class_type") == "PrimitiveBoolean":
            return node_id
    return None

def update_workflow_prompt(workflow, prompt_text, seed=None):
    """更新工作流中的提示詞與種子（自動偵測節點）"""
    # 先嘗試尋找 PrimitiveStringMultiline（ernie 工作流）
    string_node = find_primitive_string_node(workflow)
    switch_node = find_switch_node(workflow)
    bool_node = find_primitive_boolean_node(workflow)
    
    if string_node:
        # ernie 工作流：更新原始字串節點，並關閉提示詞增強
        workflow[string_node]["inputs"]["value"] = prompt_text
        print(f"  -> 已更新提示詞節點: {string_node}")
        
        # 關閉提示詞增強（設為 false 直接使用原始字串）
        if bool_node:
            workflow[bool_node]["inputs"]["value"] = False
            print(f"  -> 已關閉提示詞增強")
    else:
        # z_image_turbo 工作流：直接更新 CLIPTextEncode
        clip_node = find_clip_text_encode_node(workflow)
        if clip_node:
            workflow[clip_node]["inputs"]["text"] = prompt_text
            print(f"  -> 已更新提示詞節點: {clip_node}")
        else:
            print("  -> 警告: 找不到提示詞節點")
    
    # 尋找 KSampler 節點並更新 seed
    if seed is not None:
        ksampler_node = find_ksampler_node(workflow)
        if ksampler_node:
            workflow[ksampler_node]["inputs"]["seed"] = seed
            print(f"  -> 已更新種子節點: {ksampler_node}")
    
    return workflow

def queue_prompt(workflow):
    """發送工作流到 ComfyUI"""
    client_id = str(uuid.uuid4())
    p = {"prompt": workflow, "client_id": client_id}
    response = requests.post(PROMPT_URL, json=p)
    response.raise_for_status()
    return response.json()["prompt_id"], client_id

def get_images(prompt_id, client_id):
    """透過 WebSocket 監聽並獲取生成的圖片"""
    ws = websocket.WebSocket()
    ws.connect(f"{WS_URL}?clientId={client_id}")
    ws.settimeout(300)  # 5 分鐘超時
    
    images = []
    try:
        while True:
            out = ws.recv()
            if isinstance(out, str):
                message = json.loads(out)
                if message['type'] == 'executing':
                    data = message['data']
                    if data['node'] is None and data['prompt_id'] == prompt_id:
                        # 執行完成，獲取歷史記錄
                        history = requests.get(f"http://{COMFYUI_URL}/history/{prompt_id}").json()
                        if prompt_id in history:
                            outputs = history[prompt_id]['outputs']
                            for node_id, output in outputs.items():
                                if 'images' in output:
                                    for img in output['images']:
                                        images.append(img)
                        break
            elif isinstance(out, bytes):
                # 忽略二進制數據（預覽圖等）
                pass
    except websocket.WebSocketTimeoutException:
        print(f"  -> 警告: WebSocket 超時")
    finally:
        ws.close()
    return images

def download_image(image_info, filename_prefix):
    """下載圖片到本地"""
    params = {
        "filename": image_info['filename'],
        "subfolder": image_info.get('subfolder', ''),
        "type": image_info.get('type', 'output')
    }
    response = requests.get(VIEW_URL, params=params)
    response.raise_for_status()
    
    # 儲存圖片 - 使用時間戳記避免檔名衝突
    timestamp = int(time.time())
    save_path = os.path.join(OUTPUT_DIR, f"{filename_prefix}_{timestamp}.png")
    with open(save_path, 'wb') as f:
        f.write(response.content)
    return save_path

def main():
    print("=== ComfyUI 批次生圖腳本啟動 ===")
    
    # 取得並選擇工作流
    workflow_files = get_workflow_files()
    if not workflow_files:
        print("找不到任何 image_ 開頭的工作流 JSON 檔案！")
        return
    
    selected_workflow = select_workflow(workflow_files)
    print(f"已選擇工作流: {selected_workflow}")
    
    # 載入基礎工作流
    base_workflow = load_workflow(selected_workflow)
    all_prompt_files = get_prompt_files()
    
    # 過濾掉已經生成過的提示詞
    generated_prompts = get_generated_prompts()
    prompt_files = [f for f in all_prompt_files 
                   if os.path.splitext(os.path.basename(f))[0] not in generated_prompts]
    
    if not all_prompt_files:
        print(f"在 {PROMPTS_DIR} 資料夾中找不到任何提示詞檔案！")
        return
    
    if not prompt_files:
        print(f"所有提示詞都已經生成過，無需處理新的提示詞。")
        return

    print(f"找到 {len(all_prompt_files)} 個提示詞檔案，其中 {len(generated_prompts)} 個已生成過。")
    print(f"開始處理 {len(prompt_files)} 個新的提示詞...\n")

    for i, prompt_file in enumerate(prompt_files, 1):
        filename = os.path.basename(prompt_file)
        print(f"[{i}/{len(prompt_files)}] 正在處理: {filename}")
        
        # 讀取提示詞
        with open(prompt_file, 'r', encoding='utf-8') as f:
            base_prompt = f.read()

        # 組合完整提示詞
        prompt_text = (
            "遊戲招式圖標設計 "
            + base_prompt
            + " 風格要求：像素美術風格（Pixel Art Icon），8-bit 或 16-bit 像素風格，清晰銳利，"
            "像素大小: 8x8,"
            "用像素塊抽象化表現能量或元素效果，不需要文字或 UI 元素，"
            "統一像素 UI 圖標風格,適合卡牌游戲技能介面使用"
        )
        
        # 複製並更新工作流
        workflow = json.loads(json.dumps(base_workflow)) # 深拷貝
        workflow = update_workflow_prompt(workflow, prompt_text, seed=int(time.time() * 1000) % 1000000000)
        
        try:
            # 發送請求
            prompt_id, client_id = queue_prompt(workflow)
            print(f"  -> 已發送請求，等待生成... (Prompt ID: {prompt_id})")
            
            # 獲取圖片
            images = get_images(prompt_id, client_id)
            
            if images:
                for img in images:
                    save_path = download_image(img, os.path.splitext(filename)[0])
                    print(f"  -> 圖片已儲存: {save_path}")
            else:
                print(f"  -> 警告: 未收到圖片輸出")
                
        except Exception as e:
            print(f"  -> 錯誤: {str(e)}")
        
        print() # 空行分隔

    print("=== 批次處理完成 ===")

if __name__ == "__main__":
    main()
