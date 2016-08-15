package collectmmo

import (
	"appengine"
	"database/sql"
	_ "errors"
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
	dbname = "root:@/mmo?charset=utf8"
)

/*
TODO 這邊打開會出問題
var db *sql.DB

func init() {
	var err error
	db, err = sql.Open("mysql", dbname)
	tool.Assert(tool.IfError(err))
}
*/
var (
	cmds = []Command{
		Command{
			regexp.MustCompile("(.*)玩家登入"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				username := input[1]

				sqlstr := fmt.Sprintf("call getUser('%s', true)", username)
				ctx.Infof("sql:%s", sqlstr)

				db, err := sql.Open("mysql", dbname)
				tool.Assert(tool.IfError(err))

				rows, err := db.Query(sqlstr)
				tool.Assert(tool.IfError(err))
				defer rows.Close()

				hasUser := rows.Next()
				if hasUser {
					var username string
					var nickname sql.NullString
					var ctime string
					err = rows.Scan(&username, &nickname, &ctime)
					tool.Assert(tool.IfError(err))

					duration, _ := time.ParseDuration("6h")
					tool.SetCookie(w, "user", "collectmmo/", username, time.Now().Add(duration))

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
			regexp.MustCompile("取得我的資料"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				usernameCookie, err := tool.GetCookie(r, "user")
				tool.Assert(tool.IfError(err))

				username := usernameCookie.Value
				ctx.Infof("username:%s", username)

				sqlstr := fmt.Sprintf("call getUser('%s', false)", username)
				ctx.Infof("sql:%s", sqlstr)

				db, err := sql.Open("mysql", dbname)
				tool.Assert(tool.IfError(err))

				rows, err := db.Query(sqlstr)
				tool.Assert(tool.IfError(err))
				defer rows.Close()

				hasUser := rows.Next()
				if hasUser {
					var username string
					var nickname sql.NullString
					var ctime string
					err = rows.Scan(&username, &nickname, &ctime)
					tool.Assert(tool.IfError(err))

					duration, _ := time.ParseDuration("6h")
					tool.SetCookie(w, "user", "collectmmo/", username, time.Now().Add(duration))

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
			regexp.MustCompile("(.*)往([上|下|左|右])移動"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				ctx.Infof("use some thing %v", input)
				name := input[1]
				movedir := input[2]

				var x, y int
				switch movedir {
				case "上":
					x, y = 0, -1
					break
				case "下":
					x, y = 0, 1
					break
				case "左":
					x, y = -1, 0
					break
				case "右":
					x, y = 1, 0
					break
				}

				sqlstr := fmt.Sprintf("call move('%s', %d, %d)", name, x, y)
				ctx.Infof("sql:%s", sqlstr)

				db, err := sql.Open("mysql", dbname)
				tool.Assert(tool.IfError(err))

				db.Exec(sqlstr)
				tool.Assert(tool.IfError(err))
				return nil
			},
		},
		Command{
			regexp.MustCompile("取得地圖，中心為\\((\\d+),(\\d+)\\)左上為\\((\\d+),(\\d+)\\)"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				ctx.Infof("use some thing %v", input)
				xs, ys, ls, ts := input[1], input[2], input[3], input[4]
				sqlstr := fmt.Sprintf("call getMap(%s,%s,%s,%s)", xs, ys, ls, ts)
				ctx.Infof("sql:%s", sqlstr)

				db, err := sql.Open("mysql", dbname)
				tool.Assert(tool.IfError(err))

				rows, err := db.Query(sqlstr)
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
			regexp.MustCompile("取得名稱為(.*)的玩家"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				return nil
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

	filePath := "app/collectmmo/db2.sql"

	dbFile, err := os.Open(filePath)
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

	db, err := sql.Open("mysql", dbname)
	tool.Assert(tool.IfError(err))

	for _, sql := range allSqlLine {
		// 確保沒有呼叫到空白字串
		trimedSql := strings.TrimSpace(sql)
		isNotEmpty := len(trimedSql) != 0
		if isNotEmpty {
			_, err := db.Exec(trimedSql)
			ctx.Infof("sql:%s", trimedSql)
			tool.Assert(tool.IfError(err))
		}
	}

	_, err = db.Exec("call Test();")
	tool.Assert(tool.IfError(err))
	tool.Output(w, nil, nil)
}
