var db2 = db2 || {};

(function( module ){
	
	var basePath = '../dbfile2/'
	
	function pfile( path, data, dataType, cb ){
		$.ajax({
			url: path,
			method: 'get',
			data: data,
			dataType: 'text',
			success: function( ret ){
				if( ret == 'file not found' ){
					cb( 'file not found' )
				} else {
					switch( dataType ){
						case 'json':
							var ret = JSON.parse( ret )
							cb( ret.Error, ret )
							break
						default:
							cb( null, ret )
							break
					}
				}
			},
			error: function( xhr, res, err ){
				cb( err )
			}
		})
	}
	
	function pfilelist( path, data, cb ){
		$.ajax({
			url: path,
			method: 'get',
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
	
	/**
	data: {
		FBID: string,
		AccessToken: string,
		Content: string,
		Override: ""
	}
	*/
	function pwritefile( path, data, cb ){
		$.ajax({
			url: path,
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
	
	/**
	dataType基本上都是json
	如果path是xxx.txt, 那dataType就是txt
	data: {
		FBID: string,
		AccessToken: string
	}
	*/
	function file( path, data, dataType, cb ){
		pfile( basePath+path, data, dataType, cb )
		/*
		$.ajax({
			url: basePath + path,
			method: 'get',
			data: data,
			dataType: 'text',
			success: function( ret ){
				if( ret == 'file not found' ){
					cb( 'file not found' )
				} else {
					switch( dataType ){
						case 'json':
							cb( null, JSON.parse( ret ) )
							break
						default:
							cb( null, ret )
							break
					}
				}
			},
			error: function( xhr, res, err ){
				cb( err )
			}
		})
		*/
	}
	
	function filelist( path, data, cb ){
		pfilelist( basePath+path, data, cb )
		/*
		$.ajax({
			url: basePath + path,
			method: 'get',
			data: data,
			dataType: 'json',
			success: function( ret ){
				cb( ret.Error, ret.Info )
			},
			error: function( xhr, res, err ){
				cb( err )
			}
		})
		*/
	}
	
	
	function writefile( path, data, cb ){
		pwritefile( basePath+path, data, cb )
		/*
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
		*/
	}
	
	module.file = file
	module.writefile = writefile
	module.filelist = filelist
	module.pfile = pfile
	module.pwritefile = pwritefile
	module.pfilelist = pfilelist
	
	
}) (db2)