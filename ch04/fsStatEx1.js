var fs = require("fs");

console.log("Going to get file info!");
fs.stat('./files/textFile.txt', function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("Got file info successfully!");

    // Check file type
    console.log("isFile ? " + stats.isFile());
    console.log("isDirectory ? " + stats.isDirectory());
});

/*
 fs.stat(path, callback)

 stats.isFile()	파일이면 true 반환
 stats.isDirectory()	디렉토리면 true 반환
 stats.isBlockDevice()	Returns true if file type of a block device.
 stats.isCharacterDevice()	Returns true if file type of a character device.
 stats.isSymbolicLink()	Returns true if file type of a symbolic link.
 stats.isFIFO()	Returns true if file type of a FIFO.
 stats.isSocket()	Returns true if file type of asocket.
 */