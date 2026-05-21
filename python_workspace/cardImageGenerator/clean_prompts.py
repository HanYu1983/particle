#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Clean all prompts to keep only appearance descriptions
Remove style tags like "Magic the Gathering style", "no UI elements", etc.
"""

import os
import glob

# Style tags to remove
STYLE_TAGS = [
    ', fantasy RPG equipment',
    ', detailed game asset',
    ', high quality fantasy illustration',
    ', Magic the Gathering style',
    ', by Seb McKinnon and Chris Rahn',
    ', no UI elements',
    ', no text',
    ', no borders',
]

def clean_prompt(prompt):
    """Remove style tags from prompt"""
    cleaned = prompt
    for tag in STYLE_TAGS:
        cleaned = cleaned.replace(tag, '')
    # Clean up any double commas or trailing spaces
    cleaned = cleaned.replace(', ,', ',').strip()
    # Remove trailing comma if exists
    if cleaned.endswith(','):
        cleaned = cleaned[:-1].strip()
    return cleaned

def main():
    prompts_dir = 'prompts'
    txt_files = glob.glob(os.path.join(prompts_dir, '*.txt'))
    
    print(f'Cleaning {len(txt_files)} prompt files...')
    
    for filepath in sorted(txt_files):
        with open(filepath, 'r', encoding='utf-8') as f:
            original = f.read()
        
        cleaned = clean_prompt(original)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(cleaned)
        
        filename = os.path.basename(filepath)
        print(f'Cleaned: {filename}')
    
    print(f'\nTotal files cleaned: {len(txt_files)}')

if __name__ == '__main__':
    main()
