package collectmmo

import (
	"appengine"
	"database/sql"
	"errors"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"lib/tool"
	"os"
	_ "strconv"
	"strings"
)

const (
	sqlFilePath = "app/collectmmo/db2.sql"
	// 要注意cloudsql的instance的名稱不要打錯了
	// instance中的名稱不要和schema的名稱搞混
	appengineDbName = "root:1234@cloudsql(particle-979:us-central1:test)/test"
	debugDBName     = "root:@/mmo?charset=utf8"
	dbname          = debugDBName
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

// 重置db
// 將所有的table刪掉重建
// 資料當然全部不見
func ResetDB(ctx appengine.Context) error {
	dbFile, err := os.Open(sqlFilePath)
	if err != nil {
		return err
	}

	dbFileBytes, err := tool.File2Bytes(dbFile)
	if err != nil {
		return err
	}

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
			if err != nil {
				return err
			}
			// 先確保關閉
			// Close呼叫是可以重覆的
			defer rows.Close()
			// 在loop中，馬上關閉
			// 因為defer是在出了func之後才會執行，不直接關閉的話，記憶體無法釋放
			rows.Close()
		}
	}

	rows, err := db.Query("call Test();")
	if err != nil {
		return err
	}
	defer rows.Close()
	return nil
}

type User struct {
	Name       string
	Nickname   sql.NullString
	CreateTime string
}

var (
	EmptyUser = User{}
)

func CallGetUser(username string, createrole bool) (User, error) {
	// 直接使用Query方法加參數 = Prepared Statement
	// getUser帶入true自動幫玩家建一個角色
	rows, err := db.Query("call getUser(?, ?)", username, createrole)
	if err != nil {
		return EmptyUser, err
	}
	defer rows.Close()

	hasUser := rows.Next()
	if hasUser {
		var user User
		// 取得資料
		err = rows.Scan(&user.Name, &user.Nickname, &user.CreateTime)
		if err != nil {
			return EmptyUser, err
		}
		// 回傳玩家資料
		return user, nil
	} else {
		return EmptyUser, errors.New(fmt.Sprintf("建立玩家錯誤(%s)", username))
	}
}

func CallMove(username string, x, y int) error {
	// 若procedure中有回傳table
	// 一定要記得把table關閉
	// 不然第兩次呼叫時會出現Commands out of sync例外
	// 所以若不確定procedure有沒有回傳table, 則都當它有
	ret, err := db.Query("call move(?, ?, ?)", username, x, y)
	if err != nil {
		return err
	}
	defer ret.Close()
	return nil
}

type Cell struct {
	X, Y     int
	CanMove  bool
	CellType string
}

// 取得以x, y為中心, l, t為擴展格數的地圖
func CallGetMap(x, y, l, t int) ([]Cell, error) {
	rows, err := db.Query("call getMap(?,?,?,?)", x, y, l, t)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var ret []Cell
	for rows.Next() {
		var cell Cell
		err = rows.Scan(&cell.X, &cell.Y, &cell.CellType, &cell.CanMove)
		if err != nil {
			return nil, err
		}
		ret = append(ret, cell)
	}
	return ret, nil
}
