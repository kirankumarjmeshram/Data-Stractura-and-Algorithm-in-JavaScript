function uniteUnique(...arr) {
    return [...new Set(arr.flat())];
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));//[ 1, 3, 2, 5, 4 ]

  //sol 2

  function uniteUnique2(arr) {
    const args = [...arguments];
    const result = [];
    for (let i = 0; i < args.length; i++) {
      for (let j = 0; j < args[i].length; j++) {
        if (!result.includes(args[i][j])) {
          result.push(args[i][j]);
        }
      }
    }
    return result;
  }

  console.log(uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1]));//[ 1, 3, 2, 5, 4 ]