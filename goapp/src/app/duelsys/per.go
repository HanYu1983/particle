package duelsys

import (
	"appengine"
	_ "appengine/datastore"
	"encoding/json"
	"lib/db2"
	"lib/tool"
)

const (
	//AdminKind       = "duelsys"
	duelcontextpath = "root/duelsys/duelcontext.json"
)

/*
func AncestorKey(ctx appengine.Context) *datastore.Key {
	return datastore.NewKey(ctx, AdminKind, "han", 0, nil)
}

func DuelContextKey(ctx appengine.Context) *datastore.Key {
	return datastore.NewKey(ctx, "duelsyscontext", "han", 0, AncestorKey(ctx))
}
*/
//  因為要存入的DuelContext有datastore不支援的巢狀slice（應該是循環引用問題），所以要先序列化成平面字串，所以創造這個Wrapper
// 現在沒在使用，因為db2剛好需要將結構平面化成字串
type TempWrapper struct {
	Jsonstr []byte
}

func GetDuelContext(ctx appengine.Context) (DuelContext, error) {
	file, err := db2.GetFile(ctx, duelcontextpath)
	if err != nil {
		return DuelContext{}, err
	}
	if file == nil {
		return DuelContext{}, nil
	}
	var dc DuelContext
	err = json.Unmarshal(file.Content, &dc)
	return dc, err
}

type ModifyFn func(ctx appengine.Context, dc *DuelContext) error

func Swap(ctx appengine.Context, fn ModifyFn) error {
	return tool.WithTransaction(ctx, 3, func(ctx appengine.Context) error {
		dc, err := GetDuelContext(ctx)

		err = fn(ctx, &dc)
		if err != nil {
			return err
		}

		// 先將結構平面化成字串
		code, err := json.Marshal(dc)
		if err != nil {
			return err
		}

		err = db2.WriteFileWithoutTransaction(ctx, duelcontextpath, code, "duelsys", true)
		if err != nil {
			return err
		}

		return nil
	})
}
