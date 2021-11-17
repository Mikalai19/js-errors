new AggregateError(errors);
new AggregateError(errors, message);

try {
    throw new AggregateError([
        new Error("some error"),
    ], 'Hello');
} catch (e) {
    console.log(e instanceof AggregateError); // true
    console.log(e.message);                   // "Hello"
    console.log(e.name);                      // "AggregateError"
    console.log(e.errors);                    // [ Error: "some error" ]
}

module.exports = {

    AggregateError
}