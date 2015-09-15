var fs = require('fs')
var outputName = 'config.json'
var targetDir = 'output/'
var output = {
	images: {}
}
fs.readdirSync(targetDir).forEach(function(name) {
	var path = targetDir + name
	output.images[name] = path
});

console.log(output)

fs.writeFile(outputName, JSON.stringify(output), function(err) {
	if(err) {
		return console.log(err);
	}
	console.log("The file was saved!");
}); 

