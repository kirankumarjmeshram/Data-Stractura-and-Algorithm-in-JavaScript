// https://leetcode.com/problems/longest-common-prefix/description/

//solution 1 Vertical scanning
//Time:  O(N × M)
// Space: O(1)
var longestCommonPrefix = function(strs) {
    let first = strs[0];

    for(let i=0;i<first.length;i++) {
        let char = first[i];

        for(let j=1; j< strs.length; j++) {
            if(strs[j][i] !== char){
                return first.substring(0,i);
            }
        }
    }
    return first;
};

// Solution 2
var longestCommonPrefix = function(strs) {
    let result = '';

    for(let i=0;i<strs[0].length;i++) {
        for(let s of strs) {
            if(strs[0][i] !== s[i] || i === s.length){
                return result;
            }
        }
        result+= strs[0][i];
    }
    return result;
};

// Tries
var longestCommonPrefix = function(strs) {
    let trie = new Trie();
    for(let str of strs) {
        trie.insert(str);
    }
    return trie.longestCommonPrefix();
};

class TrieNode{
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for(let char of word) {
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }
    longestCommonPrefix(){
        let node = this.root;
        let prefix = "";

        while(Object.keys(node.children).length === 1 && !node.isEnd) {
            let char = Object.keys(node.children)[0];
            prefix += char;
            node = node.children[char]
        } 
        return prefix;
    }
}