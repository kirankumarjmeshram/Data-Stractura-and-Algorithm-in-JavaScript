//Conditional (Ternary) operator
//the conditional (ternery) operator is only javaScript operator
//that takes 3 operands 
//1. a condition followed by a question mark(?),
//2. an expression to execute if the condition is truthy followed by colon(:),
//3. the expression to execute if the condition falsy.
//this operator is frequently used as a shortcut for the if statement.

//syntax => condition ? expr_IfTrue:expr_IfFalse

var age = 26;

var beverage = (age>21)?"Beer":"Juice";

console.log(beverage)//Beer


function getFree(isMember){
    return (isMember?"$2":"$10");
}
console.log(getFree(true))//$2

let greeting = person =>{
    let name = person?person.name:"stranger";
    return `Howdy,${name}`
}
console.log(greeting({name:`Sando`}));//-o Howdy,Sando


//conditional chain
//similar to an if … else if … else if … else chain

function example(…) {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}

// Equivalent to:

function example(…) {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}