function groupAnagrams(words) {
    // Write your code here.
    let map = {};
    for (let word of words) {
        let sortedWord = word.split('').sort().join('');
        if (!map[sortedWord]) {
            map[sortedWord] = [word]
        } else {
            map[sortedWord].push(word)
        }
    }
    return Object.values(map);
}

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;
