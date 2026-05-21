#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Generate action prompts for all unique skills in fighter.tsv
Focus on action scenes and speed sensation
"""

import os
import json

# Read TSV and collect skills with their context
def read_skills(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    header = lines[0].strip().split('\t')
    title_idx = 1
    attack_type_idx = 3
    skill_type_idx = 6
    skill_name_idx = 8
    skill_text_idx = 10
    
    skills = {}
    for line in lines[1:]:
        parts = line.strip().split('\t')
        if len(parts) >= 11:
            title = parts[title_idx].strip()
            attack_type = parts[attack_type_idx].strip()
            skill_type = parts[skill_type_idx].strip()
            skill_name = parts[skill_name_idx].strip()
            skill_text = parts[skill_text_idx].strip()
            
            if skill_name and skill_name != '無' and skill_name not in skills:
                skills[skill_name] = {
                    'title': title,
                    'attack_type': attack_type,
                    'skill_type': skill_type,
                    'skill_text': skill_text
                }
    
    return skills

# Action prompt templates based on skill type and name patterns
ACTION_TEMPLATES = {
    # 近招 (Close Combat)
    '近招': {
        'base': 'A warrior executing a powerful close combat strike',
        'action': 'dynamic forward lunge with weapon extended, body weight driving into the attack',
        'speed': 'motion blur on the weapon trajectory, speed lines emphasizing rapid movement',
        'impact': 'opponent recoiling from the devastating blow, debris flying from impact point',
        'energy': 'combat energy crackling around the weapon',
        'perspective': 'dramatic low angle perspective capturing the moment of impact',
    },
    # 遠招 (Ranged)
    '遠招': {
        'base': 'A warrior unleashing a powerful ranged attack',
        'action': 'dynamic throwing or projecting motion, energy gathering before release',
        'speed': 'projectile streaking through air leaving visible energy trail, motion blur',
        'impact': 'target bracing for impact, shockwave radiating from strike point',
        'energy': 'elemental energy凝聚 around the projectile',
        'perspective': 'dynamic side angle showing the full trajectory of the attack',
    },
    # 防招 (Defensive)
    '防招': {
        'base': 'A warrior executing a defensive counter maneuver',
        'action': 'weapon raised in defensive stance, body positioned to deflect incoming attack',
        'speed': 'rapid parrying motion, defensive energy flaring on contact',
        'impact': 'sparks flying from weapon clash, attacker thrown off balance',
        'energy': 'protective barrier shimmering around the defender',
        'perspective': 'close-up perspective capturing the moment of weapon contact',
    },
    # 氣場 (Aura/Field)
    '氣場': {
        'base': 'A warrior activating a powerful aura field',
        'action': 'arms spread wide, energy erupting from the body',
        'speed': 'energy waves expanding outward, fabric and hair flowing with the power surge',
        'impact': 'ground cracking beneath the warrior, debris lifted by energy pressure',
        'energy': 'visible aura field surrounding the warrior with elemental effects',
        'perspective': 'wide angle perspective showing the full extent of the aura field',
    },
    # 氣功 (Qi Technique)
    '氣功': {
        'base': 'A warrior channeling internal energy for a technique',
        'action': 'focused stance with hands forming energy manipulation gestures',
        'speed': 'energy flowing rapidly through meridians, visible qi trails',
        'impact': 'target affected by the technique, energy transfer visible',
        'energy': 'concentrated qi energy glowing around the practitioner',
        'perspective': 'medium shot capturing the energy manipulation process',
    },
    # 反應 (Reaction)
    '反應': {
        'base': 'A warrior executing a lightning-fast reaction',
        'action': 'sudden evasive or counter movement, body responding to threat',
        'speed': 'afterimage effect showing rapid movement, time-slowing sensation',
        'impact': 'attack missing or being countered, attacker caught off guard',
        'energy': 'reflex energy flaring around the warrior',
        'perspective': 'dynamic angle capturing the split-second reaction moment',
    },
}

# Specific action descriptions for common skill name patterns
SKILL_PATTERNS = {
    '斬': 'blade slashing through air with deadly precision, curved energy trail following the edge',
    '刺': 'weapon thrusting forward with pinpoint accuracy, piercing energy concentrated at the tip',
    '打': 'heavy strike connecting with devastating force, shockwave radiating from impact',
    '拳': 'fist striking with martial arts precision, energy凝聚 around the knuckles',
    '腿': 'leg sweeping or kicking with incredible speed, motion blur on the limb',
    '火': 'flames erupting along the attack path, fire energy consuming the target',
    '水': 'water energy flowing through the attack, ice crystals forming in the air',
    '雷': 'lightning crackling around the weapon, electrical discharge striking the target',
    '風': 'wind energy swirling around the attack, air currents visible as distortion',
    '地': 'earth energy manifesting in the strike, ground cracking from the force',
    '毒': 'poison energy seeping from the attack, toxic mist surrounding the target',
    '光': 'holy light radiating from the technique, purifying energy striking the target',
    '暗': 'dark energy consuming the attack, shadows reaching toward the target',
    '劍': 'sword technique executed with masterful precision, blade leaving afterimages',
    '刀': 'blade technique with fluid motion, curved slash cutting through the air',
    '槍': 'spear thrust with incredible reach, weapon extending toward the target',
    '弓': 'arrow released with perfect form, projectile streaking toward the target',
    '棍': 'staff strike with sweeping motion, weapon blurring from speed',
    '鎚': 'hammer blow with overwhelming force, weapon descending with devastating power',
    '恢復': 'healing energy flowing into the target, warm light restoring vitality',
    '防禦': 'defensive barrier materializing, protective energy absorbing the attack',
    '強化': 'power surge enhancing the warrior, visible energy boost surrounding the body',
}

def generate_action_prompt(skill_name, skill_info):
    """Generate action prompt for a skill"""
    skill_type = skill_info['skill_type']
    attack_type = skill_info['attack_type']
    title = skill_info['title']
    
    template = ACTION_TEMPLATES.get(skill_type, ACTION_TEMPLATES['近招'])
    
    parts = []
    
    # Base description
    parts.append(template['base'])
    
    # Add specific skill name context
    parts.append(f'performing the technique "{skill_name}"')
    
    # Action description
    parts.append(template['action'])
    
    # Add weapon/type specific details
    if '斬' in skill_name or '斬擊' in attack_type:
        parts.append(SKILL_PATTERNS['斬'])
    elif '刺' in skill_name or '刺擊' in attack_type:
        parts.append(SKILL_PATTERNS['刺'])
    elif '打' in skill_name or '打擊' in attack_type:
        parts.append(SKILL_PATTERNS['打'])
    elif '拳' in skill_name or '格鬥-拳' in attack_type:
        parts.append(SKILL_PATTERNS['拳'])
    elif '腿' in skill_name or '格鬥-腿' in attack_type:
        parts.append(SKILL_PATTERNS['腿'])
    elif '劍' in skill_name or '刺擊-劍' in attack_type:
        parts.append(SKILL_PATTERNS['劍'])
    elif '刀' in skill_name or '斬擊-刀' in attack_type:
        parts.append(SKILL_PATTERNS['刀'])
    elif '槍' in skill_name or '刺擊-槍' in attack_type:
        parts.append(SKILL_PATTERNS['槍'])
    elif '弓' in skill_name or '打擊-弓' in attack_type:
        parts.append(SKILL_PATTERNS['弓'])
    elif '棍' in skill_name or '打擊-棍' in attack_type:
        parts.append(SKILL_PATTERNS['棍'])
    elif '鎚' in skill_name or '打擊-鎚' in attack_type:
        parts.append(SKILL_PATTERNS['鎚'])
    
    # Add element specific details
    if '火' in skill_name or '火' in skill_info.get('skill_text', ''):
        parts.append(SKILL_PATTERNS['火'])
    elif '水' in skill_name or '冰' in skill_name or '水' in skill_info.get('skill_text', ''):
        parts.append(SKILL_PATTERNS['水'])
    elif '雷' in skill_name or '電' in skill_name or '雷' in skill_info.get('skill_text', ''):
        parts.append(SKILL_PATTERNS['雷'])
    elif '風' in skill_name or '風' in skill_info.get('skill_text', ''):
        parts.append(SKILL_PATTERNS['風'])
    elif '地' in skill_name or '石' in skill_name or '地' in skill_info.get('skill_text', ''):
        parts.append(SKILL_PATTERNS['地'])
    elif '毒' in skill_name or '毒' in skill_info.get('skill_text', ''):
        parts.append(SKILL_PATTERNS['毒'])
    elif '光' in skill_name or '光' in skill_info.get('skill_text', ''):
        parts.append(SKILL_PATTERNS['光'])
    elif '暗' in skill_name or '闇' in skill_name or '暗' in skill_info.get('skill_text', ''):
        parts.append(SKILL_PATTERNS['暗'])
    
    # Speed emphasis
    parts.append(template['speed'])
    
    # Impact
    parts.append(template['impact'])
    
    # Energy
    parts.append(template['energy'])
    
    # Perspective
    parts.append(template['perspective'])
    
    # Additional atmosphere
    parts.append('intense battle atmosphere with dramatic lighting')
    parts.append('dynamic composition emphasizing motion and power')
    
    return ', '.join(parts)

def main():
    skills = read_skills('fighter.tsv')
    
    print(f'Found {len(skills)} unique skills')
    
    # Create action_prompts directory
    prompts_dir = 'action_prompts'
    os.makedirs(prompts_dir, exist_ok=True)
    
    # Generate prompts for each skill
    for skill_name, skill_info in sorted(skills.items()):
        prompt = generate_action_prompt(skill_name, skill_info)
        
        # Save to file
        filepath = os.path.join(prompts_dir, f'{skill_name}.txt')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(prompt)
        
        print(f'Generated: {filepath} ({skill_info["skill_type"]})')
    
    print(f'\nTotal action prompts generated: {len(skills)}')

if __name__ == '__main__':
    main()
