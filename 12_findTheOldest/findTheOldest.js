const findTheOldest = function (array) {
    let currentYear = new Date().getFullYear();
    let oldestAge = 0;
    if ("yearOfDeath" in array[0]) {
        oldestAge = (array[0].yearOfDeath - array[0].yearOfBirth);
    }
    else {
        oldestAge = (currentYear - array[0].yearOfBirth);
    }

    let oldestName = array[0];

    for (let i = 0; i < array.length; i++) {
        if ("yearOfDeath" in array[i]) {
            let age = array[i].yearOfDeath - array[i].yearOfBirth;
            if (age > oldestAge) {
                oldestAge = age;
                oldestName = array[i];
            }
        }
        else {
            let age = currentYear - array[i].yearOfBirth;
            if (age > oldestAge) {
                oldestAge = age;
                oldestName = array[i];
            }
        }
    }

    return oldestName;
};

// Do not edit below this line
module.exports = findTheOldest;
