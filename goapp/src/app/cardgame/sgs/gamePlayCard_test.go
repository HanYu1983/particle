package sgs

import (
	"testing"
	"appengine"
	"appengine/aetest"
	"app/cardgame/core"
)

func TestPlayCard(t *testing.T) {
	ctx, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer ctx.Close()
	var _ = ctx

	var game Game
	var table core.CardTable
	var _ = table

	t.Log("建立遊戲")
	game, err = NewGame(ctx, "temp")
	if err != nil {
		t.Fatal(err)
	}

	t.Log("初始配置")
	game, cardRef179, err := AddCard(ctx, game, UserA+Hand, UserA, "179")
	if err != nil {
		t.Fatal(err)
	}
	game, cardRef22, err := AddCard(ctx, game, UserA+Hand, UserA, "22")
	if err != nil {
		t.Fatal(err)
	}

	var HandleCommand CommandHandler
	HandleCommand = ReduceCommandHandler([]CommandHandler{BasicCommandHandler})

	handleLoop := func(ctx appengine.Context, game Game) (Game, error) {
		game, _, err = PerformCommandHandler(HandleCommand, ctx, game, nil)
		if err != nil {
			switch err.(type) {
			case TargetMissingError:
				t.Log(err.Error())
			default:
				return game, err
			}
			return game, nil
		}
		return game, nil
	}

	t.Log("直接到行為階段")
	game.CurrentPhase = ActionPhase

	t.Log("收集指令")
	var cmds []core.Command
	cmds, err = CollectCommand(ctx, game, UserA, cmds)
	t.Log(cmds)
	var playTerCmd, passCmd, playRef22Cmd core.Command

	for _, cmd := range cmds {
		switch {
		case cmd.Description == "{user}讓過":
			passCmd = cmd
		case cmd.Parameters.Get("action") == "打出領土{cardId}，面向為{face}" && cmd.Parameters.Get("cardId") == cardRef179:
			playTerCmd = cmd
		case cmd.Parameters.Get("action") == "打出單位{cardId}到{slotNum}" && cmd.Parameters.Get("cardId") == cardRef22:
			playRef22Cmd = cmd
		}
	}
	if passCmd.Description == "" {
		t.Fatal("必須有讓過指令")
	}
	if playTerCmd.Description == "" {
		t.Fatal("必須有下領土指令")
	}
	if playRef22Cmd.Description == "" {
		t.Log(cardRef22)
		t.Fatal("必須有下單位指令")
	}

	game, err = handleLoop(ctx, game)
	if err != nil {
		t.Fatal(err)
	}

	// 尋問對方要不要響應
	playTerCmd.User = playTerCmd.Parameters.Get("permitUser")
	t.Log("下領土")
	game.Procedure = core.AddBlock(ctx, game.Procedure, "規則", []core.Command{
		playTerCmd,
	})

	var cmd core.Command
	var hasCommand bool
	t.Log("UserB取得指令")
	cmd, hasCommand = core.GetCommand(ctx, game.Procedure)
	if hasCommand == false {
		t.Fatal("必須有指令")
	}
	if cmd.User != UserB {
		t.Fatal("必須是UserB的指令")
	}
	t.Log(cmd)
	t.Log("UserB不響應")
	cmd.User = UserSys
	game.Procedure.Command[cmd.ID] = cmd

	t.Log("處理下地")
	game, err = handleLoop(ctx, game)
	if err != nil {
		t.Fatal(err)
	}
	if len(game.CardTable.CardStack[UserA+TerritoryZone].Card) != 1 {
		t.Fatal("領土區中必須有1張卡")
	}

	t.Log("指定2張地支付")
	playRef22Cmd.Parameters["costIds"] = []string{cardRef179}
	t.Log("下單位在第1個位置")
	playRef22Cmd.Parameters.Set("slotNum", "1")
	// 尋問對方要不要響應
	playRef22Cmd.User = playTerCmd.Parameters.Get("permitUser")
	t.Log("下單位")
	game.Procedure = core.AddBlock(ctx, game.Procedure, "規則", []core.Command{
		playRef22Cmd,
	})

	t.Log("UserB取得指令")
	cmd, hasCommand = core.GetCommand(ctx, game.Procedure)
	if hasCommand == false {
		t.Fatal("必須有指令")
	}
	if cmd.User != UserB {
		t.Fatal("必須是UserB的指令")
	}
	t.Log("UserB不響應")
	cmd.User = UserSys
	game.Procedure.Command[cmd.ID] = cmd

	t.Log("處理下單位")
	game, err = handleLoop(ctx, game)
	if err != nil {
		t.Fatal(err)
	}
	if len(game.CardTable.CardStack[UserA+Position1].Card) != 1 {
		t.Fatal("第1個陣必須有單位")
	}
	if game.CardTable.Card[cardRef179].Direction != core.DirectionTap {
		t.Fatal("地必須被横置")
	}

	cmds = []core.Command{}
	cmds, err = CollectCommand(ctx, game, UserB, cmds)
	t.Log(cmds)
}
