const repeatString = function (phrase, numOfTimes) {
    let finalphrase = "";
    if (numOfTimes < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < numOfTimes; i++) {
            finalphrase += phrase;
        }
        return finalphrase;
    }
};

// Do not edit below this line
module.exports = repeatString;
