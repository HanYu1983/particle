var _ = require('underscore')
var async = require('async')
var fs = require('fs')
var Canvas = require('canvas')
  , Image = Canvas.Image
  , canvas = new Canvas(200, 200)
  , ctx = canvas.getContext('2d');

ctx.font = '30px Impact';
ctx.rotate(.1);
ctx.fillText("Awesome!", 50, 100);

var te = ctx.measureText('Awesome!');
ctx.strokeStyle = 'rgba(0,0,0,0.5)';
ctx.beginPath();
ctx.lineTo(50, 102);
ctx.lineTo(50 + te.width, 102);
ctx.stroke();

function drawCard( card ){
	var canvas = new Canvas(200, 300)
	var ctx = canvas.getContext('2d')
	//ctx.font = '100px "Microsoft JhengHei"';
	//ctx.fillText( JSON.stringify(card), 100, 100 )
	var y = 0
	console.log(card.id)
	console.log(card.type)
	ctx.fillText( "id:"+card.id, 0, y )
	ctx.fillText( "type:"+"中文字", 0, y+20 )
	ctx.fillText( "name:"+card.weapon.name, 0, y+40 )
	ctx.fillText( "level:"+card.weapon.level, 0, y+60 )
	ctx.fillText( "weight:"+card.weapon.weight, 0, y+80 )
	ctx.fillText( "power:"+card.weapon.power, 0, y+100 )
	ctx.fillText( "type:"+card.weapon.type, 0, y+120 )
	return [card, canvas]
}
	
function writeImage( params, cb ){
	var info = params[0]
	var canvas = params[1]
	var out = fs.createWriteStream('output/'+info.id+'.png')
	var stream = canvas.pngStream()
	stream.on('data', function(chunk){
	  out.write(chunk);
	});
	stream.on('end', function(){
		cb()
	});
}

fs.readFile('cardInfo.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
	var json = JSON.parse( data )
	var cards = json.info
	
	async.map( _.map( cards, drawCard ), writeImage, function(err, results){
		console.log( err )
		console.log( results )
	});
	
});