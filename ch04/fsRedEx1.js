var fs = require('fs');

var text = fs.readFileSync("./files/textFile.txt", "utf8");
console.log(text);