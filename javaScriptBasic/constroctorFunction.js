function GeneralCar(givenName,givenSpeed){
    this.name = givenName;
    this.speed =givenSpeed;

    this.run = function(){
        console.log(`${this.name} is running`)
    };
    this.analyze = function(){
        console.log(`This car is slower by ${200-this.speed} than Porshe`)
    }
}

car1 = new GeneralCar('Nissan',180);
car2 = new GeneralCar("Maruti Alto",89);

console.log(car1.analyze())//This car is slower by 20 than Porshe