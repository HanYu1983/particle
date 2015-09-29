var fs = require('fs')
var outputName = 'sangoWar.json'
var imageDir = 'https://particle-979.appspot.com/common/cardPackage/sangoWar/'
var targetDir = 'output/'
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

