# -*- coding: UTF-8 -*-
#coding:utf-8

import os, csv, json, codecs, re

weaponType = [
    '拳',
    '鞋',
    '小刀',
    '刀',
    '劍',
    '短棒',
    '槍',
    '棍',
    '雙手刀',
    '巨劍',
    '斧'
]

armorType = [
    '服',
    '鎧',
    '配件'
]

def writeCards(fileName, info):
    f = open(fileName, 'w')
    f.write(json.dumps(info, ensure_ascii=False, indent=4))
    f.close()

def writeCsv(fileName, infos):
    with open(fileName, 'w') as csvfile:
        writer = csv.writer(csvfile, delimiter=' ')
        # for info in infos:
        #     writeAry = []
        #     writeAry.append(info)
        # writer.writerow(['姓名', '身高', '體重'])
        # writer.writerow(['令狐沖', 175, 60])
        # writer.writerow(['岳靈珊', 165, 57])
    

def isWeapon(wt):
    return wt in weaponType

def isArmor(wt):
    return wt in armorType

def isReact(hand):
    return '反應' in hand
    
def isItem(wt):
    return wt == '道具'

def isBuff(buff):
    return len(buff) > 0

def dealWithCsv(file):
    with open(file) as csvfile:
        rows = csv.reader(csvfile)
        cards = []
        for row in rows:
            #0_id,1_等級,2_兵器,3_重量,4_種類,5_P,6_M,7_氣功,8_能力,9_招式
            id = row[0]
            level = row[1]
            name = row[2]
            weight = row[3]
            weaponType = row[4]
            p = row[5]
            m = row[6]
            try:
                buff = row[7]
            except:
                buff = ''
            try:
                ability = row[8]
            except:
                ability = ''
            try:
                hand = row[9]
            except:
                hand = ''

            color = ''
            content2 = ''

            if isWeapon(weaponType):
                if level == '1':
                    if isReact(hand):
                        color = 'green'
                        content2 = hand
                    elif isBuff(buff):
                        color = 'aqua'
                        content2 = buff
                    else:
                        color = 'red'
                        content2 = hand
                else:
                    content2 = ability
                    color = 'yellow'
            elif isArmor(weaponType):
                content2 = ability
                color = 'yellow'
            elif isItem(weaponType):
                color = 'purple'
                content2 = hand
            else:
                pass

            handContent = hand.split('/')
            handName = handContent[0]

            content1 = "<div style='background-color:"+color+"; width:100%; height:100%; left:0; top:0; text-align:right'>"+ weaponType +"<br>星"+level+"重"+weight+"<br>"+name+"<br>"+p+" "+m+"<br>"+handName+"</div>" 
            content2 += "<br>" + buff

            cardInfo = {
                "type": "data",
                "width": 50,
                "height": 75,
                "pos": [
                    100,
                    100
                ],
                "back": True,
                "lock": False,
                "count": 1,
                "extra": [content1, content2]
            }
            cards.append(cardInfo)
        writeCards(file.replace('.csv', '.json'), cards)

def dealWithJson(file):
    with open(file) as jsonfile:
        #print( jsonfile.read()) 
        cards = json.loads(jsonfile.read())
        #print(card[0])

        regex = r">(.*?)<br>(.*?)<br>(.*?)<br>(.*?)<br>(.*?)<\/div>"
 
        dataAry = []
        for card in cards:
            matches = re.finditer(regex, card['extra'][0], re.MULTILINE)
            for matchNum, match in enumerate(matches, start=1):
                for groupNum in range(0, len(match.groups())):
                    groupNum = groupNum + 1
                    dataAry.append(match.group(groupNum))

currentPath = os.path.dirname(os.path.abspath(__file__))
for subdir, dirs, files in os.walk(currentPath):
    for file in files:
        if '.csv' in file:
            dealWithCsv(currentPath + '\\' + file)
        elif '.json' in file:
            pass
            #dealWithJson(file)
            

                    


                    
