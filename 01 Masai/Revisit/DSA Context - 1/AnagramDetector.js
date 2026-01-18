function anagramDetector(S1,S2){
    //write code here
    S1 = S1.split("").filter((char) => char !== " ").map((char) => char.toLowerCase()).sort().join("");
    S2 = S2.split("").filter((char) => char !== " ").map((char) => char.toLowerCase()).sort().join("");
    console.log(S1===S2?"True":"False")
    
}

