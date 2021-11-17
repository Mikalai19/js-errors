new InternalError();
new InternalError(message);
new InternalError(message, fileName);
new InternalError(message, fileName, lineNumber);

function loop(x) {
    if (x >= 10) // "x >= 10" is the exit condition
        return;
    // do stuff
    loop(x + 1); // the recursive call
}
loop(0);





module.exports = {

    InternalError
}