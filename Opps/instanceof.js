let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
  let crow = new Bird("Alexis", "black");
  
 console.log(crow instanceof Bird)//true


 let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2
  };
  
  console.log(canary instanceof Bird); //false