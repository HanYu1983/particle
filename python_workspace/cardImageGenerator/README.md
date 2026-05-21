# Card Image Generator

一個自動化生成遊戲卡牌圖片的工具集，整合 ComfyUI AI 繪圖與 HTML 卡牌合成流程。

## 目錄結構

```
cardImageGenerator/
├── fighter.tsv                    # 遊戲角色/技能數據源
├── batch_generate.py              # 批量生成武器/裝備圖片
├── batch_action_generate.py       # 批量生成技能動作圖片
├── generate_prompts.py            # 從 TSV 生成基礎提示詞
├── generate_prompts_from_tsv.py   # 從 TSV 生成 JSON 提示詞
├── generate_action_prompts.py     # 生成技能動作提示詞
├── generate_detailed_action_prompts.py  # 生成詳細技能提示詞
├── update_weapon_prompts.py       # 更新武器詳細提示詞
├── update_armor_prompts.py        # 更新防具詳細提示詞
├── clean_prompts.py               # 清理提示詞樣式標籤
├── generate_card_images.py        # 合成最終卡牌圖片
├── generate_prompts.js            # JavaScript 版提示詞生成
├── card_template.html             # 卡牌 HTML 模板
├── card_template_vic.html         # 卡牌 HTML 模板（VIC 版）
├── image_z_image_turbo.json       # ComfyUI 工作流（Z-Image-Turbo 模型）
├── image_ernie_image_turbo.json   # ComfyUI 工作流（Ernie-Image-Turbo 模型）
├── prompts/                       # 武器/裝備提示詞目錄
├── action_prompts/                # 技能動作提示詞目錄
├── output_images/                 # 武器/裝備生成圖片目錄
├── action_output_images/          # 技能動作生成圖片目錄
├── card_output_images/            # 最終卡牌圖片目錄
└── temp_html/                     # 臨時 HTML 文件目錄
```

## 環境需求

- Python 3.8+
- Playwright（用於卡牌渲染）
- ComfyUI（本地運行，預設 `127.0.0.1:8000`）
- 虛擬環境推薦使用 `.venv`

### 安裝依賴

```bash
pip install playwright requests websocket-client
playwright install chromium
```

---

## Python 腳本說明

### 1. `generate_prompts.py` - 基礎提示詞生成

**用途：** 從 `fighter.tsv` 讀取所有唯一標題（武器/裝備名稱），根據攻擊類型分類生成基礎英文提示詞。

**輸入：** `fighter.tsv`
**輸出：** `prompts/` 目錄下的 `.txt` 文件

**用法：**
```bash
python generate_prompts.py
```

**提示詞分類：**
- 防具-頭、防具-衣、防具-褲、防具-飾
- 斬擊-大、斬擊-刀、斬擊-劍、斬擊-斧
- 打擊-棍、打擊-鎚、打擊-弓、打擊-包、打擊-短
- 刺擊-槍、刺擊-刺
- 射擊-槍、射擊-弩
- 投擲-暗器、投擲-炸彈
- 特殊-其他

---

### 2. `generate_prompts_from_tsv.py` - JSON 提示詞生成

**用途：** 從 `fighter.tsv` 提取唯一標題，生成 JSON 格式的提示詞文件（水墨畫風格）。

**輸入：** `fighter.tsv`
**輸出：** `imagePrompt/` 目錄下的 `.json` 文件

**用法：**
```bash
python generate_prompts_from_tsv.py
```

---

### 3. `generate_action_prompts.py` - 技能動作提示詞生成

**用途：** 從 `fighter.tsv` 讀取所有唯一技能，根據技能類型（近招、遠招、法術、防禦等）生成動作場景提示詞。

**輸入：** `fighter.tsv`
**輸出：** `action_prompts/` 目錄下的 `.txt` 文件

**用法：**
```bash
python generate_action_prompts.py
```

**技能類型模板：**
- 近招：近戰攻擊動作
- 遠招：遠程攻擊動作
- 法術：魔法/氣功效果
- 防禦：格擋/閃避動作
- 輔助：增益/治療效果
- 特殊：特殊技能效果

---

### 4. `generate_detailed_action_prompts.py` - 詳細技能提示詞

**用途：** 根據技能名稱和效果描述，生成更詳細、更具體的動作場景提示詞。

