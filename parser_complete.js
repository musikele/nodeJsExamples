// Load the fs (filesystem) module.
var fs = require('fs');

// Read the contents of the file into memory.
fs.readFile(process.argv[2], function (err, logBuffer) {

// If an error occurred, throwing it will
	// display the exception and kill our app.
	if (err) throw err;

// logBuffer is a Buffer, convert to string.
	var text = logBuffer.toString();

	var results = {};

// Break up the file into lines.
	var lines = text.split('\n');

	lines.forEach(function(line) {
		var parts = line.split(' ');
		var letter = parts[1];
		var count = parseInt(parts[2]);

		if(!results[letter]) {
			results[letter] = 0;
		}

		results[letter] += parseInt(count);
	});

	console.log(results);
	// { A: 2, B: 14, C: 6 }
});