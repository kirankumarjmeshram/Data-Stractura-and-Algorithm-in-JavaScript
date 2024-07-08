function semordnilap(words) {
    // Write your code here.
    const wordsSet = new Set(words);
    let semordnilapPairs = [];
    for (const word of words) {
        let reverse = word.split("").reverse().join("");
        if (wordsSet.has(reverse) && reverse != word) {
            semordnilapPairs.push([word, reverse]);
            wordsSet.delete(word);
            wordsSet.delete(reverse);
        }
    }
    return semordnilapPairs;
}

// Do not edit the line below.
exports.semordnilap = semordnilap;
