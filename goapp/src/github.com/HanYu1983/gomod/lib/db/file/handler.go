package dbfile

import (
	"encoding/json"
	"fmt"
	"net/http"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	"github.com/HanYu1983/gomod/lib/abstract"
	"github.com/HanYu1983/gomod/lib/tool"

	"google.golang.org/appengine"
)

func WriteFile(w http.ResponseWriter, r *http.Request) {
	t := tool.TemplateWithFile("write", "lib/db/file/write.html")
	t.Execute(w, map[string]string{
		"Path": "admindbfile/",
	})
}

func DBFileSystem2(user abstract.IUser) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		defer tool.Recover(func(err error) {
			tool.Output(w, nil, err.Error())
		})

		ctx := appengine.NewContext(r)

		// post的話，執行新增檔案或新增資料夾
		if r.Method == "POST" {
			r.ParseForm()
			form := r.PostForm

			// 若有Delete參數，執行刪除
			if len(form["Delete"]) > 0 {
				tool.Assert(tool.ParameterIsNotExist(form, "Key"))
				key, err := strconv.ParseInt(form["Key"][0], 10, 0)
				tool.Assert(tool.IfError(err))

				file, err := GetFile(ctx, key)
				tool.Assert(tool.IfError(err))

				if user.HasPermission(file) == false {
					panic("you are not owner")

				}

				DeleteFile(ctx, key)
				tool.Output(w, nil, nil)
				return
			}

			// 執行新增
			tool.Assert(tool.ParameterIsNotExist(form, "Parent"))
			tool.Assert(tool.ParameterIsNotExist(form, "Name"))

			parent, err := strconv.ParseInt(form["Parent"][0], 10, 0)
			tool.Assert(tool.IfError(err))
			name := form["Name"][0]

			// 0代表最頂層，所以不必判斷
			// 非0的話則判斷該資料夾在不在
			if parent != 0 {
				parentFile, err := GetFile(ctx, parent)
				tool.Assert(tool.IfError(err))

				if parentFile.IsDir == false {
					panic(fmt.Sprintf("%d is not dir", parent))
				}
			}

			// 有Content參數代表要建檔案，不然為建資料夾
			if len(form["Content"]) > 0 {
				tool.Assert(tool.ParameterIsNotExist(form, "Override"))
				content := form["Content"][0]
				var override bool
				if form["Override"][0] == "on" {
					override = true
				} else {
					override = false
				}
				_, err := MakeFile(ctx, parent, name, []byte(content), override, user.GetID())
				tool.Assert(tool.IfError(err))

			} else {
				_, err := MakeDir(ctx, parent, name, user.GetID())
				tool.Assert(tool.IfError(err))

			}

			tool.Output(w, nil, nil)
			return
		}

		// ========== get為顯示資料 =============== //
		pathToken := strings.Split(r.URL.Path, "/")

		position, err := strconv.ParseInt(pathToken[len(pathToken)-1], 10, 0)
		tool.Assert(tool.IfError(err))

		WriteList := func(id int64, isDetail bool, offset, cnt int) {
			end := offset + cnt
			files, err := FileList(ctx, id)
			tool.Assert(tool.IfError(err))

			paths := []interface{}{}
			for idx, file := range files {
				if idx < offset || idx >= end {
					continue
				}
				if isDetail {
					paths = append(paths, map[string]interface{}{"Key": file.Key, "Name": file.Name, "Position": file.Position, "Content": string(file.Content), "Owner": file.Owner, "Time": time.Unix(file.Time, 0)})
				} else {
					paths = append(paths, map[string]interface{}{"Key": file.Key, "Name": file.Name, "Time": time.Unix(file.Time, 0)})
				}
			}
			tool.Output(w, paths, nil)
		}

		// 因為沒有任何一個parent的id為0
		// 所以position指定為0的代表最上層
		r.ParseForm()
		var isSnapshot bool
		if len(r.Form["Snapshot"]) > 0 {
			isSnapshot = true
		}
		if isSnapshot {
			files, err := FileList(ctx, -1)
			tool.Assert(tool.IfError(err))
			str, err := json.Marshal(files)
			tool.Assert(tool.IfError(err))
			fmt.Fprintf(w, "%s", str)
			return
		}

		var isDetail bool
		if len(r.Form["Detail"]) > 0 {
			isDetail = true
		}
		var offset int
		cnt := 5
		if len(r.Form["Offset"]) > 0 {
			offset, err = strconv.Atoi(r.Form["Offset"][0])
			tool.Assert(tool.IfError(err))
		}
		if len(r.Form["Count"]) > 0 {
			cnt, err = strconv.Atoi(r.Form["Count"][0])
			tool.Assert(tool.IfError(err))
		}

		if position == 0 {
			WriteList(position, isDetail, offset, cnt)

		} else {

			file, err := GetFile(ctx, position)
			tool.Assert(tool.IfError(err))

			if user.HasPermission(file) == false {
				panic("you are not owner")
			}

			if file.IsDir {
				WriteList(position, isDetail, offset, cnt)

			} else {
				r.ParseForm()
				var isContent bool
				if len(r.Form["Content"]) > 0 {
					isContent = true
				}

				if isContent {
					filetype := filepath.Ext(file.Name)[1:] //delete first "."
					switch filetype {
					case "json":
						w.Header().Set("Content-Type", "application/json; charset=utf8")
						fmt.Fprintf(w, "%s", string(file.Content))
						break
					case "txt":
						w.Header().Set("Content-Type", "text/plain; charset=utf8")
						fmt.Fprintf(w, "%s", string(file.Content))
						break

					case "jpg":
						w.Header().Set("Content-Type", "image/jpeg; charset=utf8")
						img := tool.DecodeBase64ToImage(string(file.Content))
						tool.WriteJpg(w, img)
						break
					}

				} else {
					tool.Output(w, map[string]interface{}{"Key": file.Key, "Name": file.Name, "Content": string(file.Content), "Owner": file.Owner, "Time": file.Time}, nil)

				}
			}
		}
	}
}

