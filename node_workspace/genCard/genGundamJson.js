var fs = require('fs')
var outputName = 'gundamWar.json'
var imageDir = 'gundamWar/'
var targetDir = 'gundamWar/'
var output = {
	images: {}
}
fs.readdirSync(targetDir).forEach(function(name) {
	var path = imageDir + name
	output.images[name] = path
});

fs.writeFile(outputName, JSON.stringify(output), function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log(outputName+" saved!");
	}
}); 

