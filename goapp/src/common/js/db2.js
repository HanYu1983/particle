var db2 = db2 || {};

(function( module ){
	
	var basePath = '../dbfile2/'
	
	/**
	dataType基本上都是json
	如果path是xxx.txt, 那dataType就是txt
	data: {
		FBID: string,
		AccessToken: string
	}
	*/
	function filelist( path, data, dataType, cb ){
		$.ajax({
			url: basePath + path,
			method: 'get',
			data: data,
			dataType: dataType,
			success: function( ret ){
				cb( ret.Error, ret.Info )
			},
			error: function( xhr, res, err ){
				cb( err )
			}
		})
	}
	
	/**
	data: {
		FBID: string,
		AccessToken: string,
		Content: string,
		Override: ""
	}
	*/
	function writefile( path, data, cb ){
		$.ajax({
			url: basePath + path,
			method: 'post',
			data: data,
			dataType: 'json',
			success: function( ret ){
				cb( ret.Error, ret.Info )
			},
			error: function( xhr, res, err ){
				cb( err )
			}
		})
	}
	
	module.filelist = filelist
	module.writefile = writefile
	
}) (db2)