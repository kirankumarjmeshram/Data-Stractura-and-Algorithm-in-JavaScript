function oneEdit(stringOne, stringTwo) {
    // Write your code here.
    const lengthOne = stringOne.length;
    const lengthTwo = stringTwo.length;
    if (Math.abs(lengthOne - lengthTwo) > 1) return false;

    for (let i = 0; i < Math.min(lengthOne, lengthTwo); i++) {
        if (stringOne[i] !== stringTwo[i]) {
            if (lengthOne > lengthTwo) {
                return stringOne.slice(i + 1) === stringTwo.slice(i)
            } else if (lengthTwo > lengthOne) {
                return stringOne.slice(i) === stringTwo.slice(i + 1);
            } else {
                return stringOne.slice(i + 1) === stringTwo.slice(i + 1);
            }
        }
    }
    return true;
}

// Do not edit the line below.
exports.oneEdit = oneEdit;
