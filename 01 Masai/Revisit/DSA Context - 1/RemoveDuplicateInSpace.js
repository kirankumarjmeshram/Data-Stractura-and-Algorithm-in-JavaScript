function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let t = +input[0];
    let line = 1;
    for(let i=0;i<t;i++) {
      let n = +input[line++];
      let arr = input[line++].split(" ").map(Number)
      removeDuplicates(n,arr)
    }
  }
  function removeDuplicates(n,arr) {
    if(n==0) console.log(0);
    let idx = 1;
    for(let i=1;i<n;i++) {
      if(arr[i]!==arr[i-1]) {
        arr[idx] = arr[i];
        idx++
      }
    }
    arr.length = idx;
    console.log(idx)
    console.log(arr.join(" "))
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  