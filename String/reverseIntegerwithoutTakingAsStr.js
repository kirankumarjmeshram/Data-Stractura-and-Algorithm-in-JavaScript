let int = 1234;

let reversed = 0;
let pop;

while(int != 0){
    pop = int%10;
    reversed = reversed*10 + pop;
    int = Math.floor(int/10)
}

console.log(reversed) // 4321
