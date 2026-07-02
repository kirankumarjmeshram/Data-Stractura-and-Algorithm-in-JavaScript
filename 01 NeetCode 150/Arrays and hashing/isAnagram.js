// https://leetcode.com/problems/valid-anagram/

// using 2 hashmap
var isAnagram = function (s, t) {
  let n = s.length;
  if (n !== t.length) return false;
  let mapS = {};
  let mapT = {};
  for (let i = 0; i < n; i++) {
    mapS[s[i]] = (mapS[s[i]] || 0) +1
    // if (!mapS[s[i]]) {
    //   mapS[s[i]] = 1;
    // } else {
    //   mapS[s[i]]++;
    // }
  }

  for (let i = 0; i < n; i++) {
    mapT[t[i]] = (mapT[t[i]] || 0) +1
    // if (!mapT[t[i]]) {
    //   mapT[t[i]] = 1;
    // } else {
    //   mapT[t[i]]++;
    // }
  }

  for (let el of Object.keys(mapS)) {
    if (mapS[el] !== mapT[el]) {
      return false;
    }
  }
  return true;
};

// using one hashmap
var isAnagram = function (s, t) {
    let n = s.length;
    if (n !== t.length) return false;
    let map = {};
    for (let el of s) {
        map[el] = (map[el] || 0) +1
    }

    for (let el of t) {
        if(!map[el]) return false;
        map[el]--;
    }

    return true;
};