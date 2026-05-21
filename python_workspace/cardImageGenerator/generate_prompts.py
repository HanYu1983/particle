import json
import os

# Read TSV file manually
titles = set()
with open('fighter.tsv', 'r', encoding='utf-8') as f:
    lines = f.readlines()
    
# First line is header
header = lines[0].strip().split('\t')
print('Header:', header)

# Find title column index
title_idx = None
for i, col in enumerate(header):
    if 'title' in col.lower():
        title_idx = i
        break

print('Title column index:', title_idx)

# Read data lines
for line in lines[1:]:
    parts = line.strip().split('\t')
    if len(parts) > title_idx and parts[title_idx]:
        titles.add(parts[title_idx])

print(f'Found {len(titles)} unique titles')

# Create imagePrompt directory if not exists
os.makedirs('imagePrompt', exist_ok=True)

# Generate prompts for each unique title
for title in sorted(titles):
    # Create safe filename
    safe_name = ''.join(c if c.isalnum() or c in '-_' else '_' for c in title)
    filename = f'imagePrompt/{safe_name}.json'
    
    prompt_data = {
        'title': title,
        'prompt': f'{title}, martial arts weapon, traditional Chinese martial arts style, ink wash painting style, sumi-e, monochrome ink painting, flowing brush strokes, dynamic pose, ancient weapon aesthetic, minimalist composition, traditional Asian art style'
    }
    
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(prompt_data, f, ensure_ascii=False, indent=2)

print(f'Generated {len(titles)} unique title prompts')