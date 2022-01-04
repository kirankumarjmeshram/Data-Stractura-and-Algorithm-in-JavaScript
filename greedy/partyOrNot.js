//Ashutosh has N friends and he wants to give a party to 
//his C friends on his birthday. Ashutosh knows the amount he 
//will have to spend on each of his N friends in party.
// Given the expense amount of each of the N friends, comment
// if it is possible for Ashutosh to
// give a party to his C friends if he has just R rupees.



var n=5,c=3,r=24,arr=[6,4,13,20,21]
console.log(partyOrNot(n,c,r,arr))//Party


function partyOrNot(n,c,r,arr){
    var sum =0;
    for(var i=0;i<c;i++){
        sum = sum+arr[i]
    }
    if(sum<= r){
        return "Party"
    }else{
        return "Sad"
    }
}
