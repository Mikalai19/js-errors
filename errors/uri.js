new URIError();
new URIError(message);
new URIError(message, fileName);
new URIError(message, fileName, lineNumber);

try {
    decodeURIComponent('%')
} catch (e) {
    console.log(e instanceof URIError)  // true
    console.log(e.message)              // "malformed URI sequence"
    console.log(e.name)                 // "URIError"
    console.log(e.fileName)             // "Scratchpad/1"
    console.log(e.lineNumber)           // 2
    console.log(e.columnNumber)         // 2
    console.log(e.stack)                // "@Scratchpad/2:2:3\n"
}


module.exports = {

    URIError
}