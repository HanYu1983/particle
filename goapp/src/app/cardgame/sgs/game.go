package sgs

import (
	"appengine"
	"app/cardgame/core"
	"errors"
	"strconv"
	"strings"
	"fmt"
)

const (
	UserA   = "UserA"
	UserB   = "UserB"
	UserSys = "UserSys"
)

func Opponent(user string) string {
	switch user {
	case UserA:
		return UserB
	case UserB:
		return UserA
	default:
		return user
	}
}

const (
	// 牌庫
	Library = "Library"
	// 手牌
	Hand = "Hand"
	// 領土
	TerritoryZone = "TerritoryZone"
	// 墓地
	Graveyard = "Graveyard"
	// 陣地
	Position  = "Position"
	Position1 = "Position1"
	Position2 = "Position2"
	Position3 = "Position3"
	Position4 = "Position4"
	Position5 = "Position5"
	//
	Free = "Free"
	// 放逐區
	ExileZone = "ExileZone"
)

// 取得Position卡堆的ID
func PositionID(user string, slotId int) string {
	return user + Position + strconv.Itoa(slotId)
}

// 分析PositionID
// 看Position屬於哪個玩家、第幾個Position
func ParsePositionID(cardStackSlotId string) (string, int) {
	var num int
	if strings.Contains(cardStackSlotId, Position1) {
		num = 1
	}
	if strings.Contains(cardStackSlotId, Position2) {
		num = 2
	}
	if strings.Contains(cardStackSlotId, Position3) {
		num = 3
	}
	if strings.Contains(cardStackSlotId, Position4) {
		num = 4
	}
	if strings.Contains(cardStackSlotId, Position5) {
		num = 5
	}
	var user string
	if strings.Contains(cardStackSlotId, UserA) {
		user = UserA
	}
	if strings.Contains(cardStackSlotId, UserB) {
		user = UserB
	}
	return user, num
}

const (
	ColorBlue  = "魏"
	ColorRed   = "蜀"
	ColorGreen = "吳"
	ColorGray  = "群"
	ColorWhite = "無"
)

const (
	// 重置步驟
	// 重置步骤是整个回合流程中的第一步
	// 在这个步骤中你需要重置你所有已横置的牌（将它们转正）
	// 这个步骤中进攻玩家没有优先权，所以不能打出任何牌也不能启动任何能力。
	UntapStep = iota
	// 準備步驟
	// 有的卡牌会要求玩家在准备步骤时执行某种动作，如果没有的话，这个步骤通常会直接跳过。
	StandbyStep
	// 抓牌步驟
	// 你从牌库抓一张牌，如果是先手玩家，则跳过第一回合的抓牌步骤
	DrawStep
	// 行動階段
	// == 打出手牌 ==
	// 打出领土牌：每回合至多执行一次，可以打出一个明置领土，或一个暗置领土。
	// 打出非领土牌：没有次数限制，只要你满足势力需求，支付相应的费用就可以打出。
	// == 发起战斗 ==
	// 战斗准备：选择一个单位即将宣告攻击。
	// 宣告攻击：横置并选择一个合法攻击对象。
	// 结算伤害：结算本次战斗造成的伤害。如果是单位间的战斗，双方会同时造成伤害。
	// 战斗结束：有的卡牌会在战斗结束时要求玩家执行某些动作。
	ActionPhase
	// 結束步驟
	// 有的卡牌会在结束步骤时要求玩家执行某些动作。
	EndStep
	// 棄牌步驟
	// 若你的手牌多于七张，则需要把多余的手牌弃掉。
	// 然后，写着“直到回合结束”的效果会在这个步骤被清除。
	DiscardStep
	//
	PhaseCount
)

const (
	致命 = "致命"
	附屬 = "附屬"
	佩帶 = "佩帶"
	伏擊 = "伏擊"
	神速 = "神速"
	洞察 = "洞察"
	破竹 = "破竹"
	射擊 = "射擊"
	抵抗 = "抵抗"
	轉移 = "轉移"
	堅靭 = "堅靭"
	突擊 = "突擊"
	斬獲 = "斬獲"
	迎擊 = "迎擊"
	外交 = "外交"
	逆境 = "逆境"
	動蕩 = "動蕩"
	賦力 = "賦力"
	奇襲 = "奇襲"
	暴亂 = "暴亂"
	猛進 = "猛進"
)

