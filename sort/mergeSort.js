function runProgram(input) {
  // Write code here
  input = input.trim().split('\n');
  let n = +input[0];
  let arr = input[1].split(" ").map(Number);
  return console.log(mergeSort(n, arr).join(" "));
}

function mergeSort(n, arr) {
    if(n<=1) {
        return arr;
    }
    let mid = Math.floor(n/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    
    left = mergeSort(mid,left);
    right = mergeSort(n-mid, right);
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i=0;
    let j=0;
    
    while(i< left.length && j<right.length) {
        if(left[i] < right[j]) {
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }
    while (i<left.length) {
        result.push(left[i]);
        i++;
    }
    while(j<right.length) {
        result.push(right[j]);
        j++;
    }
    return result;
}
