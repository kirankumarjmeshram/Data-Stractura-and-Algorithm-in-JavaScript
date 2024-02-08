function complement(n) {
    if (n === 0) {
        return 1;
    }
    let numBits = Math.floor(Math.log2(n)) + 1;
    let bitmask = (1 << numBits) - 1;
    let complement = n ^ bitmask;
    if(complement <0){
        return -complement -1;
    }
  return complement;
}