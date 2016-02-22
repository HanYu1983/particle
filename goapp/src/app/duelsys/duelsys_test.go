package duelsys

import (
	"appengine/aetest"
	_ "net/http"
	_ "net/http/httptest"
	"testing"
	"time"
)

func TestDuelTree(t *testing.T) {
	ctx, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer ctx.Close()

	dueltree := CreateDuelTree(5)

	nextnode := ForwardNode(dueltree, 0)
	if nextnode == NullNode {
		t.Fatal("0號必須有下一個節點")
	}
	if nextnode != 5 {
		t.Fatal("0號的下一個節點必須是5")
	}

	nextnode = ForwardNode(dueltree, 2)
	if nextnode == NullNode {
		t.Fatal("2號必須有下一個節點")
	}
	if nextnode != 6 {
		t.Fatal("2號的下一個節點必須是6")
	}

	nextnode = ForwardNode(dueltree, 4)
	if nextnode == NullNode {
		t.Fatal("4號必須有下一個節點")
	}
	if nextnode != 6 {
		t.Fatal("4號的下一個節點必須是6")
	}

	nextnode = ForwardNode(dueltree, 5)
	if nextnode == NullNode {
		t.Fatal("5號必須有下一個節點")
	}
	if nextnode != 7 {
		t.Fatal("5號的下一個節點必須是7")
	}

	duelnodes := NextNodes(dueltree, 2)
	if duelnodes == nil {
		t.Fatal("2號必須有對手")
	}
	if duelnodes[0] != 3 {
		t.Fatal("2號的對手必須有3")
	}
	if duelnodes[1] != 4 {
		t.Fatal("2號的對手必須有4")
	}

	dueltree = CreateDuelTree(7)

	duelnodes = NextNodes(dueltree, 8)
	if duelnodes == nil {
		t.Fatal("8號必須有對手")
	}
	if duelnodes[0] != 7 {
		t.Fatal("8號的對手必須有7")
	}
	if duelnodes[1] != 9 {
		t.Fatal("8號的對手必須有9")
	}
}

func TestDuel(t *testing.T) {
	ctx, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer ctx.Close()

	var dc DuelContext

	var duelName = "天下一武道會第一屆"
	CreateDuel(&dc, duelName, time.Now(), time.Now())

	if len(dc.Duels) != 1 {
		t.Fatal("必須有一個比賽")
	}

	duel := GetDuel(&dc, &duelName)
	if duel == nil {
		t.Fatal("必須有一個比賽叫%v", duelName)
	}

	han := People{
		Name: "han",
	}

	err = AddPeople(&dc, duelName, han)
	if err != nil {
		t.Fatal(err)
	}

	err = AddPeople(&dc, duelName, han)
	if err != ErrPeopleAlreadyAdd {
		t.Fatal("必須回傳已加入錯誤")
	}

	vic := People{
		Name: "vic",
	}

	err = AddPeople(&dc, duelName, vic)
	if err != nil {
		t.Fatal(err)
	}

	hanInDuel, err := GetPeople(&dc, duelName, "han")
	if err != nil {
		t.Fatal(err)
	}
	if hanInDuel == EmptyPeople {
		t.Fatal("han必須存在於參賽者名單")
	}

	vicInDuel, err := GetPeople(&dc, duelName, "vic")
	if err != nil {
		t.Fatal(err)
	}
	if hanInDuel == EmptyPeople {
		t.Fatal("vic必須存在於參賽者名單")
	}

	hansTarget, err := DuelTargetName(&dc, duelName, hanInDuel.Position)
	if err != nil {
		t.Fatal(err)
	}
	if hansTarget != "vic" {
		t.Fatal("han的對手必須是vic")
	}
	check, _ := CheckWinnerMatch(&dc, duelName, hanInDuel.Position, vicInDuel.Position)
	if check != BothDidntAssign {
		t.Fatal("一開始必須都沒有指定勝者")
	}

	AssignWinner(&dc, duelName, hanInDuel.Position, vicInDuel.Name, true)
	check, _ = CheckWinnerMatch(&dc, duelName, hanInDuel.Position, vicInDuel.Position)
	if check != SomeoneDidntAssign {
		t.Fatal("一方指定勝者後，必須判斷為還有一方未指定")
	}

	AssignWinner(&dc, duelName, vicInDuel.Position, hanInDuel.Name, true)
	check, _ = CheckWinnerMatch(&dc, duelName, hanInDuel.Position, vicInDuel.Position)
	if check != WinnerNotMatch {
		t.Fatal("雙方都指定為勝者時，必須判斷不符合")
	}

	AssignWinner(&dc, duelName, vicInDuel.Position, hanInDuel.Name, false)
	check, _ = CheckWinnerMatch(&dc, duelName, hanInDuel.Position, vicInDuel.Position)
	if check != WinnerIsMatch {
		t.Fatal("一方為勝一方為負。正確")
	}

	_, err = DuelTargetName(&dc, duelName, hanInDuel.Position)
	if err != ErrNoTarget {
		t.Fatal("han勝了，必須沒有對手了")
	}

	err = PeopleForward(&dc, duelName, "han")
	if err != nil {
		t.Fatal(err)
	}

	hanInDuel, _ = GetPeople(&dc, duelName, "han")
	if hanInDuel.Position != Node(2) {
		t.Fatal("han必須在位置2")
	}

	hansPower, _ := Power(&dc, duelName, hanInDuel.Position)
	if hansPower != 1 {
		t.Fatal("han必須是第一名")
	}

	ctx.Infof("%#v", dc)
}
