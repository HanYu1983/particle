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
                output_path = os.path.join(output_dir, f'{title}.jpeg')
                card_element.screenshot(path=output_path, type='jpeg', quality=95)
                print(f'Generated: {output_path} ({i+1}/{len(cards)})')
            else:
                print(f'Failed: {title} - card element not found')
        
        browser.close()
    
    print(f'\nTotal cards generated: {len(cards)}')

if __name__ == '__main__':
    main()
