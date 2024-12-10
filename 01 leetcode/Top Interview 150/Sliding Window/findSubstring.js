// https://leetcode.com/problems/substring-with-concatenation-of-all-words/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const freq = new Map();
    words.forEach(word => {
        freq.set(word, (freq.get(word) || 0) + 1);
    });

    const len = s.length;
    const wordLen = words[0].length;
    const wordCount = words.length;
    const windowSize = wordLen * wordCount;

    const result = [];

    for (let startPos = 0; startPos < wordLen; startPos++) {
        let start = startPos;

        while (start + windowSize <= len) { 
            const curr = new Map(freq); 
            let matched = true;

            for (let i = 0; i < wordCount; i++) {
                const currWord = s.substring(start + i * wordLen, start + (i + 1) * wordLen);

                if (!curr.has(currWord) || curr.get(currWord) === 0) {
                    matched = false;
                    break;
                }

                curr.set(currWord, curr.get(currWord) - 1);
            }

            if (matched) {
                result.push(start);
            }

            start += wordLen; // Sliding window
        }
    }

    return result;
};