function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;;
  }
  
  console.log(mutation(["hello", "hey"]))//false
  console.log(mutation(["Mary", "Army"]))//true