package collectmmo

import (
	"appengine"
	"database/sql"
	"errors"
	"fmt"
	_ "fmt"
	_ "github.com/go-sql-driver/mysql"
	"lib/tool"
	"net/http"
	"os"
	"regexp"
	_ "strconv"
	"strings"
	"time"
)

const (
	sqlFilePath = "app/collectmmo/db2.sql"
	dbname      = "root:@/mmo?charset=utf8"
)

var (
	ErrNotLogin = errors.New("you are not login")
)

var db *sql.DB

func init() {
	// 建立db
	var err error
	db, err = sql.Open("mysql", dbname)
	tool.Assert(tool.IfError(err))

	// 連線池設定
	db.SetMaxIdleConns(10)
	db.SetMaxOpenConns(10)

	// sql.Open不代表連線，只是建立一個抽象介面
	// 呼叫Ping來確定能不能連線成功
	err = db.Ping()
	tool.Assert(tool.IfError(err))
}

var (
	cmds = []Command{
		Command{
			regexp.MustCompile("(.*) login"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				username := input[1]

				// 直接使用Query方法加參數 = Prepared Statement
				// getUser帶入true自動幫玩家建一個角色
				rows, err := db.Query("call getUser(?, true)", username)
				tool.Assert(tool.IfError(err))
				defer rows.Close()

				hasUser := rows.Next()
				if hasUser {
					var username string
					var nickname sql.NullString
					var ctime string
					// 取得資料
					err = rows.Scan(&username, &nickname, &ctime)
					tool.Assert(tool.IfError(err))
					// 加入cookie
					// 用來判斷玩家有沒有登入
					duration, _ := time.ParseDuration("6h")
					tool.SetCookie(w, "user", "collectmmo/", username, time.Now().Add(duration))

					// 回傳玩家資料
					return map[string]interface{}{
						"username": username,
						"nickname": nickname.String,
						"ctime":    ctime,
					}
				} else {
					panic(fmt.Sprintf("建立玩家錯誤(%s)", username))
				}
			},
		},
		Command{
			regexp.MustCompile("me"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				// 從cookie中取得玩家名稱
				usernameCookie, err := tool.GetCookie(r, "user")
				if err != nil {
					panic(ErrNotLogin)
				}
				username := usernameCookie.Value

				// 取得玩家資料
				rows, err := db.Query("call getUser(?, false)", username)
				tool.Assert(tool.IfError(err))
				defer rows.Close()

				hasUser := rows.Next()
				if hasUser {
					var username string
					var nickname sql.NullString
					var ctime string
					// 取得資料
					err = rows.Scan(&username, &nickname, &ctime)
					tool.Assert(tool.IfError(err))

					return map[string]interface{}{
						"username": username,
						"nickname": nickname.String,
						"ctime":    ctime,
					}
				} else {
					panic(fmt.Sprintf("玩家已不存在(%s)", username))
				}
			},
		},
		Command{
			regexp.MustCompile("move to (top|bottom|left|right)"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				ctx.Infof("use some thing %v", input)
				movedir := input[1]

				// 從cookie中取得玩家名稱
				usernameCookie, err := tool.GetCookie(r, "user")
				if err != nil {
					panic(ErrNotLogin)
				}
				username := usernameCookie.Value

				// 判斷移動方向
				var x, y int
				switch movedir {
				case "top":
					x, y = 0, -1
					break
				case "bottom":
					x, y = 0, 1
					break
				case "left":
					x, y = -1, 0
					break
				case "right":
					x, y = 1, 0
					break
				}
				// 若procedure中有回傳table
				// 一定要記得把table關閉
				// 不然第兩次呼叫時會出現Commands out of sync例外
				// 所以若不確定procedure有沒有回傳table, 則都當它有
				ret, err := db.Query("call move(?, ?, ?)", username, x, y)
				tool.Assert(tool.IfError(err))
				defer ret.Close()
				return nil
			},
		},
		Command{
			regexp.MustCompile("get map. center is \\((\\d+),(\\d+)\\). left top is \\((\\d+),(\\d+)\\)"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				ctx.Infof("use some thing %v", input)
				xs, ys, ls, ts := input[1], input[2], input[3], input[4]
				// 取得以xs, ys為中心, ls, ts為擴展格數的地圖
				rows, err := db.Query("call getMap(?,?,?,?)", xs, ys, ls, ts)
				tool.Assert(tool.IfError(err))
				defer rows.Close()

				var ret []map[string]interface{}
				for rows.Next() {
					var x, y, canMove int
					var cellType string
					err = rows.Scan(&x, &y, &cellType, &canMove)
					tool.Assert(tool.IfError(err))
					ret = append(ret, map[string]interface{}{
						"x":        x,
						"y":        y,
						"canMove":  canMove,
						"cellType": cellType,
					})
				}
				return ret
			},
		},
		Command{
			regexp.MustCompile("logout"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				// 從cookie中取得玩家名稱
				usernameCookie, err := tool.GetCookie(r, "user")
				if err != nil {
					panic(ErrNotLogin)
				}
				username := usernameCookie.Value
				// 刪除cookie
				tool.ClearCookie(w, "user", "collectmmo/")
				return fmt.Sprintf("%s logout", username)
			},
		},
		Command{
			regexp.MustCompile("取得所有玩家"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				return nil
			},
		},
		Command{
			regexp.MustCompile("使用(.*)道具"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				ctx.Infof("use some thing %v", input)
				return nil
			},
		},
	}
)

func Talk(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)

	r.ParseForm()
	form := r.Form

	tool.AssertParametersNotMatch(map[string]string{
		"Talk": "string",
	}, form)

	talk := form["Talk"][0]

	result := ExecuteCommand(cmds, ctx, w, r, talk)
	tool.Output(w, result, nil)

}

// 重置db
// 將所有的table刪掉重建
// 資料當然全部不見
func ResetDB(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)
	var _ = ctx

	dbFile, err := os.Open(sqlFilePath)
	tool.Assert(tool.IfError(err))

	dbFileBytes, err := tool.File2Bytes(dbFile)
	tool.Assert(tool.IfError(err))

	// 將檔案中的資料分成二部分
	// 第一部分為;分隔，用來處理一般的table, view, ...
	// 第二部分為$$分隔，用來處理function, procedure
	// 所以要注意讀入的sql檔的撰寫方法要正確
	dbFileStr := string(dbFileBytes)
	dbFileStrWithOutUselessWord := strings.Replace(dbFileStr, "DELIMITER ;", " ", -1)
	stringParts := strings.Split(dbFileStrWithOutUselessWord, "DELIMITER $$")
	part1 := stringParts[0]
	part2 := stringParts[1]
	part1Lines := strings.Split(part1, ";")
	part2Lines := strings.Split(part2, "$$")
	// 將所有sql語句合併起來再一起處理
	allSqlLine := append(part1Lines, part2Lines...)

	for _, sql := range allSqlLine {
		// 確保沒有呼叫到空白字串
		trimedSql := strings.TrimSpace(sql)
		isNotEmpty := len(trimedSql) != 0
		if isNotEmpty {
			rows, err := db.Query(trimedSql)
			tool.Assert(tool.IfError(err))
			// 先確保關閉
			// Close呼叫是可以重覆的
			defer rows.Close()
			// 馬上關閉
			// 因為defer是在出了func之後才會執行，不直接關閉的話，記憶體無法釋放
			rows.Close()
		}
	}

	rows, err := db.Query("call Test();")
	tool.Assert(tool.IfError(err))
	defer rows.Close()
	tool.Output(w, nil, nil)
}
