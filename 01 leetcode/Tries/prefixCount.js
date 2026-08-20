// https://leetcode.com/problems/counting-words-with-a-given-prefix/description/

//Using Tries
var prefixCount = function(words, pref) {
    let trie = new Trie();
    
    for(let word of words) {
        trie.insert(word);
    }

    return trie.countPrefix(pref);
};

class TrieNode{
    constructor() {
        this.children = {};
        this.count =0;
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        
        for(let char of word) {
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            node.count++;
        }
    }

    countPrefix(pref) {
        let node = this.root;

        for(let char of pref) {
            if(!node.children[char]){
                return 0;
            }
            node = node.children[char];
        }
        return node.count;
    }
}

//using array Methods
var prefixCount = function(words, pref) {
    let count = 0;
    for(let word of words) {
        if(word.startsWith(pref)){
            count++;
        }
    }
    return count;
};