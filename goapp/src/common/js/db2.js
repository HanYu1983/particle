var db2 = db2 || {};

(function( module ){
	
	var basePath = '../admindbfile2/'
	
	/**
	dataType基本上都是json
	如果path是xxx.txt, 那dataType就是txt
	*/
	function filelist( path, dataType, cb ){
		$.ajax({
			url: basePath + path,
			method: 'get',
			dataType: dataType,
			success: function( ret ){
				cb( ret.Error, ret.Info )
			},
			error: function( xhr, res, err ){
				cb( err )
			}
		})
	}
	
	function writefile( path, data, cb ){
		$.ajax({
			url: basePath + path,
			method: 'post',
			data: {
				Data: data
			},
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