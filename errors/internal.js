function InternalError() {
    function loop(x) {
        if (x >= 10) // "x >= 10" is the exit condition
            return;
        // do stuff
        loop(x + 1); // the recursive call
    }
    loop(0);


}



module.exports = {

    InternalError
}