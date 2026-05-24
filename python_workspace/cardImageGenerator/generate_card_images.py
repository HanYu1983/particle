#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Generate card images from fighter.tsv data using HTML template
"""

import os
import time
from playwright.sync_api import sync_playwright

def read_tsv(filepath):
    """Read TSV file and return list of card data"""
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    header = lines[0].strip().split('\t')
    cards = []
    
    for line in lines[1:]:
        parts = line.strip().split('\t')
        if len(parts) >= 11 and parts[1].strip():  # Has title
            card = {
                'id': parts[0].strip(),
                'title': parts[1].strip(),
                'weight': parts[2].strip(),
                'attackType': parts[3].strip(),
                'outsidePower': parts[4].strip(),
                'insidePower': parts[5].strip(),
                'skillType': parts[6].strip(),
                'skillCost': parts[7].strip(),
                'skillName': parts[8].strip(),
                'skillMana': parts[9].strip(),
                'skillText': parts[10].strip(),
            }
            cards.append(card)
    
    return cards

def find_image(directory, title):
    """Find image file by title prefix in directory"""
    if not os.path.exists(directory):
        return ""
    
    # Look for files starting with title
    for filename in os.listdir(directory):
        if filename.startswith(title) and (filename.endswith('.png') or filename.endswith('.jpg') or filename.endswith('.jpeg')):
            return os.path.join(directory, filename)
    
    return ""

def generate_card_html(card):
    """Generate HTML for a single card"""
    title = card['title']
    skill_name = card['skillName'] if card['skillName'] != '無' else title
    power_physical = card['outsidePower'] if 'outsidePower' in card else '0'
    power_magic = card['insidePower'] if 'insidePower' in card else '0'
    equipment_type = card['attackType'] if 'attackType' in card else ''
    weight = card['weight'] if 'weight' in card else ''
    action_type = card['skillType'] if 'skillType' in card else ''
    action_cost = card['skillCost'] if 'skillCost' in card else ''
    effect = card['skillMana'] if 'skillMana' in card else ''
    context = card['skillText'] if 'skillText' in card else ''
    
    # Image paths - find files with timestamp suffix
    weapon_img = find_image("output_images", title)
    action_img = find_image("action_output_images", skill_name)
    
    # Convert to absolute file:// URLs for HTML
    if weapon_img:
        weapon_img = 'file:///' + os.path.abspath(weapon_img).replace('\\', '/')
    if action_img:
        action_img = 'file:///' + os.path.abspath(action_img).replace('\\', '/')
    
    html = f"""<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - {skill_name}</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700;900&display=swap');

        body {{
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            font-family: 'Noto Serif TC', serif;
        }}

        .card-container {{
            position: relative;
            width: 300px;
            height: 420px;
            padding: 12px;
            background: linear-gradient(145deg, #2a2a3a, #1a1a2a);
            border-radius: 16px;
            border: 3px solid #c9a227;
            box-shadow: 
                0 0 20px rgba(201, 162, 39, 0.3),
                0 10px 30px rgba(0, 0, 0, 0.5),
                inset 0 0 30px rgba(201, 162, 39, 0.1);
            overflow: hidden;
        }}

        .card-container::before {{
            content: '';
            position: absolute;
            top: 4px;
            left: 4px;
            right: 4px;
            bottom: 4px;
            border: 1px solid rgba(201, 162, 39, 0.4);
            border-radius: 12px;
            pointer-events: none;
        }}

        .weapon-container {{
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: 48%;
            background: linear-gradient(180deg, #0a0a15 0%, #151525 100%);
            border-radius: 8px;
            border: 2px solid #8b7355;
            overflow: hidden;
            box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
        }}

        .action-container {{
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: 48%;
            margin-top: 8px;
            background: linear-gradient(180deg, #0a0a15 0%, #151525 100%);
            border-radius: 8px;
            border: 2px solid #8b7355;
            overflow: hidden;
            box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
        }}

        .action-name {{
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: 28px;
            font-size: 16px;
            font-weight: 900;
            color: #f4e4c1;
            background: linear-gradient(90deg, #3a2a1a, #5a4a3a, #3a2a1a);
            text-align: center;
            line-height: 28px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
            border-bottom: 2px solid #c9a227;
            letter-spacing: 2px;
        }}

        .action-img {{
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: calc(100% - 28px);
            overflow: hidden;
            background: #1a1a2a;
            display: flex;
            justify-content: center;
            align-items: center;
        }}

        .action-img img {{
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: contrast(1.1) saturate(1.2);
        }}

        .no-image {{
            color: #666;
            font-size: 14px;
        }}

        .UI-container {{
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            pointer-events: none;
        }}

        .UI-center {{
            position: relative;
            top: 110px;
            width: 90%;
            height: 120px;
            display: flex;
            justify-content:space-between;
            align-items: center;
            padding: 0 10px;
        }}

        .UI-power{{
            position: relative;
            width: 80px;
            height: 80px;
            background: radial-gradient(circle at 30% 30%, #f4e4c1, #c9a227, #8b6914);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 60px;
            font-weight: bold;
            color: #1a1a2e;
            border: 3px solid #000000;
            box-shadow: 
                0 0 15px rgba(201, 162, 39, 0.6),
                0 4px 8px rgba(0, 0, 0, 0.4),
                inset 0 -3px 6px rgba(0, 0, 0, 0.3),
                inset 0 3px 6px rgba(255, 255, 255, 0.3);
            text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }}

        .UI-power-physical {{
            position: relative;
            width: 80px;
            height: 80px;
            background: radial-gradient(circle at 30% 30%, #ff9999, #cc3333, #8b0000);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 60px;
            font-weight: bold;
            color: #1a1a2e;
            border: 3px solid #000000;
            box-shadow: 
                0 0 15px rgba(204, 51, 51, 0.6),
                0 4px 8px rgba(0, 0, 0, 0.4),
                inset 0 -3px 6px rgba(0, 0, 0, 0.3),
                inset 0 3px 6px rgba(255, 255, 255, 0.3);
            text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }}

        .UI-power-magic {{
            position: relative;
            width: 80px;
            height: 80px;
            background: radial-gradient(circle at 30% 30%, #99ccff, #3366cc, #00008b);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 60px;
            font-weight: bold;
            color: #1a1a2e;
            border: 3px solid #000000;
            box-shadow: 
                0 0 15px rgba(51, 102, 204, 0.6),
                0 4px 8px rgba(0, 0, 0, 0.4),
                inset 0 -3px 6px rgba(0, 0, 0, 0.3),
                inset 0 3px 6px rgba(255, 255, 255, 0.3);
            text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }}

        .UI-power::before {{
            content: '';
            position: absolute;
            top: 5px;
            left: 5px;
            right: 5px;
            bottom: 5px;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 0.3);
            pointer-events: none;
        }}

        .UI-power::after {{
            content: '';
            position: absolute;
            top: 15%;
            left: 20%;
            width: 25%;
            height: 20%;
            background: radial-gradient(ellipse, rgba(255, 255, 255, 0.6), transparent);
            border-radius: 50%;
            transform: rotate(-30deg);
            pointer-events: none;
        }}

         .UI-weapon-context {{
            position: absolute;
            top: 42px;
            left: 13px;
            width: 90%;
            padding: 5px;
            background: rgba(255, 255, 255, 0.2);
            display: flex;
            font-size: 12px;
            color: #ffffff;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 1.0);
            font-family: 'sans-serif', serif;
        }}

        .UI-context {{
            position: absolute;
            top: 257px;
            left: 13px;
            width: 90%;
            padding: 5px;
            background: rgba(255, 255, 255, 0.3);
            display: flex;
            font-size: 12px;
            color: #ffffff;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 1.0);
            font-family: 'sans-serif', serif;
        }}
    </style>
</head>
<body>
    <div class="card-container">
        <div class="weapon-container">
            <div class="action-name">
                {title}
            </div>
            <div class="action-img">
                {'<img src="' + weapon_img + '" alt="Weapon Image" style="width: 100%; height: 100%;">' if weapon_img else '<div class="no-image">No Image</div>'}
            </div>
        </div>
        <div class="action-container">
            <div class="action-name">
                {skill_name}
            </div>
            <div class="action-img">
                {'<img src="' + action_img + '" alt="Action Image" style="width: 100%; height: 100%;">' if action_img else '<div class="no-image">No Image</div>'}
            </div>
        </div>
         <div class="UI-container">
            <div class="UI-center">
                <div class="UI-power-physical">
                    {power_physical}
                </div>
                <div class="UI-power-magic">
                    {power_magic}
                </div>
            </div>
            <div class="UI-weapon-context">
                {equipment_type} {weight}
            </div>
            <div class="UI-context">
                {action_type} {action_cost} {effect} {context}
            </div>
        </div>
    </div>
</body>
</html>"""
    
    return html

def main():
    # Read card data
    cards = read_tsv('fighter.tsv')
    print(f'Found {len(cards)} cards')
    
    # Create output directory
    output_dir = 'card_output_images'
    os.makedirs(output_dir, exist_ok=True)
    
    # Create temp directory for HTML files
    temp_dir = 'temp_html'
    os.makedirs(temp_dir, exist_ok=True)
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        for i, card in enumerate(cards):
            id = card['id']

            # 檢查是否已經生成過圖片
            output_path = os.path.join(output_dir, f"{id}.png")

            if os.path.exists(output_path):
                print(f'Skipping: {output_path} already exists ({i+1}/{len(cards)})')
                continue

            title = card['title']
            skill_name = card['skillName'] if card['skillName'] != '無' else title
            
            # Generate HTML
            html_content = generate_card_html(card)
            
            # Save temp HTML
            html_path = os.path.join(temp_dir, f'{title}_{i}.html')
            with open(html_path, 'w', encoding='utf-8') as f:
                f.write(html_content)
            
            # Load HTML and capture screenshot
            file_url = f'file:///{os.path.abspath(html_path).replace(chr(92), "/")}'
            print(f'Loading: {file_url}')
            page.goto(file_url, wait_until='networkidle', timeout=30000)
            
            # Wait for fonts to load
            page.wait_for_timeout(2000)
            
            # Capture the card container only
            card_element = page.query_selector('.card-container')
            if card_element:
                # Screenshot the card element
                output_path = os.path.join(output_dir, f'{id}.png')
                card_element.screenshot(path=output_path, type='png')
                print(f'Generated: {output_path} ({i+1}/{len(cards)})')
            else:
                print(f'Failed: {id} - card element not found')
        
        browser.close()
    
    print(f'\nTotal cards generated: {len(cards)}')

if __name__ == '__main__':
    main()
