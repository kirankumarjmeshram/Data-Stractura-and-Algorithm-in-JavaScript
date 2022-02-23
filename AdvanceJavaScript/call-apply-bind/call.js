var person1 ={
    name: "Kiran"
};
var person2 ={
    name: "Mayuri"
}

function myName(m){
    console.log(this.name,m)
}

// myName()//undefined
// myName.call(person1,21)//Kiran 21
// myName.call(person2)//Mayuri 15

// function callName(m,c){
//     this.age=m;
//     this.city=c;
//     console.log("age :",m, "city :",c)
// }

// callName.call(2,3)