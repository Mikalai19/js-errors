new TypeError();
new TypeError(message);
new TypeError(message, fileName);
new TypeError(message, fileName, lineNumber);
function TypeError() {
    try {
        null.f()
    } catch (e) {
        console.log(e instanceof TypeError)  // true
        console.log(e.message)               // "null has no properties"
        console.log(e.name)                  // "TypeError"
        console.log(e.fileName)              // "Scratchpad/1"
        console.log(e.lineNumber)            // 2
        console.log(e.columnNumber)          // 2
        console.log(e.stack)                 // "@Scratchpad/2:2:3\n"
    }
}

module.exports = {

    TypeError
}