package collectmmo

import (
	"appengine/aetest"
	"testing"
)

func TestBasic(t *testing.T) {
	ctx, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer ctx.Close()

	ctx.Infof("建立名稱為超強的角色")
	_, err = ExecuteCommand(ctx, "建立名稱為超強的角色")
	if err != nil {
		t.Fatal(err)
	}

	ctx.Infof("執行沒有配對的指令")
	_, err = ExecuteCommand(ctx, "xxx")
	if err == nil {
		t.Fatal("沒有配對到指令的場合必須有錯誤")
	}

	ctx.Infof("取得名稱為超強的角色")
	users, err := ExecuteCommand(ctx, "取得名稱為超強的角色")
	if err != nil {
		t.Fatal(err)
	}
	userList := users.([]User)
	if len(userList) == 0 {
		t.Fatal("必須有名稱為超強的角色")
	}

	ctx.Infof("建立名稱為gan的角色")
	_, err = ExecuteCommand(ctx, "建立名稱為gan的角色")
	if err != nil {
		t.Fatal(err)
	}

	ctx.Infof("取得所有角色")
	users, err = ExecuteCommand(ctx, "取得所有角色")
	if err != nil {
		t.Fatal(err)
	}
	userList = users.([]User)
	if len(userList) != 2 {
		t.Fatal("必須有2個角色")
	}
}
