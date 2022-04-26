localStorage.setItem("hello","world");

localStorage.getItem("hello") //"eorld"

const user = {
    name:"Kirankumar J Meshram"
}

localStorage.setItem("user",JSON.stringify(user));

JSON.parse(localStorage.getItem("user"))

