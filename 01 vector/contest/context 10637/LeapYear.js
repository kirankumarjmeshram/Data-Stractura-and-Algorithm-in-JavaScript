// To be a leap year, the year number must be divisible by four 
// – except for end-of-century years, which must be divisible by 400
function leapYear(n){
    if(n%4===0){
        if(n%400 !== 0 && n%100 === 0){
            return "Not a Leap Year"
        }else{
            return "Leap Year"
        }
         
    }else{
        return "Not a Leap Year"
    }
}