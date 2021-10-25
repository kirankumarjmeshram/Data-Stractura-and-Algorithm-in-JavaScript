var letters = [] //this is our stack

var word = 'recer';

var rword='';

//put letters of word into stack

for (var i=0;i<word.length;i++){
    letters.push(word[i]);
}

//pop off the stack in reverce order
//The pop() method removes the last element from an letters and returns that element to rword
for ( var i=0;i<word.length;i++){
    //lettere is object and converting in reverse string
    rword = rword + letters.pop();
}

//comparing two string
if(word === rword){
    console.log(word + " is a palindrome.");
}else{
    console.log(word + " is not a palindrome.");
}
