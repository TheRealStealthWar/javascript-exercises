const reverseString = function(phrase) {
    let reverse = "";
    for (let i = phrase.length - 1; i >= 0; i--) {
        reverse += phrase.charAt(i);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
