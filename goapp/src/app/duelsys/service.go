package duelsys

import (
	"appengine"
	"net/http"
)

// 取得比賽列表

// 參加比賽，同名參賽者無法加入一次以上(ErrPeopleAlreadyAdd)
func Serve_AddPeople(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	err := Swap(ctx, func(ctx appengine.Context, dc *DuelContext) error {
		//TODO 判斷Duel的期間是不是報名期間

		// 加入參賽者
		var p People
		err := AddPeople(dc, "xxx", p)
		if err != nil {
			return err
		}
		return nil
	})
	var _ = err
}

// 取得對戰玩家的名字
func Serve_DuelTargetName(w http.ResponseWriter, r *http.Request) {

}

// 指定比賽結果

// 取得比賽結果的狀態
