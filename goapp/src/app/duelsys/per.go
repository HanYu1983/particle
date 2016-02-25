package duelsys

import (
	"appengine"
	"appengine/datastore"
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

func GetDuelContext(ctx appengine.Context) (DuelContext, error) {
	key := DuelContextKey(ctx)
	var dc DuelContext
	err := datastore.Get(ctx, key, &dc)
	if err == datastore.ErrNoSuchEntity {
		// ignore
	} else if err != nil {
		return DuelContext{}, err
	}
	return dc, nil
}

type ModifyFn func(ctx appengine.Context, dc *DuelContext) error

func Swap(ctx appengine.Context, fn ModifyFn) error {
	return tool.WithTransaction(ctx, 3, func(ctx appengine.Context) error {
		key := DuelContextKey(ctx)
		var dc DuelContext
		err := datastore.Get(ctx, key, &dc)
		if err == datastore.ErrNoSuchEntity {
			// ignore
		} else if err != nil {
			return err
		}

		err = fn(ctx, &dc)
		if err != nil {
			return err
		}
		_, err = datastore.Put(ctx, key, dc)
		if err != nil {
			return err
		}
		return nil
	})
}
