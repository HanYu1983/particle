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
	"strings"
)

const (
	dbname = "root:@/mmo?charset=utf8"
)

var (
	cmds = []Command{
		Command{
			regexp.MustCompile("(.*)玩家登入"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				return nil
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
		Command{
			regexp.MustCompile("(.*)往([上|下|左|右])移動"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				ctx.Infof("use some thing %v", input)
				name := input[1]
				movedir := input[2]

				db, err := sql.Open("mysql", dbname)
				tool.Assert(tool.IfError(err))

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

				sql := fmt.Sprintf("call move('%s', %d, %d)", name, x, y)
				ctx.Infof("sql:%s", sql)
				_, err = db.Exec(sql)
				tool.Assert(tool.IfError(err))
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

	filePath := "app/collectmmo/db.sql"

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
			if err != nil {
				ctx.Infof("err sql:%s", trimedSql)
			}
			tool.Assert(tool.IfError(err))
		}
	}
	_, err = db.Exec("call Test()")
	tool.Assert(tool.IfError(err))
	tool.Output(w, nil, nil)
}
