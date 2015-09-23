var fs = require('fs');
var path = require('path');
var letter = '';
if (process.argv[3].match(/:\//g)) letter = process.argv[3].slice(0, 3);
var dir = path.dirname(process.argv[3]);
fs.readdir(dir, function (err) {
	if (err && (dir.split('/').length === 1)) fs.mkdir(dir, 733, function (err) {
		if (err) console.error("Error when creating folder: ", err);
	});
	else if (err) {
		var count = 0;
		while (count < dir.split('/').length) {
			count++;
			fs.mkdir(dir.split('/').slice(0, count).join('/'), 733, function (err) {
				// Need a workaround to pass along other parameters, like a flag or count variable
				if (err) console.warn("Some directories already exist, proceeding...");
			});
		}
	}
});
fs.readFile(process.argv[2], function (err, data) {
	if (err) console.error("File doesn't exists!");
	else fs.writeFile(process.argv[3], data, function (err) {
		if (!err) console.warn('Success!');
		else console.error(err);
	})
});