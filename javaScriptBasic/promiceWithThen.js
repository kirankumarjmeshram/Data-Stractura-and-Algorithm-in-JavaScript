const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  /*Promises are most useful when you have a
   process that takes an unknown amount of time in your
    code (i.e. something asynchronous), often a server 
    request. When you make a server request it takes some 
    amount of time, and after it completes you usually want to do 
    something with the response from the server. This can 
    be achieved by using the then method. The then method is
   executed immediately after your promise is fulfilled with resolve */
  makeServerRequest.then(result=>{
    console.log(result)
  });
/*catch is the method used when your promise has been rejected. It is executed 
immediately after a promise's reject method is called. */
  makeServerRequest.catch(error => {
    console.log(error);
  });