func DBFileSystem(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(tool.WriteErrorJson(w))
	ctx := appengine.NewContext(r)

	// post的話，執行新增檔案或新增資料夾
	if r.Method == "POST" {
		form, err := tool.ReadAjaxPost(r)
		tool.Assert(tool.IfError(err))

		// 若有Delete參數，執行刪除
		if len(form["Delete"]) > 0 {
			tool.Assert(tool.ParameterIsNotExist(form, "Key"))
			key, err := strconv.ParseInt(form["Key"][0], 10, 0)
			tool.Assert(tool.IfError(err))
			DeleteFile(ctx, key)
			return
		}

		// 執行新增
		tool.Assert(tool.ParameterIsNotExist(form, "Parent"))
		tool.Assert(tool.ParameterIsNotExist(form, "Name"))

		parent, err := strconv.ParseInt(form["Parent"][0], 10, 0)
		tool.Assert(tool.IfError(err))
		name := form["Name"][0]

		// 0代表最頂層，所以不必判斷
		// 非0的話則判斷該資料夾在不在
		if parent != 0 {
			parentFile, err := GetFile(ctx, parent)
			tool.Assert(tool.IfError(err))

			if parentFile.IsDir == false {
				panic(fmt.Sprintf("%d is not dir", parent))
			}
		}

		// 有Content參數代表要建檔案，不然為建資料夾
		if len(form["Content"]) > 0 {
			tool.Assert(tool.ParameterIsNotExist(form, "Override"))
			content := form["Content"][0]
			var override bool
			if form["Override"][0] == "on" {
				override = true
			} else {
				override = false
			}
			_, err := MakeFile(ctx, parent, name, []byte(content), override, "")
			tool.Assert(tool.IfError(err))

		} else {
			_, err := MakeDir(ctx, parent, name, "")
			tool.Assert(tool.IfError(err))

		}

		w.Header().Set("Content-Type", "application/json; charset=utf8")
		fmt.Fprintf(w, "{%s}", "")
		return
	}

	// get為顯示資料
	pathToken := strings.Split(r.URL.Path, "/")

	position, err := strconv.ParseInt(pathToken[len(pathToken)-1], 10, 0)
	tool.Assert(tool.IfError(err))

	WriteList := func(id int64, isDetail bool) {
		files, err := FileList(ctx, id)
		tool.Assert(tool.IfError(err))

		paths := []interface{}{}
		for _, file := range files {
			if isDetail {
				paths = append(paths, file)
			} else {
				paths = append(paths, map[string]interface{}{"Key": file.Key, "Name": file.Name})
			}
		}
		jsonstr, _ := json.Marshal(paths)
		w.Header().Set("Content-Type", "application/json; charset=utf8")
		fmt.Fprintf(w, "%s", jsonstr)
	}

	if position == 0 {
		r.ParseForm()
		var isDetail bool
		if len(r.Form["Detail"]) > 0 {
			isDetail = true
		}
		WriteList(position, isDetail)

	} else {

		file, err := GetFile(ctx, position)
		tool.Assert(tool.IfError(err))

		if file.IsDir {
			r.ParseForm()
			var isDetail bool
			if len(r.Form["Detail"]) > 0 {
				isDetail = true
			}
			WriteList(position, isDetail)

		} else {
			r.ParseForm()
			var isContent bool
			if len(r.Form["Content"]) > 0 {
				isContent = true
			}

			if isContent {
				filetype := filepath.Ext(file.Name)[1:] //delete first "."
				switch filetype {
				case "txt", "json":
					w.Header().Set("Content-Type", "text/plain; charset=utf8")
					fmt.Fprintf(w, "%s", string(file.Content))
					break

				case "jpg", "jpeg":
					break
				}

			} else {
				jsonstr, _ := json.Marshal(file)
				w.Header().Set("Content-Type", "application/json; charset=utf8")
				fmt.Fprintf(w, "%s", jsonstr)

			}

		}
	}

}