**輸入：** `fighter.tsv`
**輸出：** `action_prompts/` 目錄下的 `.txt` 文件（覆蓋或補充）

**用法：**
```bash
python generate_detailed_action_prompts.py
```

---

### 5. `update_weapon_prompts.py` - 武器詳細提示詞

**用途：** 為特定武器名稱生成高度詳細的英文提示詞，包含材質、裝飾、能量效果等細節。

**輸入：** 內建武器名稱字典
**輸出：** `prompts/` 目錄下的 `.txt` 文件

**用法：**
```bash
python update_weapon_prompts.py
```

**涵蓋武器類型：**
- 打擊類：魔杖、雙頭鋼棍、巨鎚、獵弓、鋼輪弓、反曲弓、背包、法杖、工匠錘、塑膠棒
- 斬擊類：大劍、破壞大劍、白影劍、雪葬的星銀、鐮刀、鬼劍、無限刃等
- 其他類型...

---

### 6. `update_armor_prompts.py` - 防具詳細提示詞

**用途：** 為特定防具名稱生成高度詳細的英文提示詞。

**輸入：** 內建防具名稱字典
**輸出：** `prompts/` 目錄下的 `.txt` 文件

**用法：**
```bash
python update_armor_prompts.py
```

**涵蓋防具類型：**
- 防具-頭：魔術帽、騎士頭盔、原住民頭巾、羽毛帽等
- 防具-衣：練甲、道服、獅相門道服、黑風衣、華山道服等
- 防具-褲：騎士腳甲等
- 防具-飾：各種飾品

---

### 7. `clean_prompts.py` - 提示詞清理

**用途：** 移除提示詞中的樣式標籤（如 "Magic the Gathering style"、"no UI elements" 等），保留純粹的外觀描述。

**輸入：** `prompts/` 目錄下的 `.txt` 文件
**輸出：** 原地修改

**用法：**
```bash
python clean_prompts.py
```

**移除的標籤：**
- `, fantasy RPG equipment`
- `, detailed game asset`
- `, high quality fantasy illustration`
- `, Magic the Gathering style`
- `, by Seb McKinnon and Chris Rahn`
- `, no UI elements`
- `, no text`
- `, no borders`

---

### 8. `batch_generate.py` - 批量生成武器/裝備圖片

**用途：** 連接本地 ComfyUI 伺服器，批量將 `prompts/` 中的提示詞轉換為圖片。

**輸入：** 
- `prompts/*.txt` - 提示詞文件
- `image_*.json` - ComfyUI 工作流配置

**輸出：** `output_images/` 目錄下的 PNG 圖片

**用法：**
```bash
# 確保 ComfyUI 已啟動
python batch_generate.py
```

**執行流程：**
1. 掃描可用的工作流文件（`image_*.json`）
2. 讓使用者選擇工作流
3. 掃描 `prompts/` 中所有提示詞
4. 跳過已生成的圖片（根據檔名前綴判斷）
5. 自動偵測 CLIPTextEncode / PrimitiveStringMultiline 節點
6. 更新提示詞和種子值
7. 發送到 ComfyUI 並等待完成
8. 下載圖片到 `output_images/`

---

### 9. `batch_action_generate.py` - 批量生成技能動作圖片

**用途：** 與 `batch_generate.py` 類似，但專門處理技能動作場景圖片。

**輸入：**
- `action_prompts/*.txt` - 技能動作提示詞
- `image_*.json` - ComfyUI 工作流配置

**輸出：** `action_output_images/` 目錄下的 PNG 圖片

**用法：**
```bash
python batch_action_generate.py
```

---

### 10. `generate_card_images.py` - 卡牌圖片合成

**用途：** 讀取 `fighter.tsv` 數據，結合武器圖片和技能動作圖片，使用 HTML + Playwright 渲染生成最終卡牌圖片。

**輸入：**
- `fighter.tsv` - 卡牌數據
- `output_images/` - 武器/裝備圖片
- `action_output_images/` - 技能動作圖片

**輸出：** `card_output_images/` 目錄下的 PNG 卡牌圖片

**用法：**
```bash
python generate_card_images.py
```

**卡牌結構：**
- 上半部：武器圖片 + 武器名稱
- 下半部：技能動作圖片 + 技能名稱
- 覆蓋層：物理攻擊力（紅色圓）、魔法攻擊力（藍色圓）

