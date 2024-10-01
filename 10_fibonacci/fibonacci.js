const fibonacci = function(position) {
    if (position == 0) {
        return 0;
    }

    if (position < 0) {
        return "OOPS";
    }

    if (position == 1) {
        return 1;
    }

    let fib = 0;
    let zero = 0;
    let first = 1;

    for (let i = 1; i < position; i++) {
        fib = zero + first;
        zero = first;
        first = fib;
    }

    return fib;

};

// console.log(fibonacci("2"));
// Do not edit below this line
module.exports = fibonacci;