const (
	BattleDamage  = "戰鬥傷害"
	CounterDamage = "迎擊傷害"
	AssaultDamage = "突擊傷害"
)

const (
	DamageToken = "DamageToken"
)

const (
	// 戰器
	ClassWeapon = iota
	// 單位
	ClassUnit
	// 陣略
	ClassStrategy
	// 錦囊
	ClassTactics
	// 領土
	ClassTerritory
)

type CardText struct {
	Name      string
	CardID    string
	Cost      string
	Color     string
	ColorCost string
	Class     string
	Attack    string
	Defence   string
	Text      string
	Package   string
}

type CardState struct {
	RefID         string
	ControlPlayer string
	Owner         string
	Token         []string
	MetaData      map[string]interface{}
}

type Player struct {
	LoseTurn int
	// Hand數量上限
	HandLimit int
	// 這回合第一個攻擊的卡牌ID
	FirstAttackCardID int
	Token             []string
}

type Game struct {
	ID           string
	CardTable    core.CardTable
	Procedure    core.Procedure
	CardState    map[string]CardState
	Turn         int
	Player       map[string]Player
	Winner       string
	CurrentPhase int
	// 進攻玩家
	OffensivePlayer string
	// 權先權玩家
	PriorityPlayer string
	// 權先權玩家的行動次數
	ActionCount map[string]int
}

var (
	ErrPhaseNotExist         = errors.New("phase not exist")
	ErrCardInfoNotExist      = errors.New("card info not exist")
	ErrYouAreNotTheCardOwner = errors.New("you are not the card owner")
	ErrTargetCardIsntMana    = errors.New("target card is not mana")
	ErrTargetManaAlreadyUsed = errors.New("target mana already used")
	ErrManaIsntEnougth       = errors.New("mana is not enought")
	ErrSlotIsntEmpty         = errors.New("slot is not empty")
	ErrUnitIsntAtSlot        = errors.New("unit isnt at alot")
)

func NewGame(ctx appengine.Context, gameId string) (Game, error) {
	var table core.CardTable
	var err error
	// 建立台面
	table = core.NewCardTable(ctx)
	// 建立A玩家牌堆
	table, err = core.AddCardStack(ctx, table, UserA+Library, Library)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserA+Hand, Hand)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserA+TerritoryZone, TerritoryZone)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserA+Graveyard, Graveyard)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserA+Position1, Position)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserA+Position2, Position)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserA+Position3, Position)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserA+Position4, Position)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserA+Position5, Position)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserA+Free, Position)
	if err != nil {
		return Game{}, err
	}
	// 建立B玩家牌堆
	table, err = core.AddCardStack(ctx, table, UserB+Library, Library)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserB+Hand, Hand)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserB+TerritoryZone, TerritoryZone)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserB+Graveyard, Graveyard)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserB+Position1, Position)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserB+Position2, Position)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserB+Position3, Position)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserB+Position4, Position)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserB+Position5, Position)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserB+Free, Position)
	if err != nil {
		return Game{}, err
	}

	playerA := Player{
		HandLimit: 7,
	}
	playerB := Player{
		HandLimit: 7,
	}
	offensivePlayer := UserA

	players := map[string]Player{}
	players[UserA] = playerA
	players[UserB] = playerB

	actionCnt := map[string]int{}
	actionCnt[UserA] = -1
	actionCnt[UserB] = -1
	actionCnt[offensivePlayer] = 0

	return Game{
		ID:              gameId,
		CardTable:       table,
		Procedure:       core.NewProcedure(ctx),
		CardState:       map[string]CardState{},
		Player:          players,
		OffensivePlayer: offensivePlayer,
		PriorityPlayer:  offensivePlayer,
		// 次數一開始是-1，方便演算法計算
		ActionCount: actionCnt,
	}, nil
}

func AddCard(ctx appengine.Context, game Game, stackName string, owner string, ref string) (Game, string, error) {
	var err error
	table, cardId, err := core.AddCard(ctx, game.CardTable, stackName, ref)
	if err != nil {
		return game, "", err
	}
	game.CardTable = table
	game, err = OnCardInit(ctx, game, cardId, ref, owner)
	if err != nil {
		return game, "", err
	}
	return game, cardId, nil
}

