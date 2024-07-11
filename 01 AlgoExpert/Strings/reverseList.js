function reverseWordsInString(string) {
    let startIndex = 0;
    let strArr = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            strArr.push(string.slice(startIndex, i));
            startIndex = i
        } else if (string[startIndex] === " ") {
            strArr.push(' ');
            startIndex = i;
        }
    }
    strArr.push(string.slice(startIndex));
    reverseList(strArr);
    return strArr.join('');
}
function reverseList(list) {
    let start = 0;
    let end = list.length - 1;

    while (start < end) {
        let temp = list[start];
        list[start] = list[end];
        list[end] = temp;
        start++;
        end--;
    }
}

// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString;
