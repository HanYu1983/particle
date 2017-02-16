package sgs

import (
	"errors"
	"fmt"
	"appengine"
	"strconv"
	"strings"
)

func QueryCardText(ctx appengine.Context, game Game, cardId string) (CardText, error) {
	ref := game.CardTable.Card[cardId].Ref
	switch ref {
	case "22":
		return CardText{
			Name:      "青州探马",
			Class:     "單位~斥候",
			Cost:      "1",
			Color:     ColorBlue,
			ColorCost: ColorBlue,
			Attack:    "1",
			Defence:   "2",
			Text:      "转移（具有转移能力且不处于整备状态的单位可于你回合的{通常}时机向相邻的空阵地进行一次移动）",
		}, nil
	case "28":
		return CardText{
			CardID:    "28",
			Name:      "三江城蛮丁",
			Cost:      "2",
			Color:     ColorRed,
			ColorCost: ColorRed,
			Class:     "单位边境 ~ 南蛮/步兵",
			Package:   "乱华",
			Attack:    "1",
			Defence:   "1",
			Text:      "暴乱1；迎击2",
		}, nil
	case "85":
		return CardText{
			Name:      "飞将的利刃·张辽",
			Class:     "无双单位 ~ 武将",
			Cost:      "5",
			Color:     ColorGray,
			ColorCost: ColorGray + ColorGray,
			Attack:    "5",
			Defence:   "1",
			Text:      "神速；转移；突击1。当张辽对一名对手造成伤害时，该玩家弃一张牌。你可以从手上展示一张无双名称为【吕布】的牌，若如此做，你抓一张牌。",
		}, nil
	case "105":
		return CardText{
			CardID:    "105",
			Name:      "年轻贤君·孙权",
			Cost:      "5",
			Color:     ColorGreen,
			ColorCost: ColorGreen + ColorGreen,
			Class:     "无双单位 ~ 主公",
			Package:   "初阵",
			Attack:    "3",
			Defence:   "5",
			Text:      "由你操控的其他吴势力单位各+1/+1。{通常}{X}，弃X张牌→抓X张牌。此能力每回合只能启动一次。",
		}, nil
	case "179":
		return CardText{
			CardID:    "179",
			Name:      "魏领土",
			Cost:      "0",
			Color:     ColorBlue,
			Class:     "基本领土",
			Package:   "初阵",
			Text:      "{瞬发}{3}，将此领土翻面→抓一张牌。",
		}, nil
	default:
		return CardText{}, errors.New(fmt.Sprintf("這張卡還沒實做:%v", ref))
	}
	return CardText{}, nil
}

func QueryCost(ctx appengine.Context, game Game, cardId string) (string, error) {
	ref := game.CardTable.Card[cardId].Ref
	switch ref {
	default:
		var err error
		text, err := QueryCardText(ctx, game, cardId)
		if err != nil {
			return "", err
		}
		if text.Cost == "X" {
			return "X", nil
		}
		cost, err := strconv.Atoi(text.Cost)
		if err != nil {
			return "", err
		}
		costStr := fmt.Sprintf("%v%v", text.ColorCost, strings.Repeat("無", cost))
		return costStr, nil
	}
}

func QueryAtk(ctx appengine.Context, game Game, cardId string) (int, error) {
	ref := game.CardTable.Card[cardId].Ref
	switch ref {
	default:
		var err error
		text, err := QueryCardText(ctx, game, cardId)
		if err != nil {
			return 0, err
		}
		return strconv.Atoi(text.Attack)
	}
}

func QueryDamageDef(ctx appengine.Context, damageType string, game Game, cardId string) (int, error) {
	ref := game.CardTable.Card[cardId].Ref
	switch ref {
	default:
		var def int
		// 處理堅靭
		powers, _, _, err := QueryKeyword(ctx, 堅靭, game, cardId)
		if err != nil {
			return 0, err
		}
		for _, power := range powers {
			def += power
		}
		return def, nil
	}
}

func QueryDef(ctx appengine.Context, game Game, cardId string) (int, error) {
	ref := game.CardTable.Card[cardId].Ref
	switch ref {
	default:
		var err error
		text, err := QueryCardText(ctx, game, cardId)
		if err != nil {
			return 0, err
		}
		return strconv.Atoi(text.Defence)
	}
}

func QueryCardClass(ctx appengine.Context, game Game, cardId string) (int, error) {
	var err error
	text, err := QueryCardText(ctx, game, cardId)
	if err != nil {
		return 0, err
	}
	if strings.Contains(text.Class, "锦囊") {
		return ClassTactics, nil
	}
	if strings.Contains(text.Class, "领土") {
		return ClassTerritory, nil
	}
	if strings.Contains(text.Class, "單位") {
		return ClassUnit, nil
	}
	return ClassWeapon, nil
}

func QueryKeyword(ctx appengine.Context, keyword string, game Game, cardId string) ([]int, []string, bool, error) {
	card := game.CardTable.Card[cardId]
	switch keyword {
	case 迎擊:
		if card.Ref == "28" {
			return []int{2}, nil, true, nil
		}
	case 突擊:
		if card.Ref == "85" {
			return []int{1}, nil, true, nil
		}
	case 致命:
		return nil, nil, false, nil
	case 堅靭:
		return nil, nil, false, nil
	//return []int{1, 1}, nil, true, nil
	case 抵抗:
		return nil, nil, false, nil
	//return nil, []string{"單位"}, true, nil
	}
	return nil, nil, false, nil
}

func QueryIfMatchResistance(ctx appengine.Context, keyword string, game Game, cardId string) (bool, error) {
	return true, nil
}