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
	if nextnode == nil {
		t.Fatal("0號必須有下一個節點")
	}
	if *nextnode != 5 {
		t.Fatal("0號的下一個節點必須是5")
	}

	nextnode = ForwardNode(dueltree, 2)
	if nextnode == nil {
		t.Fatal("2號必須有下一個節點")
	}
	if *nextnode != 6 {
		t.Fatal("2號的下一個節點必須是6")
	}

	nextnode = ForwardNode(dueltree, 4)
	if nextnode == nil {
		t.Fatal("4號必須有下一個節點")
	}
	if *nextnode != 6 {
		t.Fatal("4號的下一個節點必須是6")
	}

	nextnode = ForwardNode(dueltree, 5)
	if nextnode == nil {
		t.Fatal("5號必須有下一個節點")
	}
	if *nextnode != 7 {
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

	ctx.Infof("%#v", dc)
}
