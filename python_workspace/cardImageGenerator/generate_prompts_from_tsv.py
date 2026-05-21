#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Generate detailed appearance prompts for all unique titles in fighter.tsv
"""

import os

# Define prompt templates based on attack type categories
PROMPT_TEMPLATES = {
    # 防具類 (Armor)
    '防具-頭': {
        'base': 'A mystical {name}, ornate headgear with intricate details',
        'details': [
            'elaborate decorative patterns and magical enchantments',
            'crafted from fine materials with protective runes',
            'floating slightly above a stone pedestal',
            'magical energy swirling around it',
        ],
        'style': 'fantasy RPG equipment, detailed game asset, high quality fantasy illustration, Magic the Gathering style, by Seb McKinnon and Chris Rahn, no UI elements, no text, no borders'
    },
    '防具-衣': {
        'base': 'An elegant {name}, protective robe or armor with detailed craftsmanship',
        'details': [
            'intricate embroidery and protective symbols woven into the fabric',
            'crafted from premium materials with magical reinforcement',
            'displayed on a mannequin or floating above a stone pedestal',
            'subtle magical aura emanating from the garment',
        ],
        'style': 'fantasy RPG equipment, detailed game asset, high quality fantasy illustration, Magic the Gathering style, by Seb McKinnon and Chris Rahn, no UI elements, no text, no borders'
    },
    '防具-褲': {
        'base': 'A sturdy {name}, protective leg armor with reinforced plating',
        'details': [
            'articulated joints for mobility with decorative engravings',
            'crafted from durable materials with protective enchantments',
            'floating slightly above a stone pedestal',
            'magical energy subtly glowing along the seams',
        ],
        'style': 'fantasy RPG equipment, detailed game asset, high quality fantasy illustration, Magic the Gathering style, by Seb McKinnon and Chris Rahn, no UI elements, no text, no borders'
    },
    '防具-飾': {
        'base': 'A delicate {name}, ornate accessory with mystical properties',
        'details': [
            'intricate craftsmanship with embedded gemstones or magical crystals',
            'crafted from precious materials with enchanting runes',
            'floating slightly above a stone pedestal',
            'soft magical glow emanating from the item',
        ],
        'style': 'fantasy RPG equipment, detailed game asset, high quality fantasy illustration, Magic the Gathering style, by Seb McKinnon and Chris Rahn, no UI elements, no text, no borders'
    },
    '防具-盾': {
        'base': 'A formidable {name}, sturdy shield with protective enchantments',
        'details': [
            'reinforced metal construction with decorative heraldry',
            'crafted from durable materials with magical wards inscribed',
            'leaning against a stone pedestal or floating slightly above it',
            'protective magical aura shimmering around the surface',
        ],
        'style': 'fantasy RPG equipment, detailed game asset, high quality fantasy illustration, Magic the Gathering style, by Seb McKinnon and Chris Rahn, no UI elements, no text, no borders'
    },
    
    # 武器類 (Weapons)
    '打擊-棍': {
        'base': 'A powerful {name}, ornate staff or rod with magical properties',
        'details': [
            'intricate carvings and runes along the shaft',
            'crafted from ancient wood or metal with crystalline accents',
            'floating slightly above a stone pedestal',
            'magical energy emanating from the weapon',
        ],
        'style': 'fantasy RPG equipment, detailed game asset, high quality fantasy illustration, Magic the Gathering style, by Seb McKinnon and Chris Rahn, no UI elements, no text, no borders'
    },
    '打擊-鎚': {
        'base': 'A massive {name}, heavy war hammer with devastating power',
        'details': [
            'reinforced metal head with decorative engravings',
            'crafted from durable materials with magical enhancements',
            'resting on a stone pedestal or floating slightly above it',
            'subtle magical energy crackling around the weapon',
        ],
        'style': 'fantasy RPG equipment, detailed game asset, high quality fantasy illustration, Magic the Gathering style, by Seb McKinnon and Chris Rahn, no UI elements, no text, no borders'
    },
    '打擊-弓': {
        'base': 'An elegant {name}, finely crafted bow with precision engineering',
        'details': [
            'curved limbs with intricate decorative patterns',
            'crafted from premium wood and metal with magical strings',
            'floating slightly above a stone pedestal',
            'subtle magical aura surrounding the weapon',
        ],
        'style': 'fantasy RPG equipment, detailed game asset, high quality fantasy illustration, Magic the Gathering style, by Seb McKinnon and Chris Rahn, no UI elements, no text, no borders'
    },
    '打擊-包': {
        'base': 'A practical {name}, sturdy backpack with multiple compartments',
        'details': [
            'reinforced leather construction with metal buckles and straps',
            'crafted from durable materials with magical storage properties',
            'resting on a stone pedestal or floating slightly above it',
            'subtle magical glow emanating from within',
        ],
        'style': 'fantasy RPG equipment, detailed game asset, high quality fantasy illustration, Magic the Gathering style, by Seb McKinnon and Chris Rahn, no UI elements, no text, no borders'
    },
    '斬擊-刀': {
        'base': 'A sleek {name}, elegant blade with razor-sharp edge',
        'details': [
            'intricate patterns along the blade with decorative guard',
            'crafted from fine steel with magical enchantments',
            'floating slightly above a stone pedestal',
            'subtle magical energy shimmering along the edge',
        ],
        'style': 'fantasy RPG equipment, detailed game asset, high quality fantasy illustration, Magic the Gathering style, by Seb McKinnon and Chris Rahn, no UI elements, no text, no borders'
    },
    '斬擊-大': {
        'base': 'A colossal {name}, massive greatsword with overwhelming presence',
        'details': [
            'broad blade with intricate engravings and reinforced construction',
            'crafted from heavy steel with magical enhancements',
            'resting on a stone pedestal or floating slightly above it',
            'powerful magical aura emanating from the weapon',
        ],
        'style': 'fantasy RPG equipment, detailed game asset, high quality fantasy illustration, Magic the Gathering style, by Seb McKinnon and Chris Rahn, no UI elements, no text, no borders'
    },
    '斬擊-單': {
        'base': 'A refined {name}, single-handed blade with elegant design',
        'details': [
            'slender blade with decorative patterns and ornate hilt',
            'crafted from premium steel with magical properties',
            'floating slightly above a stone pedestal',
            'subtle magical energy flowing along the blade',
        ],
        'style': 'fantasy RPG equipment, detailed game asset, high quality fantasy illustration, Magic the Gathering style, by Seb McKinnon and Chris Rahn, no UI elements, no text, no borders'
    },
    '刺擊-劍': {
        'base': 'A graceful {name}, elegant sword with precise craftsmanship',
        'details': [
            'slender blade with intricate fuller and decorative crossguard',
            'crafted from fine steel with magical enchantments',
            'floating slightly above a stone pedestal',
            'subtle magical aura surrounding the weapon',
        ],
        'style': 'fantasy RPG equipment, detailed game asset, high quality fantasy illustration, Magic the Gathering style, by Seb McKinnon and Chris Rahn, no UI elements, no text, no borders'
    },
    '刺擊-槍': {
        'base': 'A formidable {name}, long spear with deadly precision',
        'details': [
            'sharp blade with decorative patterns along the shaft',
            'crafted from durable materials with magical enhancements',
            'floating slightly above a stone pedestal',
            'subtle magical energy emanating from the tip',
        ],
        'style': 'fantasy RPG equipment, detailed game asset, high quality fantasy illustration, Magic the Gathering style, by Seb McKinnon and Chris Rahn, no UI elements, no text, no borders'
    },
    '刺擊-匕': {
        'base': 'A sleek {name}, compact dagger with lethal design',
        'details': [
            'sharp blade with intricate engravings and ornate hilt',
            'crafted from fine steel with magical properties',
            'floating slightly above a stone pedestal',
            'subtle magical glow emanating from the blade',
        ],
        'style': 'fantasy RPG equipment, detailed game asset, high quality fantasy illustration, Magic the Gathering style, by Seb McKinnon and Chris Rahn, no UI elements, no text, no borders'
    },
    '格鬥-拳': {
        'base': 'A pair of {name}, reinforced gauntlets with combat enhancements',
        'details': [
            'articulated fingers with protective plating and decorative patterns',
            'crafted from durable materials with magical reinforcement',
            'floating slightly above a stone pedestal',
            'subtle magical energy crackling around the knuckles',
        ],
        'style': 'fantasy RPG equipment, detailed game asset, high quality fantasy illustration, Magic the Gathering style, by Seb McKinnon and Chris Rahn, no UI elements, no text, no borders'
    },
    '格鬥-腿': {
        'base': 'A pair of {name}, reinforced boots with combat enhancements',
        'details': [
            'reinforced soles with decorative patterns and protective plating',
            'crafted from durable materials with magical enhancements',
            'floating slightly above a stone pedestal',
            'subtle magical energy emanating from the footwear',
        ],
        'style': 'fantasy RPG equipment, detailed game asset, high quality fantasy illustration, Magic the Gathering style, by Seb McKinnon and Chris Rahn, no UI elements, no text, no borders'
    },
    '打擊-短': {
        'base': 'A compact {name}, short weapon with versatile design',
        'details': [
            'intricate craftsmanship with decorative elements',
            'crafted from durable materials with magical properties',
            'floating slightly above a stone pedestal',
            'subtle magical aura surrounding the weapon',
        ],
        'style': 'fantasy RPG equipment, detailed game asset, high quality fantasy illustration, Magic the Gathering style, by Seb McKinnon and Chris Rahn, no UI elements, no text, no borders'
    },
}

# Default template for unknown types
DEFAULT_TEMPLATE = {
    'base': 'A mystical {name}, ornate item with intricate details',
    'details': [
        'elaborate craftsmanship with decorative patterns',
        'crafted from fine materials with magical properties',
        'floating slightly above a stone pedestal',
        'magical energy emanating from the item',
    ],
    'style': 'fantasy RPG equipment, detailed game asset, high quality fantasy illustration, Magic the Gathering style, by Seb McKinnon and Chris Rahn, no UI elements, no text, no borders'
}

def read_tsv(filepath):
    """Read TSV file and extract unique titles with their attack types"""
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Get header indices
    header = lines[0].strip().split('\t')
    title_idx = 1  # title/string is second column
    attack_type_idx = 3  # attackType/string is fourth column
    
    # Extract unique titles with their types
    items = {}
    for line in lines[1:]:
        parts = line.strip().split('\t')
        if len(parts) >= 4:
            title = parts[title_idx].strip()
            attack_type = parts[attack_type_idx].strip()
            if title and title not in items:
                items[title] = attack_type
    
    return items

def generate_prompt(name, attack_type):
    """Generate a detailed prompt for the given item"""
    template = PROMPT_TEMPLATES.get(attack_type, DEFAULT_TEMPLATE)
    
    # Build the prompt
    parts = []
    
    # Base description
    base = template['base'].format(name=name)
    parts.append(base)
    
    # Add details
    parts.extend(template['details'])
    
    # Add style
    parts.append(template['style'])
    
    return ', '.join(parts)

def main():
    # Read TSV file
    tsv_path = 'fighter.tsv'
    items = read_tsv(tsv_path)
    
    print(f'Found {len(items)} unique titles')
    
    # Create prompts directory if it doesn't exist
    prompts_dir = 'prompts'
    os.makedirs(prompts_dir, exist_ok=True)
    
    # Generate prompts for each item
    for title, attack_type in sorted(items.items()):
        prompt = generate_prompt(title, attack_type)
        
        # Save to file
        filename = f'{title}.txt'
        filepath = os.path.join(prompts_dir, filename)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(prompt)
        
        print(f'Generated: {filepath} ({attack_type})')
    
    print(f'\nTotal prompts generated: {len(items)}')

if __name__ == '__main__':
    main()
