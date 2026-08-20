// https://leetcode.com/problems/count-prefixes-of-a-given-string/

// using tries
class TrieNode{
    constructor() {
        this.children = {};
        this.count = 0;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for(let char of word) {
            if(!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char];
        }
        node.count++;
    }

    countPrefixes(s) {
        let node = this.root
        let count = 0;
        for(let char of s) {
            if(!node.children[char]) {
                break
            }
            node =  node.children[char];
            count += node.count
        }
        return count;
    }
}


//using inbuild method
var countPrefixes = function(words, s) {
    let count = 0;
    for(let word of words) {
        if(s.startsWith(word)){
            count++;
        }
    }
    return count;
};


