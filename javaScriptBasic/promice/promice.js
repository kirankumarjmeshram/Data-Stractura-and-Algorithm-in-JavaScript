// The Promise object supports two properties: state and result. 
// While a Promise object is "pending" (working), the result is undefined. 
// When a Promise object is "fulfilled", the result is a value. 
// When a Promise object is "rejected",the result is an error object.

let a = 1;

const myPromice = new Promise((resolve,reject)=>{
    if(a>5){
        resolve(console.log("Problem resolved succesfully"))
    }else{
        reject("Hello")
    }
})