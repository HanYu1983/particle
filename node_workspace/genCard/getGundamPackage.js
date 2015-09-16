var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback){
	request.head(uri, function(err, res, body){
		if( err != null ){
			console.log( err )
			return
		}
		if( res == null ){
			console.log( 'no response' )
			return
		}
		if( res.headers == null ){
			console.log( 'no header' )
			return
		}
		var contentType = res.headers['content-type']
		if( contentType != 'image/jpeg' ){
			console.log( 'no image')
			return
		}
		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	});
};

function format( num ){
	var str = num + ''
	while( str.length < 3 ){
		str = '0' + str
	}
	return str
}

function filename( pkg, num ){
	return pkg+''+format(num)+'.jpg'
}

/**
package為1~67
*/
function downloadPackage( id, cnt ){
	for( var i =1; i<=cnt; ++i ){
		var name = filename( id, i )
		var url = 'http://www.shiner96500.com/cards/gundamwar/image/'+id+'/'+name
		function closure( url, name ){
			return function(){
				console.log( url )
				download(url, "gundamWar/"+name, function(){});
			}
		}
		setTimeout( closure(url, name), i* 1000 )
	}
}

for( var i=66; i<67; ++i ){
	function closure( pkg ){
		return function(){
			downloadPackage(pkg, 200)
		}
	}
	setTimeout( closure(i+1), (i-66)* 1000* 300)
}




