// WAP to find first occurence of an element in an array using recursion
// Array: [10, 20, 30, 20, 40, 20]
// Element to find: 20
let arr = [10, 20, 30, 20, 40, 20];
let element = 40;

function find(arr,element, index){
    if(index === arr.length){
        return "Element Not Found"
    }
    if(arr[index] === element){
        return index
    }
    return find(arr,element, index+1)
}

console.log(find(arr,element, 0))