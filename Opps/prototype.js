function Dog(name) {
    this.name = name;
  }
  
 
  Dog.prototype.numLegs=2;
  let beagle = new Dog("Snoopy");
  console.log(beagle)//Dog { name: 'Snoopy' }
  console.log(beagle.numLegs)//2  