**跳過機制：** 已存在的卡牌圖片會自動跳過。

---

### 11. `generate_prompts.js` - JavaScript 版提示詞生成

**用途：** Node.js 版本的提示詞生成工具（功能與 Python 版類似）。

**用法：**
```bash
node generate_prompts.js
```

---

## JSON 文件說明

### `image_z_image_turbo.json` - Z-Image-Turbo 工作流

**用途：** ComfyUI 工作流配置，使用 `z-image-turbo` 模型快速生成圖片。

**主要節點：**
- `9`: SaveImage - 保存圖片
- `57:30`: CLIPLoader - 載入 CLIP 模型（qwen_3_4b.safetensors）
- `57:29`: VAELoader - 載入 VAE 模型（ae.safetensors）
- `57:33`: ConditioningZeroOut - 條件零化
- `57:8`: VAEDecode - VAE 解碼
- `57:3`: KSampler - 採樣器

**特點：** 速度快，適合批量生成。

---

### `image_ernie_image_turbo.json` - Ernie-Image-Turbo 工作流

**用途：** ComfyUI 工作流配置，使用 `ernie-image-turbo` 模型生成圖片。

**主要節點：**
- `73`: SaveImage - 保存圖片
- `88:71`: EmptyFlux2LatentImage - 空潛空間圖像
- `88:66`: UNETLoader - 載入扩散模型（ernie-image-turbo.safetensors）
- `88:65`: VAEDecode - VAE 解碼

**特點：** 
- 使用 PrimitiveStringMultiline 節點直接輸入原始提示詞
- 可通過 PrimitiveBoolean 控制提示詞增強開關
- 適合需要更精確控制提示詞的場景

---

## 完整工作流程

```
1. 準備數據
   fighter.tsv (角色/技能數據)
        ↓
2. 生成提示詞
   generate_prompts.py → prompts/*.txt
   generate_action_prompts.py → action_prompts/*.txt
        ↓
   [可選] 使用 update_*.py 添加詳細提示詞
   [可選] 使用 clean_prompts.py 清理樣式標籤
        ↓
3. 啟動 ComfyUI
   確保本地 ComfyUI 運行在 127.0.0.1:8000
        ↓
4. 批量生成圖片
   batch_generate.py → output_images/*.png
   batch_action_generate.py → action_output_images/*.png
        ↓
5. 合成卡牌
   generate_card_images.py → card_output_images/*.png
```

---

## 數據格式

### `fighter.tsv` 欄位說明

| 欄位 | 說明 | 範例 |
|------|------|------|
| id | 唯一識別碼 | 001 |
| title | 武器/裝備名稱 | 魔杖 |
| weight | 重量 | 1 |
| attackType | 攻擊類型分類 | 打擊-棍 |
| outsidePower | 物理攻擊力 | 5 |
| insidePower | 魔法攻擊力 | 10 |
| skillType | 技能類型 | 法術 |
| skillCost | 技能消耗 | 2 |
| skillName | 技能名稱 | 火球術 |
| skillMana | 技能法力消耗 | 5 |
| skillText | 技能效果描述 | 發射火球造成傷害 |

---

## 注意事項

1. **ComfyUI 必須先啟動**：批量生成腳本需要連接本地 ComfyUI 伺服器
2. **跳過機制**：所有生成腳本都會檢查已存在的文件，避免重複生成
3. **圖片命名規則**：`{提示詞名稱}_{工作流名稱}_{序號}.png`
4. **卡牌合成**：需要武器圖片和技能圖片都存在才能生成完整卡牌
5. **Playwright**：首次使用需執行 `playwright install chromium`

---

## 常見問題

**Q: 腳本找不到 ComfyUI？**
A: 確保 ComfyUI 已啟動並運行在 `127.0.0.1:8000`

**Q: 如何切換 AI 模型？**
A: 執行批量生成腳本時會提示選擇工作流文件

**Q: 卡牌圖片缺少武器/技能圖？**
A: 檢查 `output_images/` 和 `action_output_images/` 是否有對應圖片

**Q: 如何重新生成所有圖片？**
A: 刪除對應輸出目錄下的文件，或修改腳本中的跳過邏輯
