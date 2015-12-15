(ns test.yoyo)

(def r-parse #"[\s\S]+?<img src=\"(.+\.jpg)\".+?/>[\s\S]+?<div class=\"data_box\">[\s\S]+?\"id\">(.+)</span> (.+) (\W+)</p>[\s\S]+?<td class=\"w200\">(.+?)</td>[\s\S]+?<td class=\"w150\">(.+?)</td>[\s\S]+?<td class=\"w150\">(.+?)</td>[\s\S]+?<td class=\"w70\">(.+?)</td>[\s\S]+?<td class=\"w70\">(.+?)</td>[\s\S]+?<td class=\"w90\">(.+?)</td>[\s\S]+?<td class=\"w60\">(.+?)</td>[\s\S]+?<td class=\"w90\">([\s\S]+?)</td>[\s\S]+<td class=\"text\">(.+?)</td>")
