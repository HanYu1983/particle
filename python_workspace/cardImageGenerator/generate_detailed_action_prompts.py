#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Generate detailed action prompts for all skills based on name and effect
Each prompt is unique and tailored to the specific skill
"""

import os

# Read TSV and collect skills with their context
def read_skills(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
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

# Detailed prompt generation based on skill name and effect
def generate_detailed_prompt(skill_name, skill_info):
    """Generate unique detailed prompt for each skill"""
    title = skill_info['title']
    attack_type = skill_info['attack_type']
    skill_type = skill_info['skill_type']
    skill_text = skill_info['skill_text']
    
    # Build prompt components
    parts = []
    
    # Character and equipment description based on title
    character_desc = get_character_description(title, attack_type)
    parts.append(character_desc)
    
    # Action description based on skill name and type
    action_desc = get_action_description(skill_name, skill_type, attack_type)
    parts.append(action_desc)
    
    # Effect visualization based on skill text
    effect_desc = get_effect_visualization(skill_name, skill_text, skill_type)
    parts.append(effect_desc)
    
    # Speed and motion emphasis
    speed_desc = get_speed_description(skill_name, skill_type)
    parts.append(speed_desc)
    
    # Impact and result
    impact_desc = get_impact_description(skill_name, skill_text, skill_type)
    parts.append(impact_desc)
    
    # Energy and atmosphere
    energy_desc = get_energy_description(skill_name, skill_text)
    parts.append(energy_desc)
    
    # Camera angle and composition
    camera_desc = get_camera_description(skill_name, skill_type)
    parts.append(camera_desc)
    
    # Final atmosphere
    parts.append('intense battle atmosphere with dramatic lighting')
    parts.append('dynamic composition emphasizing motion and power')
    
    return ', '.join(parts)

def get_character_description(title, attack_type):
    """Get character and equipment description"""
    char_map = {
        '魔術帽': 'A mystical wizard wearing an ornate pointed hat with arcane symbols',
        '魔杖': 'A powerful mage wielding a crystal-topped wooden staff',
        '魔石': 'A sorcerer adorned with a glowing magical pendant',
        '鐵梭子': 'A nimble assassin wielding a shuttle-shaped throwing dagger',
        '鐵指環': 'A fighter wearing an iron ring that enhances fist strikes',
        '鐮刀': 'A grim reaper-like warrior wielding a massive curved scythe',
        '騎士頭盔': 'A heavily armored knight wearing a polished steel helmet',
        '騎士腳甲': 'A knight with reinforced leg armor and steel greaves',
        '騎士胸甲': 'A paladin in full plate armor with reinforced chest protection',
        '雙頭鋼棍': 'A warrior wielding a massive double-headed steel staff',
        '戰士靴': 'A battle-hardened fighter wearing reinforced combat boots',
        '練甲': 'A martial artist in traditional training armor with layered fabric',
        '製木書': 'A craftsman holding an ancient woodworking manual',
        '腿甲': 'A warrior wearing protective leg armor with articulated plates',
        '腐蟲砂': 'A蛊 master wielding a container of toxic sand and insects',
        '鉄劍': 'A swordsman wielding a practical iron sword with battle scars',
        '道服': 'A Taoist priest in flowing white and blue robes',
        '道具': 'An adventurer with a collection of potions and utility items',
        '獅相門道服': 'A lion sect martial artist in traditional uniform with lion emblem',
        '獅相門拳套': 'A lion sect fighter wearing gauntlets with lion head knuckle guards',
        '黑風拳套': 'A dark wind martial artist wearing black gauntlets with wind patterns',
        '黑風衣': 'A mysterious figure in a flowing black coat that moves with the wind',
        '華山道服': 'A Mount Hua sect practitioner in elegant blue and white robes',
        '無限刃': 'A blazing warrior wielding a sword with flames dancing along the blade',
        '寒月': 'A cold warrior wielding a frost-covered sword with moonlight reflections',
        '麻腦串': 'A monk wearing a mind-clearing bead necklace',
        '粗布麻衣': 'A humble warrior in simple rough cloth garments',
        '猛士披挂': 'A fierce warrior in bold battle dress with tribal patterns',
        '鬼劍': 'A demonic warrior wielding a wickedly curved dark sword',
        '鬼疱丁': 'A fearsome fighter wielding a demonic cleaver-style blade',
        '紋章盾': 'A defender carrying an ornate heraldic shield with protective runes',
        '神羅裝束': 'A divine warrior in celestial armor with golden and white patterns',
        '破壞大劍': 'A colossal warrior wielding an impossibly wide destruction greatsword',
        '破血針匣': 'An assassin wielding a needle case with bleeding enchantments',
        '拳套': 'A martial artist wearing reinforced fighting gauntlets',
        '原住民頭巾': 'A tribal warrior wearing a feathered headband with bone ornaments',
        '原住民披肩': 'A tribal fighter draped in a woven shawl with traditional patterns',
        '飛沙走石': 'An earth mage wielding a container of sand and stone',
        '苦無': 'A ninja wielding leaf-shaped throwing knives',
        '苗刀': 'A Chinese warrior wielding a long gracefully curved miaodao',
        '背包': 'An adventurer carrying a rugged backpack with multiple compartments',
        '柔術道服': 'A jiu-jitsu practitioner in a white gi with reinforced collar',
        '柔術手套': 'A grappler wearing flexible gloves designed for close combat',
        '青竹刺': 'A nature warrior wielding a bamboo-styled thrusting dagger',
        '長劍': 'A noble swordsman wielding an elegant longsword with ornate fuller',
        '法杖': 'A classic mage wielding a smooth wooden staff with metal headpiece',
        '武器大師裝束': 'A weapon master in practical combat outfit with multiple weapon attachments',
        '防火手套': 'A fire specialist wearing heat-resistant gauntlets with flame symbols',
        '忍者指套': 'A ninja wearing finger gauntlets with elemental symbol engravings',
        '忍具': 'A shinobi carrying a dark tool pouch with various ninja equipment',
        '忍刀': 'A ninja wielding a straight narrow shinobigatana',
        '羽毛帽': 'An agile fighter wearing a feathered hat with vibrant plumage',
        '巨鎚': 'A massive warrior wielding an enormous rectangular steel war hammer',
        '功夫褲': 'A kung fu master wearing loose training pants with reinforced knees',
        '功夫鞋': 'A martial artist wearing lightweight flexible kung fu shoes',
        '木針匣': 'A craftsman wielding a wooden needle case',
        '元素服': 'An elemental mage in a robe that shifts between fire, water, wind, and earth colors',
        '工具箱': 'A master craftsman carrying an organized tool box',
        '大劍': 'A warrior wielding a massive two-handed greatsword with broad blade',
        '大手裡劍': 'A ninja wielding a massive multi-pointed shuriken',
        '三角帽': 'A wizard wearing a tricorn hat with three curved brims and constellations',
        '力量戒指': 'A brute warrior wearing a massive dark iron ring with crimson gemstone',
        '青龍刀': 'A legendary warrior wielding a green dragon blade with dragon scale patterns',
        '醫術書': 'A healer holding an ancient medical treatise with anatomical illustrations',
        '厨藝書': 'A chef warrior holding a culinary cookbook with food illustrations',
        '佛學書': 'A monk holding an ancient Buddhist scripture with golden lotus embossments',
        '塑膠棒': 'A trainer wielding a modern polymer training staff with segmented construction',
        '鉄刀': 'A practical warrior wielding a sturdy iron blade with reinforced spine',
        '天霜皓月': 'A frost warrior wielding a moon blade with ice crystal formations',
        '品鑒書': 'An appraiser holding an elegant manual with quality assessment charts',
        '鍛造書': 'A blacksmith holding a forging manual with technique illustrations',
        '詩書': 'A scholar warrior holding a poetry collection with calligraphy samples',
        '音律書': 'A musician warrior holding a music theory manual with notation',
        '雜學書': 'A polymath holding a miscellaneous knowledge tome with various subjects',
        '工匠錘': 'A master craftsman wielding a polished steel hammer with dual faces',
        '白影劍': 'A holy warrior wielding a pristine white greatsword that glows',
        '雪葬的星銀': 'A legendary warrior wielding a starlight silver greatsword with frost patterns',
        '天目影打刀': 'A shadow warrior wielding a katana that absorbs light',
        '喜多院十文字': 'A noble warrior wielding a cross-shaped spear with Japanese aesthetic',
        '獵弓': 'A hunter wielding a sturdy layered wood and horn hunting bow',
        '鋼輪弓': 'An archer wielding a mechanical compound bow with steel wheel cams',
        '匣裏龍吟': 'A storm warrior wielding a sword with lightning and fire patterns',
        '祭禮劍': 'A ceremonial warrior wielding a pristine sword with sacred engravings',
        '匣裏滅晨': 'A dark warrior wielding a spear with void-like patterns',
        '反曲弓': 'An archer wielding an elegant recurve bow with curved limb tips',
        '二虎拳套': 'A martial artist wearing twin tiger gauntlets with fierce tiger head motifs',
        '騎士劍': 'A holy knight wielding a straight sword with holy light patterns',
        '東方流道服': 'An Eastern martial artist in a traditional uniform with flowing fabric',
        '半指手套': 'A fighter wearing half-finger gloves with reinforced knuckle guards',
        '靈手套': 'A spirit warrior wearing ethereal gauntlets with translucent energy construction',
        '引出刀': 'A master swordsman wielding a perfectly balanced katana with traditional hamon',
        
        # ===== 山海經神話系列 =====
        '崑崙鏡': 'A celestial mage holding the mystical Kunlun Mirror with spacetime energy swirling within',
        '軒轅劍': 'The Yellow Emperor wielding the divine Xuanyuan Sword with golden dragon aura',
        '伏羲琴': 'A cultural sage playing the divine Fuxi Guqin with celestial constellations on the soundboard',
        '女媧石': 'A goddess wielding the legendary Nuwa Stone with five-colored creation energy',
        '神農鼎': 'The Divine Farmer holding the ancient Shennong Cauldron with herbal energy emanating',
        '精衛填海': 'A determined spirit carrying stones with ocean-filling determination',
        '夸父逐日': 'A giant warrior chasing the sun with relentless pursuit energy',
        '后羿射日': 'A legendary archer drawing a bow with sun-piercing arrow',
        '嫦娥奔月': 'A celestial maiden floating toward the moon with ethereal grace',
        '刑天舞干戚': 'A headless warrior wielding shield and axe with indomitable battle spirit',
        '共工怒觸': 'A water god unleashing ocean fury with tidal wave energy',
        '祝融焚天': 'A fire god commanding inferno with blazing divine flames',
        '燭龍睜眼': 'A primordial dragon with eyes that control day and night',
        '白澤圖鑑': 'A sage holding the legendary Baize Bestiary with mythical creature knowledge',
        '麒麟角': 'A divine beast warrior adorned with a golden kirin horn headpiece',
        '鳳凰羽衣': 'A celestial being wearing magnificent phoenix feather robes with nirvana flames',
        '玄武甲': 'A guardian warrior wearing the Black Tortoise armor with water and earth energy',
        '青龍偃月': 'A divine general wielding the Green Dragon Crescent Blade with storm energy',
        '朱雀翎': 'A fire mage adorned with a Vermilion Bird feather with blazing aura',
        '饕餮之壺': 'A dark wielder holding the Taotie vessel with devouring energy',
        '窮奇之翼': 'A malevolent warrior with Qiongqi wing fragments and dark energy',
        '獬豸之角': 'A justice warrior wearing the Xiezhi horn with righteous blue light',
        '畢方之羽': 'A fire omen bearer with Bifang feather and flame energy',
        '應龍之鱗': 'A winged dragon warrior adorned with Yinglong scales and rain energy',
        '九尾狐尾': 'An enchanting spirit with nine-tailed fox tail and illusion magic',
        '盤古斧': 'The primordial creator wielding Pangu axe with cosmic creation energy',
    }
    
    return char_map.get(title, f'A warrior wielding {title}')

def get_action_description(skill_name, skill_type, attack_type):
    """Get action description based on skill name and type"""
    # Specific skill actions
    action_map = {
        '死神索命斬': 'executing a deadly sweeping slash with the scythe, body leaning forward into the strike',
        '三日月斬': 'carving a perfect crescent arc through the air with the dark blade',
        '超究武神霸斬': 'delivering an overwhelming greatsword strike with devastating force',
        '豪火球術': 'forming hand seals and exhaling a massive fireball toward the target',
        '水龍彈術': 'weaving hand signs and launching a powerful water dragon projectile',
        '地裂斬': 'slamming fists into the ground causing earth to split and crack',
        '波動擊': 'channeling energy into fists and releasing a shockwave projectile',
        '連續拳': 'unleashing a rapid barrage of punches with incredible speed',
        '秘孔拳': 'striking pressure points with precise finger techniques',
        '炎魔天爆地熱': 'channeling fire energy into explosive fist strikes',
        '九宮連環手': 'executing a nine-palm combo with fluid circular movements',
        '闇擊掌': 'delivering a dark energy palm strike with shadow tendrils',
        '推山掌': 'pushing forward with mountain-moving palm force',
        '霸王電影彈': 'firing rapid energy bullets from fingertips with blinding speed',
        '靈丸': 'concentrating spirit energy into the index finger and firing a spirit blast',
        '靈光彈': 'releasing a concentrated spirit energy projectile from the palm',
        '靈光鏡反衝': 'reflecting incoming attack with spirit energy mirror technique',
        '閃光手指': 'pointing finger forward releasing blinding flash of fire energy',
        '火球術': 'conjuring and launching a blazing fireball from the staff orb',
        '雷電術': 'channeling lightning through the staff and striking the target',
        '颶風術': 'summoning a powerful wind tornado from the staff tip',
        '地震術': 'slamming staff into ground causing devastating earthquake',
        '猛毒術': 'releasing a cloud of toxic energy from the staff',
        '聖光束': 'firing a beam of holy light from the staff crystal',
        '冰凍術': 'freezing the target with an ice blast from the staff',
        '吸血術': 'draining life force from the target with dark energy tendrils',
        '烈炎術': 'unleashing a pillar of flames from the staff crystal',
        '激流術': 'summoning a powerful water torrent from the staff',
        '護盾術': 'creating a protective magical barrier around the caster',
        '治療術': 'channeling healing energy into the target to restore vitality',
        '重力棍擊': 'bringing the staff down with crushing gravitational force',
        '猛力揮擊': 'swinging the double-headed staff with overwhelming power',
        '雙頭連擊': 'executing rapid consecutive strikes with both staff ends',
        '爆裂棍擊': 'delivering an explosive staff strike that detonates on impact',
        '震地擊': 'slamming the staff into the ground creating a shockwave',
        '飛射': 'throwing the shuttle dagger with deadly accuracy',
        '暗算': 'striking from shadows with a concealed weapon',
        '投擲': 'hurling the weapon toward the target with precision',
        '吹箭': 'blowing a poisoned dart through a tube at the target',
        '射擊': 'drawing the bowstring and releasing an arrow with perfect form',
        '强力射擊': 'drawing the bow with full strength and firing a powerful arrow',
        '附魔射擊': 'enchanting the arrow with elemental energy before release',
        '强力附魔射擊': 'channeling maximum elemental power into an enhanced arrow shot',
        '風投擲': 'throwing the shuriken with wind energy enhancement',
        '火投擲': 'throwing the shuriken wreathed in flames',
        '毒投擲': 'throwing the shuriken coated with deadly poison',
        '水投擲': 'throwing the shuriken surrounded by water energy',
        '刺劍': 'thrusting the sword forward with pinpoint accuracy',
        '刺擊': 'delivering a precise stabbing attack with the dagger',
        '貫通刺': 'thrusting the spear with enough force to pierce through armor',
        '精準刺': 'executing a perfectly aimed spear thrust toward a vital point',
        '龍炎沖': 'charging forward with spear wreathed in dragon flames',
        '龍眼雷電': 'striking with spear tip crackling with dragon lightning',
        '破碎沖': 'thrusting spear with wind energy that shatters defenses',
        '墜星沖': 'leaping downward with spear strike like a falling star',
        '貫穿尖': 'firing a piercing energy projectile from the spear tip',
        '劈砍': 'swinging the iron blade in a powerful downward chop',
        '强力劈砍': 'delivering an enhanced chopping strike with increased force',
        '重斬刀法': 'executing a heavy cleaver technique with devastating power',
        '符刀': 'channeling talisman energy through the demonic blade',
        '魔障刀法': 'unleashing a demonic barrier slash with dark energy',
        '鬼八式幡龍刀': 'executing an eight-form dragon blade technique with demonic power',
        '摩軻伽羅刀': 'delivering a fierce dragon god blade strike',
        '龍牙四斬': 'executing a four-strike dragon fang combo',
        '阮師刀法': 'performing a master swordsman blade technique',
        '寒刀七絕': 'unleashing seven freezing blade strikes in rapid succession',
        '戰嵐刀勢': 'executing a battle storm blade technique with wind energy',
        '掌破刀勢': 'combining palm strike with blade technique for enhanced power',
        '虎伏絕刀勢': 'delivering a tiger crouching blade strike with overwhelming force',
        '跺擊刀勢': 'stomping forward while executing a devastating blade slash',
        '疾空刀勢': 'executing a lightning-fast aerial blade technique',
        '背刺': 'striking from behind with a stealthy blade thrust',
        '偷襲': 'ambushing the target with a surprise blade attack',
        '鬼魅術': 'moving like a ghost and repositioning the weapon to another attack route',
        '二刀流': 'wielding two blades simultaneously with perfect coordination',
        '看穿': 'analyzing opponent movements with enhanced perception',
        '水上移動': 'gliding across water surface with incredible speed',
        '鬼斬': 'delivering a demonic slash with dark energy',
        '靈魂鬼斬': 'executing a soul-rending demonic slash with maximum power',
        '擋劈': 'blocking and countering with a powerful blade strike',
        '三日月斬': 'carving a crescent moon arc through the air with the blade',
        '血之宿命': 'activating a blood destiny technique that converts damage to healing',
        '闇擊氣場': 'creating a dark energy aura that enhances damage',
        '衝刺覇體': 'charging forward with invincible body technique',
        '紅蓮腕': 'delivering a crimson lotus strike that burns the target',
        '火產靈神': 'unleashing a fire spirit technique with blazing energy',
        '炎靈': 'activating a flame spirit aura that burns on contact',
        '重劍氣': 'firing a heavy sword energy projectile',
        '劍氣': 'releasing a concentrated sword energy blast',
        '勾鎌劍法': 'executing a hook scythe sword technique',
        '兩段刺': 'delivering a two-stage thrust attack',
        '前刺': 'thrusting forward with the sword in a direct attack',
        '鬼婆婆劍': 'executing an eerie old woman sword technique with unpredictable movements',
        '亂情瘴': 'creating a chaotic emotion mist that weakens enemy techniques',
        '踏火熄雷': 'stepping forward to extinguish fire and lightning with the blade',
        '氣定神閑': 'maintaining calm focus while executing a precise sword thrust',
        '聖十字斬': 'delivering a holy cross-shaped slash with sacred energy',
        '保護': 'activating a protective barrier that reduces damage',
        '武器破壞': 'striking to shatter the opponent weapon',
        '盾破壞': 'delivering a shield-shattering strike',
        '魔法破壞': 'casting a spell that disrupts enemy magic',
        '速度破壞': 'striking to slow down the opponent movements',
        '力量破壞': 'delivering a blow that weakens the opponent strength',
        '頭盔破壞': 'targeting and destroying the opponent helmet',
        '鎧甲破壞': 'striking to shatter the opponent armor',
        '飾品破壞': 'targeting and destroying the opponent accessories',
        '心智破壞': 'delivering a strike that disrupts the opponent mind',
        '裝備武器格擋': 'using equipped weapons to block incoming damage',
        '武器格擋': 'raising weapon to block the incoming attack',
        '巨劍格擋': 'blocking with the massive greatsword to absorb damage',
        '巨劍防禦': 'using the greatsword as a defensive barrier',
        '技巧格擋': 'executing a skillful parry with precise timing',
        '雙手格擋': 'blocking with both weapons for maximum defense',
        '武器活用': 'skillfully manipulating the weapon for enhanced mobility',
        '技巧防守': 'using defensive techniques to nullify incoming attacks',
        '雙手用力猛揮': 'swinging both weapons with overwhelming force',
        '技巧攻擊': 'executing a skillful attack with precise technique',
        '用力猛揮': 'delivering a powerful swing with maximum strength',
        '內功猛擊': 'channeling internal energy into a devastating strike',
        '雙手內攻猛擊': 'channeling internal energy through both weapons for enhanced attack',
        '技巧內攻攻擊': 'using skillful internal energy manipulation for attack',
        '外氣猛擊': 'projecting external energy in a powerful blast',
        '雙手外氣猛擊': 'projecting external energy through both weapons',
        '技巧外氣攻擊': 'using skillful external energy projection for attack',
        '開膛槍': 'executing a gut-piercing spear technique',
        '龍劍': 'activating a dragon sword technique that enhances damage',
        '蒼天龍血': 'channeling celestial dragon blood energy for enhanced strikes',
        '戰鬥連禱': 'activating a battle prayer that enhances technique accuracy',
        '龍牙龍爪': 'executing a dragon fang and claw combo technique',
        '名士振舞': 'performing an elegant noble warrior technique',
        '踏火止水': 'stepping forward to control fire and water elements',
        '霜葬': 'delivering a freezing burial strike with ice energy',
        '注能之鋒': 'channeling energy into the blade edge for enhanced strikes',
        '岩藏之胤': 'activating a hidden rock technique for energy storage',
        '雙手持': 'gripping the weapon with both hands for enhanced power',
        '阿修羅': 'unleashing an asura technique with demonic fury',
        '虎鐵': 'delivering a tiger iron strike with fierce power',
        '備前長船': 'executing a masterwork blade technique',
        '村雨': 'striking with a blade that brings cold rain',
        '天之叢雲': 'unleashing a heavenly cloud technique with water energy',
        '清盛': 'activating a powerful defensive stance',
        '村正': 'delivering a cursed blade strike with dark energy',
        '菊一文字': 'executing a chrysanthemum blade technique with precision',
        '正宗': 'activating a masterwork blade technique with enhanced power',
        '塵地螺細飾劍': 'delivering an ornate blade strike with intricate technique',
        '肉斬骨斷': 'executing a flesh-cutting bone-breaking technique',
        '空手入白刃': 'catching the opponent blade with bare hands',
        '刀裝備可能': 'quickly equipping the blade for immediate combat',
        '劍裝備可能': 'swiftly drawing the sword for instant action',
        '收割': 'delivering a reaping strike that drains life force',
        '操流-柳': 'executing a flowing willow defensive technique',
        '操流-流刃': 'performing a flowing blade technique with fluid movements',
        '操流-轉地': 'executing a earth-turning technique with enhanced accuracy',
        '操流-絡返': 'performing a binding counter that disarms the opponent',
        '操流火天-不知火': 'unleashing a mysterious fire technique with flowing energy',
        '火天-火走': 'channeling fire energy to manipulate action flow',
        '火天-烈火': 'activating a fierce fire technique for enhanced mobility',
        '火天-幽步': 'executing a ghostly step technique that prevents enemy attacks',
        '蓄力滑行': 'charging energy and sliding forward with enhanced mobility',
        '天地大衝撞': 'executing a heaven and earth collision technique',
        '踏步大地擊': 'stomping forward and delivering a devastating earth strike',
        '大地擊': 'slamming the hammer into the ground with crushing force',
        '回轉攻擊': 'spinning the hammer in a devastating circular attack',
        '二起腳': 'executing a double jumping kick technique',
        '斧刃腳': 'delivering an axe-blade kick with cutting force',
        '箭疾步': 'moving with arrow-like speed in combat',
        '虎撲摔': 'executing a tiger pounce throw technique',
        '後掃腿': 'sweeping the leg backward to trip the opponent',
        '前掃腿': 'sweeping the leg forward to knock down the opponent',
        '單手過肩摔': 'executing a one-handed shoulder throw',
        '連華': 'performing a continuous lotus combo throw',
        '龍卷過肩摔': 'executing a tornado shoulder throw with spinning force',
        '炸彈摔': 'delivering a devastating bomb slam throw',
        '空氣摔': 'executing an air throw that sends the opponent flying',
        '無拍子': 'performing an unbeatble rhythm technique with perfect timing',
        '快速切入': 'executing a rapid entry technique to close distance',
        '單撐掌': 'delivering a single support palm strike',
        '閃避': 'dodging the incoming attack with swift movement',
        '三才步': 'executing a three-realm footwork technique to evade attacks',
        '步法': 'activating enhanced footwork for improved mobility',
        '彈腿縮地': 'executing a spring leg technique that compresses distance',
        '聚力衝刺': 'charging forward with concentrated power',
        '優化身法': 'activating enhanced movement technique for improved agility',
        '徐如風': 'moving slowly like wind to recover energy',
        '周天運轉': 'circulating energy through the body to remove negative effects',
        '俠客行': 'activating a knight-errant technique for combined attack',
        '迅如雷': 'moving swift as lightning to reduce evasion cost',
        '清净歸一': 'achieving pure unity to reduce all damage taken',
        '不動如山': 'standing immovable like a mountain to absorb massive damage',
        '侵略如火': 'attacking aggressively like fire to reduce technique cost',
        '調息': 'regulating breathing to recover energy',
        '還神': 'restoring spirit energy at the start of the turn',
        '蓄氣': 'gathering energy until maximum capacity is reached',
        '運氣': 'circulating energy to recover maximum qi',
        '蓄力': 'charging power to enhance weapon strength',
        '急救': 'performing emergency first aid to remove status effects',
        '取得氣力UP': 'activating energy boost for enhanced recovery',
        '衝擊': 'delivering a powerful impact strike',
        '衝擊反擊': 'countering with a devastating impact strike',
        '提膝防禦': 'raising knee to block incoming damage',
        '膝破壞': 'targeting the opponent knee with a destructive strike',
        '戰士架勢': 'activating a warrior stance for weapon reset',
        '受身': 'performing a breakfall to reduce damage and recover',
        '護腿': 'protecting the legs to reduce damage and remove negative effects',
        '側步': 'stepping sideways to reduce damage and recover',
        '側閃進步': 'sidestepping and advancing to enhance next strike',
        '腿板甲': 'activating leg armor to reduce damage and recover action',
        '保護頭部': 'protecting the head to remove status effects',
        '強防禦': 'activating strong defense to enhance weapon power',
        '技巧防守': 'using skillful defense to nullify weak attacks',
        '危機反應': 'activating crisis reaction to survive massive damage',
        '謹慎動作': 'executing cautious movement to negate damage',
        '反彈盾': 'using the shield to reflect damage back',
        '盾牌衝撞': 'charging forward with shield bash',
        '快速揮擊': 'executing a rapid shield strike',
        '盾牌連擊': 'delivering consecutive shield strikes',
        '隱盾術': 'using hidden shield technique for enhanced defense',
        '盾格擋': 'blocking with the shield for maximum protection',
        '盾牌訓練': 'training with shield to reset weapons',
        '無形的信任': 'activating invisible trust to recover health',
        '基本戰法': 'employing basic tactics to enhance weapon power',
        '祝福護甲': 'activating blessed armor to block next attack',
        '矢回避': 'dodging incoming projectiles with perfect evasion',
        '警戒': 'maintaining alert stance to nullify enemy attacks',
        '速度儲蓄': 'gathering speed energy to recover action points',
        '精神統一': 'achieving mental unity to prevent enemy evasion',
        '遲緩': 'activating a slowing field that hinders enemy movement',
        '加速': 'activating enhanced speed for improved mobility',
        '浮游移動': 'levitating to avoid ground-based attacks',
        '停止': 'freezing all enemy weapons and action points',
        '立即行動': 'instantly resetting all weapons and action points',
        '瞬間移動': 'teleporting to draw new cards',
        '不動': 'preventing enemy attacks for the turn',
        '快速發動': 'activating quick deployment for enhanced ranged attacks',
        '自動再生': 'activating automatic regeneration for health recovery',
        '瀕死立即行動': 'activating near-death immediate action to reset everything',
        'MP替換': 'exchanging qi levels with the opponent to equalize both',
        '重力': 'unleashing gravitational force that increases damage based on weight',
        '隕石': 'summoning a meteor strike with fire damage',
        '中毒術': 'casting a poison technique that inflicts toxic damage',
        '迷蟲香': 'releasing confusing insect fragrance that drains enemy qi',
        '蠱降': 'activating a蛊 curse that poisons the target',
        '引毒術': 'drawing poison from the body and transferring to opponent',
        '滅蠱咒': 'casting a蛊 destruction spell with toxic energy',
        '僵尸化': 'activating a zombie curse that reverses enemy healing',
        '毒氣擴散': 'releasing a cloud of poison gas that affects all',
        '毒適應': 'activating poison adaptation to become immune to toxic effects',
        '塗毒': 'applying poison to the weapon for enhanced strikes',
        '破血針': 'firing blood-breaking needles that cause bleeding',
        '木針': 'firing wooden needles with piercing force',
        '飛沙走石': 'hurling sand and stones with earth energy',
        '投石': 'throwing stones with enhanced force',
        '防禦': 'activating a defensive barrier that prevents attacks',
        '移動距離無視地形': 'activating terrain-ignoring movement for enhanced mobility',
        '溶岩上移動': 'activating lava walking for enhanced mobility',
        '攻擊力UP': 'activating attack power enhancement on a weapon',
        '風水返': 'using feng shui reversal to reflect damage and activate headband effects',
        '時空陷阱': 'activating a space-time trap that hinders enemy action',
        '水塊': 'summoning a water block that freezes the target',
        '蔦地獄': 'activating a vine hell that poisons the target',
        '雕塑': 'summoning a stone sculpture that petrifies the target',
        '局部地震': 'causing a localized earthquake that stuns the target',
        '旋風刃': 'unleashing a wind blade that tears the target',
        '鬼火': 'summoning ghost fire that burns the target',
        '無底沼澤': 'creating a bottomless swamp that traps the target',
        '砂風': 'summoning a sand wind that blinds the target',
        '吹雪': 'unleashing a blizzard that seals the target',
        '突風': 'summoning a sudden gust that slows the target',
        '溶岩球': 'firing a lava ball that disrupts enemy energy',
        '醒神': 'activating awakening to recover qi at turn start',
        '聞香': 'inhaling fragrance to recover health',
        '發現道具移動': 'activating item discovery to draw cards',
        '道具維護': 'activating item maintenance to protect equipment',
        '道具投擲': 'throwing a道具 to activate its effects',
        '裝備變更': 'changing equipment configuration for enhanced setup',
        '自動回復藥': 'activating automatic recovery potion to reduce damage',
        '替身術': 'using a substitution technique to evade attacks',
        '投擲大師': 'activating throwing mastery to enhance ranged attacks',
        '纏鬥心法': 'activating grappling mindset to draw cards',
        '消力': 'activating force dissipation to prevent weak attacks',
        '進攻心法': 'activating offensive mindset to search for attack cards',
        '回避心法': 'activating evasion mindset to search for defense cards',
        '火適應': 'activating fire adaptation to enhance fire techniques',
        '沙之替身': 'using sand substitution to cancel damage',
        '麒麟': 'summoning a lightning kirin that disrupts enemy reactions',
        '自然護盾': 'activating a natural shield that blocks elemental attacks',
        '狀態中和': 'neutralizing status effects by exchanging them',
        '火吸收': 'absorbing fire energy to recover qi and remove burn',
        '水吸收': 'absorbing water energy to recover qi and remove freeze',
        '風吸收': 'absorbing wind energy to recover qi and remove tear',
        '地震': 'causing an earthquake that disables all aura fields',
        '專注訓練': 'activating focused training to reset a weapon',
        '整體力訓練': 'activating overall strength training to reset multiple weapons',
        '搞笑訓練': 'activating comedic training to drain enemy aura energy',
        '工兵訓練': 'activating engineer training to repair weapons',
        '武器强化失敗': 'attempting weapon enhancement that fails and weakens the weapon',
        '武器强化成功': 'successfully enhancing a weapon with increased power',
        '暴力捶打': 'delivering a violent hammer strike that weakens enemy weapon',
        '手牌算術抽牌': 'using arithmetic calculation to draw cards based on hand count',
        '重量算術重置': 'using weight arithmetic to reset weapons of specific weight',
        '重量算術横置': 'using weight arithmetic to disable weapons of specific weight',
        '內功合計算術升級': 'using internal energy arithmetic to enhance a weapon',
        '手牌算術丟牌': 'using arithmetic calculation to force discard based on hand count',
        '外功合計算術升級': 'using external energy arithmetic to enhance a weapon',
        '重量算數不能出擊': 'using weight arithmetic to prevent specific weight attacks',
        '傷害均分': 'activating damage distribution to split damage between both',
        '獲得JP移動': 'activating JP gain movement for enhanced actions',
        '獲得EXP移動': 'activating EXP gain movement for double actions',
        '重量算數出擊': 'using weight arithmetic to force specific weight attacks',
        '煮泉小品': 'brewing spring water to recover health',
        '茶酒論': 'discussing tea and wine to enhance weapon quality',
        '千金異方': 'using a thousand gold prescription to recover health',
        '金櫃要略': 'activating golden cabinet knowledge for health recovery',
        '四民食錄': 'activating four peoples food record for continuous recovery',
        '燒尾食單': 'activating burning tail menu to recover health',
        '心經': 'reciting heart sutra to recover vitality',
        '四十二章經': 'reciting forty-two chapter sutra for health recovery',
        '書斷列傳': 'activating biography technique to convert vitality to qi',
        '九勢': 'activating nine momentum technique to gain qi',
        '胡茄十八拍': 'playing eighteen beats of barbarian flute to boost all qi',
        '廣陵散': 'playing guangling melody to heal all players',
        '爾雅': 'activating elegance knowledge to increase enemy defense cost',
        '鬼谷子': 'activating guiguzi knowledge to enhance combat judgment',
        '元士兵': 'activating divine soldier spirit to gain qi at turn start',
        '架勢': 'activating stance to reset weapons by paying qi',
        '畫龍點睛': 'delivering a finishing strike that destroys enemy equipment',
        '流星雨': 'summoning a meteor rain that cannot be evaded',
        '兇斬': 'delivering a fierce slash with lightning paralysis',
        '狂斬': 'executing a wild slash with bleeding effect',
        '刀斬': 'delivering a blade slash with enhanced damage against unarmored',
        '獅子奮迅': 'activating lion spirit to use qi as action points',
        '鉄鼎金身功': 'activating iron cauldron golden body to protect weapons',
        '鉄橋功': 'activating iron bridge technique to limit maximum damage',
        '紫霞神功': 'activating purple霞 divine skill to enhance judgment',
        '紫霞諸滅': 'activating purple霞 destruction to enhance first judgment',
        '流派東方不敗': 'activating invincible eastern style for free vitality usage',
        '看4張': 'looking at 4 cards to search for specific types',
        '抽3張': 'drawing 3 cards with enhanced technique',
        '回3血': 'recovering 3 health with enhanced technique',
        '回6氣': 'recovering 6 qi with enhanced technique',
        '移除所有狀態': 'removing all status effects with enhanced technique',
        '頻死HP回復': 'activating near-death HP recovery based on qi count',
        '氣孔術': 'activating qi pore technique to remove status and draw cards',
        '氣愈': 'activating qi healing to recover health and qi',
        '蘇生': 'activating resurrection to remove all status effects',
        'HP回復': 'activating HP recovery to restore vitality',
        'HP回復移動': 'activating HP recovery movement to draw and reveal cards for healing',
        
        # ===== 山海經神話技能 =====
        '崑崙幻境': 'activating the Kunlun illusion to manipulate spacetime and draw cards',
        '時空回溯': 'reversing time to reset all weapons and action points on the field',
        '鏡像反射': 'reflecting internal damage back with mirror-like precision',
        '軒轅斬天': 'delivering a heaven-splitting slash with sovereign dragon energy',
        '聖王劍法': 'executing a holy king sword technique with golden imperial aura',
        '人皇之威': 'activating the sovereign majesty that increases all enemy technique costs',
        '九州結界': 'creating a nine-province barrier that reduces all damage taken',
        '伏羲古曲': 'playing an ancient melody that fires soundwave projectiles',
        '天音繚繞': 'activating heavenly music that randomly affects all players with status',
        '補天曲': 'playing the heaven-mending melody to heal and remove all status effects',
        '亂心曲': 'playing a chaotic melody that causes darkness confusion in the target',
        '補天之力': 'activating Nuwa creation power for automatic health recovery',
        '造化重生': 'using creation rebirth to revive from near-death with full health',
        '靈石護體': 'activating spiritual stone protection to reduce both physical and internal damage',
        '百草之靈': 'activating hundred herbs spirit to reduce qi technique costs',
        '萬毒不侵': 'activating invulnerability to all poison and status effects',
        '神農百草': 'delivering a herbal strike that heals based on damage dealt',
        '精衛銜石': 'throwing stones with ocean-filling determination that cannot be evaded',
        '逐日狂奔': 'charging forward like Kuafu chasing the sun with enhanced weapon power',
        '落日弓': 'firing a sun-setting arrow that destroys heavy weapons',
        '月宮仙子': 'summoning moon palace energy to freeze the target and draw cards',
        '刑天戰意': 'unleashing headless warrior battle spirit with enhanced power when unarmored',
        '怒海狂濤': 'unleashing Gonggong ocean fury that strips enemy armor',
        '祝融火神': 'commanding Zhurong fire god flames with enhanced burn probability',
        '晝夜交替': 'activating day-night cycle to choose between physical or internal enhancement',
        '燭龍之息': 'breathing Zhulong primordial energy that randomly afflicts all players',
        '萬獸通識': 'activating mythical beast knowledge to search and enhance weapons',
        '辟邪之術': 'casting evil-dispelling technique to remove enemy aura fields',
        '麒麟祥瑞': 'activating kirin auspicious blessing for health recovery and card draw',
        '瑞獸庇護': 'calling divine beast protection to reduce damage and afflict attacker',
        '涅槃之火': 'activating phoenix nirvana flames to revive from near-death',
        '鳳凰來儀': 'summoning phoenix arrival to draw cards and equip aura fields',
        '玄武結界': 'activating Black Tortoise barrier to reduce all damage taken',
        '玄甲護身': 'using dark armor protection to reduce damage and gain shield status',
        '青龍斬': 'delivering a Green Dragon slash that destroys enemy armor',
        '龍魂覺醒': 'awakening dragon soul to enhance weapon clash power',
        '朱雀焚翼': 'activating Vermilion Bird burning wings to enhance fire techniques',
        '鳳火燎原': 'unleashing phoenix fire that spreads flames to all players',
        '貪食之慾': 'activating Taotie gluttony to force enemy discard and draw cards',
        '吞噬': 'devouring enemy cards from the deck with insatiable hunger',
        '窮奇之惡': 'activating Qiongqi malevolence to deal extra damage on hits',
        '凶獸之怒': 'unleashing fierce beast anger to reduce damage and blind attacker',
        '明鏡高懸': 'activating clear mirror justice to increase enemy qi technique costs',
        '正義裁決': 'delivering righteous judgment that seals targets with more cards',
        '畢方火種': 'activating Bifang fire omen to burn enemies at turn start',
        '畢方火舞': 'performing Bifang fire dance with enhanced burn probability',
        '應龍天水': 'activating Yinglong heavenly water to enhance water techniques',
        '龍行雨施': 'summoning dragon rain that freezes all players',
        '魅惑之術': 'activating enchantment technique to disable enemy weapons',
        '幻狐之術': 'casting illusion fox magic to cause darkness and draw cards',
        '盤古開天': 'delivering a heaven-splitting axe strike that destroys all armor',
        '天地初開': 'activating primordial creation to clear the field and draw cards',
        '混沌一擊': 'unleashing a primordial chaos strike that deals absolute damage',
    }
    
    return action_map.get(skill_name, f'executing the technique "{skill_name}" with dynamic motion')

def get_effect_visualization(skill_name, skill_text, skill_type):
    """Get effect visualization based on skill text"""
    parts = []
    
    # Element effects
    if '火' in skill_text or '燒傷' in skill_text:
        parts.append('flames erupting along the attack path with burning energy')
    if '水' in skill_text or '冰凍' in skill_text:
        parts.append('ice crystals forming in the air with freezing energy')
    if '雷' in skill_text or '麻痺' in skill_text:
        parts.append('lightning crackling around the target with electrical discharge')
    if '風' in skill_text or '撕裂' in skill_text:
        parts.append('wind blades cutting through the air with tearing force')
    if '地' in skill_text or '石化' in skill_text:
        parts.append('earth energy manifesting as stone spreading across the target')
    if '毒' in skill_text or '中毒' in skill_text:
        parts.append('toxic mist surrounding the target with poison seeping in')
    if '光' in skill_text or '封印' in skill_text:
        parts.append('holy light radiating with sealing energy binding the target')
    if '暗' in skill_text or '暗闇' in skill_text:
        parts.append('darkness consuming the target with shadow tendrils')
    if '斬' in skill_text or '出血' in skill_text:
        parts.append('blood spraying from the wound with bleeding effect')
    if '打' in skill_text or '昏眩' in skill_text:
        parts.append('stunning impact with dizzy stars circling the target head')
    if '刺' in skill_text or '點打' in skill_text:
        parts.append('precise piercing strike with concentrated damage point')
    
    # Recovery effects
    if '回復' in skill_text or '回' in skill_text:
        if '血' in skill_text:
            parts.append('warm healing light flowing into wounds causing them to close')
        if '氣' in skill_text:
            parts.append('energy particles flowing into the body restoring qi reserves')
        if '行動力' in skill_text:
            parts.append('action energy surging through the body restoring mobility')
    
    # Enhancement effects
    if '外功+' in skill_text:
        parts.append('external energy boosting the strike with visible power increase')
    if '內功+' in skill_text or '內攻+' in skill_text:
        parts.append('internal energy channeling through the attack with enhanced force')
    if '對抗值+' in skill_text:
        parts.append('competitive energy flaring to enhance clash power')
    
    # Special effects
    if '脫手' in skill_text:
        parts.append('weapon flying from the opponent grip from the force')
    if '破壞' in skill_text:
        parts.append('equipment shattering into pieces from the devastating strike')
    if '抽' in skill_text:
        parts.append('cards being drawn from the deck with magical energy')
    if '丟棄' in skill_text or '丟' in skill_text:
        parts.append('cards being discarded and scattered in the wind')
    if '重置' in skill_text:
        parts.append('weapon resetting to ready position with energy surge')
    if '修理' in skill_text:
        parts.append('weapon repairing itself with restoration energy')
    
    if not parts:
        parts.append('energy effects manifesting according to the technique power')
    
    return ', '.join(parts)

def get_speed_description(skill_name, skill_type):
    """Get speed and motion description"""
    speed_map = {
        '近招': 'motion blur on the weapon trajectory, speed lines emphasizing rapid movement',
        '遠招': 'projectile streaking through air leaving visible energy trail, motion blur',
        '防招': 'rapid parrying motion with afterimage effect, defensive energy flaring instantly',
        '氣場': 'energy waves expanding outward at incredible speed, fabric flowing with power surge',
        '氣功': 'energy flowing rapidly through meridians, visible qi trails moving at high speed',
        '反應': 'afterimage effect showing rapid movement, time-slowing sensation during execution',
    }
    
    return speed_map.get(skill_type, 'dynamic motion blur emphasizing incredible speed')

def get_impact_description(skill_name, skill_text, skill_type):
    """Get impact and result description"""
    if skill_type == '近招':
        return 'opponent recoiling from the devastating blow, debris flying from impact point'
    elif skill_type == '遠招':
        return 'target bracing for impact, shockwave radiating from strike point'
    elif skill_type == '防招':
        return 'sparks flying from weapon clash, attacker thrown off balance by the counter'
    elif skill_type == '氣場':
        return 'ground cracking beneath the warrior, debris lifted by energy pressure'
    elif skill_type == '氣功':
        return 'target affected by the technique, energy transfer visible between combatants'
    elif skill_type == '反應':
        return 'attack missing or being countered, attacker caught off guard by the response'
    else:
        return 'devastating impact with visible force radiating outward'

def get_energy_description(skill_name, skill_text):
    """Get energy and atmosphere description"""
    energy_parts = []
    
    # Weapon energy
    if '劍' in skill_name or '劍' in skill_text:
        energy_parts.append('sword energy crackling around the blade with sharp aura')
    elif '刀' in skill_name or '刀' in skill_text:
        energy_parts.append('blade energy flowing along the edge with cutting aura')
    elif '槍' in skill_name or '槍' in skill_text:
        energy_parts.append('spear energy concentrating at the tip with piercing aura')
    elif '拳' in skill_name or '拳' in skill_text:
        energy_parts.append('fist energy凝聚 around the knuckles with striking aura')
    elif '腿' in skill_name or '腿' in skill_text:
        energy_parts.append('leg energy flowing through the limbs with kicking aura')
    elif '弓' in skill_name or '弓' in skill_text:
        energy_parts.append('bow energy charging along the limbs with shooting aura')
    elif '棍' in skill_name or '棍' in skill_text:
        energy_parts.append('staff energy swirling along the shaft with striking aura')
    elif '鎚' in skill_name or '鎚' in skill_text:
        energy_parts.append('hammer energy building in the head with crushing aura')
    
    # Elemental energy
    if '火' in skill_text:
        energy_parts.append('fire energy blazing with intense heat distortion')
    if '水' in skill_text:
        energy_parts.append('water energy flowing with liquid grace')
    if '雷' in skill_text:
        energy_parts.append('lightning energy crackling with electrical power')
    if '風' in skill_text:
        energy_parts.append('wind energy swirling with invisible currents')
    if '地' in skill_text:
        energy_parts.append('earth energy manifesting with solid force')
    if '毒' in skill_text:
        energy_parts.append('poison energy seeping with toxic corruption')
    if '光' in skill_text:
        energy_parts.append('holy energy radiating with purifying light')
    if '暗' in skill_text:
        energy_parts.append('dark energy consuming with shadowy tendrils')
    
    if not energy_parts:
        energy_parts.append('combat energy crackling around the warrior with battle aura')
    
    return ', '.join(energy_parts)

def get_camera_description(skill_name, skill_type):
    """Get camera angle and composition description"""
    camera_map = {
        '近招': 'dramatic low angle perspective capturing the moment of impact',
        '遠招': 'dynamic side angle showing the full trajectory of the attack',
        '防招': 'close-up perspective capturing the moment of weapon contact',
        '氣場': 'wide angle perspective showing the full extent of the aura field',
        '氣功': 'medium shot capturing the energy manipulation process',
        '反應': 'dynamic angle capturing the split-second reaction moment',
    }
    
    return camera_map.get(skill_type, 'dynamic camera angle emphasizing the action moment')

def main():
    skills = read_skills('fighter.tsv')
    
    print(f'Found {len(skills)} unique skills')
    
    # Create action_prompts directory
    prompts_dir = 'action_prompts'
    os.makedirs(prompts_dir, exist_ok=True)
    
    # Generate prompts for each skill
    for skill_name, skill_info in sorted(skills.items()):
        prompt = generate_detailed_prompt(skill_name, skill_info)
        
        # Save to file
        filepath = os.path.join(prompts_dir, f'{skill_name}.txt')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(prompt)
        
        print(f'Generated: {filepath} ({skill_info["skill_type"]})')
    
    print(f'\nTotal action prompts generated: {len(skills)}')

if __name__ == '__main__':
    main()
