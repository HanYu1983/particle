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
	var _= ctx

	var game Game
	var table core.CardTable
	var _ = table

	t.Log("建立遊戲")
	game, err = NewGame(ctx, "temp")
	if err != nil {
		t.Fatal(err)
	}

	t.Log("初始配置")
	game, unitRef179, err := AddCard(ctx, game, UserA+Hand, UserA, "179")
	if err != nil {
		t.Fatal(err)
	}
	var _ = unitRef179

	var HandleCommand CommandHandler
	HandleCommand = ReduceCommandHandler([]CommandHandler{BasicCommandHandler})

	handleLoop := func(ctx appengine.Context, game Game) (Game, error) {
		game, err = PerformCommandHandler(HandleCommand, ctx, game)
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

	if len(cmds) != 2 {
		t.Fatal("必須有2個行動")
	}

	var playTerCmd core.Command
	var passCmd core.Command
	for _, cmd := range cmds {
		switch  {
		case cmd.Description == "{user}讓過":
			passCmd = cmd
		case cmd.Parameters.Get("action") == "打出領土{cardId}，面向為{face}":
			playTerCmd = cmd
		}
	}
	if passCmd.Description == "" {
		t.Fatal("必須有讓過")
	}
	if playTerCmd.Description == "" {
		t.Fatal("必須有下領土")
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

	// 處理下地
	game, err = handleLoop(ctx, game)
	if err != nil {
		t.Fatal(err)
	}
	if len(game.CardTable.CardStack[UserA+TerritoryZone].Card) != 1 {
		t.Fatal("領土區中必須有一張卡")
	}

	cmds = []core.Command{}
	cmds, err = CollectCommand(ctx, game, UserB, cmds)
	t.Log(cmds)
}
