package db2

import (
	"testing"

	"google.golang.org/appengine/aetest"
)

func TestBasic(t *testing.T) {
	ctx, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer ctx.Close()

	t.Log("查詢")
	list, err := GetFileList(ctx, "", false)
	if err != nil {
		t.Fatal(err)
	}
	if len(list) > 0 {
		t.Error("列表在一開始長度必須為0")
	}

	t.Log("建檔root/test.json")
	err = WriteFile(ctx, "root/test.json", []byte("{}"), "han", false)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("查詢root/test.json")
	file, err := GetFile(ctx, "root/test.json")
	if err != nil {
		t.Fatal(err)
	}
	if file == nil {
		t.Error("必須有root/test.json檔案存在")
	}

	t.Log("再建一次root/test.json，沒有使用override，必須沒有錯誤")
	err = WriteFile(ctx, "root/test.json", []byte("{}"), "han", false)
	if err != ErrFileExist {
		t.Error("沒有override，必須無法寫入檔案")
	}

	t.Log("新建root/test2.json")
	err = WriteFile(ctx, "root/test2.json", []byte("{}"), "han", false)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("查詢檔案長度必須為2")
	list, err = GetFileList(ctx, "", false)
	if err != nil {
		t.Fatal(err)
	}
	if len(list) != 2 {
		t.Error("列表長度必須為2")
	}

	t.Log("刪除root/test.json")
	err = Delete(ctx, "root/test.json")
	if err != nil {
		t.Fatal(err)
	}

	t.Log("查詢檔案長度必須為1")
	list, err = GetFileList(ctx, "", false)
	if err != nil {
		t.Fatal(err)
	}
	if len(list) != 1 {
		t.Error("列表長度必須為2")
	}

	t.Log("剩下的檔必須是root/test2.json")
	if list[0].Name != "root/test2.json" {
		t.Errorf("剩下的檔案是%v", list[0].Name)
	}

	t.Log("刪除root/test2.json")
	err = Delete(ctx, "root/test2.json")
	if err != nil {
		t.Fatal(err)
	}

	t.Log("查詢檔案長度必須為0")
	list, err = GetFileList(ctx, "", false)
	if err != nil {
		t.Fatal(err)
	}
	if len(list) != 0 {
		t.Error("列表長度必須為0")
	}

	t.Log("新建3個檔後備份")
	err = WriteFile(ctx, "test.json", []byte("{}"), "han", false)
	if err != nil {
		t.Fatal(err)
	}
	err = WriteFile(ctx, "a/test.json", []byte("{}"), "han", false)
	if err != nil {
		t.Fatal(err)
	}
	err = WriteFile(ctx, "a/b/test.json", []byte("{}"), "han", false)
	if err != nil {
		t.Fatal(err)
	}
	data, err := GetMemento(ctx)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("刪除新建的檔")
	err = Delete(ctx, "test.json")
	if err != nil {
		t.Fatal(err)
	}
	err = Delete(ctx, "a/test.json")
	if err != nil {
		t.Fatal(err)
	}
	err = Delete(ctx, "a/b/test.json")
	if err != nil {
		t.Fatal(err)
	}

	t.Log("查詢檔案長度必須為0")
	list, err = GetFileList(ctx, "", false)
	if err != nil {
		t.Fatal(err)
	}
	if len(list) != 0 {
		t.Error("列表長度必須為0")
	}

	t.Log("還原備份")
	err = SetMemento(ctx, data)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("查詢檔案長度必須為3")
	list, err = GetFileList(ctx, "", false)
	if err != nil {
		t.Fatal(err)
	}
	if len(list) != 3 {
		t.Error("列表長度必須為3")
	}
}
