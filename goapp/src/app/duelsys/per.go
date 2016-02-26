package duelsys

import (
	"appengine"
	"appengine/datastore"
	"encoding/json"
	"lib/tool"
)

const (
	AdminKind = "duelsys"
)

func AncestorKey(ctx appengine.Context) *datastore.Key {
	return datastore.NewKey(ctx, AdminKind, "han", 0, nil)
}

func DuelContextKey(ctx appengine.Context) *datastore.Key {
	return datastore.NewKey(ctx, "duelsyscontext", "han", 0, AncestorKey(ctx))
}

// 因為要存入的DuelContext有datastore不支援的巢狀slice（應該是循環引用問題），所以要先序列化成平面字串，所以創造這個Wrapper
type TempWrapper struct {
	Jsonstr string
}

func GetDuelContext(ctx appengine.Context) (DuelContext, error) {
	key := DuelContextKey(ctx)
	// 取出包裝的字串
	var wrapper TempWrapper
	err := datastore.Get(ctx, key, &wrapper)
	if err == datastore.ErrNoSuchEntity {
		// ignore
	} else if err != nil {
		return DuelContext{}, err
	}
	// 再解回DuelContext
	var dc DuelContext
	err = json.Unmarshal([]byte(wrapper.Jsonstr), &dc)
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

		// 包裝
		wrapper := TempWrapper{
			Jsonstr: string(code),
		}

		key := DuelContextKey(ctx)
		_, err = datastore.Put(ctx, key, &wrapper)
		if err != nil {
			return err
		}

		return nil
	})
}
