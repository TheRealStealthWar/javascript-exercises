const removeFromArray = function (arrayOfNums, ...removeNums) {
    let newArray = [];
    let copy = arrayOfNums;
    let removedNums = [];
    for (let i = 0; i < arrayOfNums.length; i++) {
        for (let j = 0; j < removeNums.length; j++) {
            if (arrayOfNums[i] === removeNums[j]) {
                removedNums.push(arrayOfNums[i]);
                copy[i] = null;
            }
        }
    }

    for (let i = 0; i < copy.length; i++) {
        if (copy[i] !== null) {
            newArray.push(copy[i]);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
