//The switch statement evaluates an expression, matching the expression's
// value to a case clause, and executes statements associated with 
//that case, as well as statements in 
//cases that follow the matching case.

const expr ="Papayas";

switch (expr){
    case 'Orange': 
    console.log("Oranges are 100Rs per dosen");
    break;

    case 'Magoes':
    case "Papayas":
        console.log("Mangoes and Papayas are 51Rs Kg");
        break;
    
        default:
            console.log(`Sorry we are out of ${expr}`);
}