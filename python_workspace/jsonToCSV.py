import csv
import json

import re

regex = r"<div style='font-size:4px; background-color:red; width:100%; height:100%; left:0; top:0; text-align:right; overflow:hidden'>(.+?)<br>(.+?)<br>(.+?)<br>(.+?)<br>(.+?)<\/div>"

#test_str = "[\"<div style='font-size:4px; background-color:red; width:100%; height:100%; left:0; top:0; text-align:right; overflow:hidden'>粗布麻褲<br>重1<br>褲 2 2<br>還神<br>氣場 氣</div>\", '這張卡廢棄時，回復2。']"


def regex_context(str):
    ret_info = []
    matches = re.finditer(regex, str, re.MULTILINE)

    for matchNum, match in enumerate(matches, start=1):

        print("Match {matchNum} was found at {start}-{end}: {match}".format(
            matchNum=matchNum, start=match.start(), end=match.end(), match=match.group()))

        for groupNum in range(0, len(match.groups())):
            groupNum = groupNum + 1

            ret_info.append(match.group(groupNum))
            print("Group {groupNum} found at {start}-{end}: {group}".format(groupNum=groupNum,
                  start=match.start(groupNum), end=match.end(groupNum), group=match.group(groupNum)))

    return ret_info


f = open('D:\\dev\\particle\\goapp\\src\\www\\card_new\\fighter\\baji_test.json',
         'r', encoding='utf8')

paste_string = ''
datas = json.load(f)
for data in datas:
    # print(data)
    [name, weight, power, skill, type] = regex_context(data['extra'][0])
    print(name)

    paste_string += '%s\t%s\t%s\t%s\t%s\n' % (
        name, weight[1], power[0], power[2], power[4])
# 黑風拳套	1	格鬥	2	2	近招	格	闇擊掌	外功.

print(paste_string)


