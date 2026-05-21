import csv
import json

csvstr = '''
黑風拳套	1	格鬥	2	2	近招	格	闇擊掌	外功.
黑風拳套	1	格鬥	2	2	遠招	格格氣氣氣	炎魔天爆地熱	外功+6.
黑風拳套	1	格鬥	2	2	近招	格氣	九宮連環手	內功+2.
黑風拳套	1	格鬥	2	2	氣場	氣氣	紫霞諸滅	自己回合的第一擊外功+2.
黑風拳套	1	格鬥	2	2	防招	格格氣	防禦氣功	對抗值+9.
'''

#csv_file = csv.reader(csvstr, delimiter="\t", quotechar='"')
# for row in csv_file:
#    print(row)

#data = pandas.read_csv(csvstr, sep='\t')

print(csvstr.split('\t'))
datas = csvstr.split('\t')
for i in datas[::6]:
    print(i)