func AddCards(ctx appengine.Context, game Game, stackName string, owner string, ref []string) (Game, []string, error) {
	var err error
	table, cardIds, err := core.AddCards(ctx, game.CardTable, stackName, ref)
	if err != nil {
		return game, nil, err
	}
	game.CardTable = table
	for i := range cardIds {
		game, err = OnCardInit(ctx, game, cardIds[i], ref[i], owner)
		if err != nil {
			return game, nil, err
		}
	}
	return game, cardIds, nil
}

// 支付費用
// 由各個卡片實做中來呼叫
// cost的格式是"無無魏"這樣的格式
// cost的支付順序必須和cardIds給定的順序要一致
func ConsumeCost(ctx appengine.Context, game Game, user string, cost string, cardIds []string) (Game, error) {
	// 將X轉為"無"序列
	if cost == "X" {
		panic("不在這裡處理X")
	}
	var err error
	// 建立空的slot
	// 這個slot必須被填滿
	costSlot := make([]bool, len([]rune(cost)))
	for _, cardId := range cardIds {
		ctx.Infof("pay card %v", cardId)
		// 支付消費
		// 填充slot
		game, err = OnCardConsumeCost(ctx, game, user, cost, costSlot, cardId)
		if err != nil {
			return game, err
		}
	}
	// 檢查slot是不是都被填滿了
	for _, slot := range costSlot {
		if slot == false {
			return game, errors.New(fmt.Sprintf("mana is not enougth. you pay:%v", costSlot))
		}
	}
	return game, nil
}

func QueryUnitInOppositePosition(ctx appengine.Context, game Game, stack string) (string, bool, error) {
	if game.CardTable.CardStack[stack].Type != Position {
		return "", false, errors.New("必須是陣地才能查詢對面的資料")
	}
	who, num := ParsePositionID(stack)
	opponent := Opponent(who)
	oppositeStack := PositionID(opponent, num)
	if len(game.CardTable.CardStack[oppositeStack].Card) == 0 {
		return "", false, nil
	}
	return game.CardTable.CardStack[oppositeStack].Card[0], true, nil
}

func OnCardInit(ctx appengine.Context, game Game, cardId string, refId string, owner string) (Game, error) {
	game.CardState[cardId] = CardState{
		RefID:         refId,
		Owner:         owner,
		ControlPlayer: owner,
		MetaData:      map[string]interface{}{},
	}
	return game, nil
}

// 支付消費
// 如何支付全部由卡牌自定
func OnCardConsumeCost(ctx appengine.Context, game Game, user string, cost string, costSlot []bool, cardId string) (Game, error) {
	ref := game.CardTable.Card[cardId].Ref
	switch ref {
	default:
		card := game.CardTable.Card[cardId]
		cardState := game.CardState[cardId]
		// 處理領土區的卡
		if card.CardStack == user+TerritoryZone {
			// 不是自己的卡不能支付
			if cardState.Owner != user {
				return game, nil
			}
			// 已横置的卡不能支付
			if card.Direction == core.DirectionTap {
				return game, nil
			}
			if card.Face == core.FaceOpen {
				// 處理亮領土
				text, err := QueryCardText(ctx, game, cardId)
				if err != nil {
					return game, err
				}
				var payOk bool
				for idx, c := range costSlot {
					if c == false {
						targetColor := []rune(cost)[idx]
						if string(targetColor) == text.Color {
							costSlot[idx] = true
							card.Direction = core.DirectionTap
							game.CardTable.Card[cardId] = card
							payOk = true
						}
					}
				}
				// 沒有指定色需要支付, 支付任一個無
				if payOk == false {
					for idx, c := range costSlot {
						if c == false {
							targetColor := []rune(cost)[idx]
							if string(targetColor) == "無" {
								costSlot[idx] = true
								card.Direction = core.DirectionTap
								game.CardTable.Card[cardId] = card
							}
						}
					}
				}
			} else {
				// 處理暗領土
				for idx, c := range costSlot {
					if c == false {
						targetColor := []rune(cost)[idx]
						if string(targetColor) == "無" {
							costSlot[idx] = true
							card.Direction = core.DirectionTap
							game.CardTable.Card[cardId] = card
						}
					}
				}
			}
		}
	}
	return game, nil
}
