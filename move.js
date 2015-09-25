var fs = require('fs');
var path = require('path');
var dir = path.dirname(process.argv[3]);
var letter = (path.isAbsolute(process.argv[3])) ? process.argv[3].slice(0, 2) + '/' : '';
var dirArray = (path.isAbsolute(process.argv[3])) ? dir.split('\\').slice(1, this.length) : dir.split('/');
fs.readdir(dir, function (err) {
	if (err && (dirArray.length === 1)) fs.mkdir(dir, 733, function (err) {
		if (err) console.error("Error when creating folder: ", err);
	});
	else if (err) {
		var count = 0, flag;
		while (count < dirArray.length) {
			count++;
			flag = 0;
			try {
				fs.readdirSync(letter + dirArray.slice(0, count).join('/'));
			}
			catch (err) {
				flag = 1;
			}
			if (flag) fs.mkdir(letter + dirArray.slice(0, count).join('/'), 733, function (err) {
				if (err) console.error("An error has occured: ", err);
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