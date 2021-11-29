var person ={
    firstName : 'Kirankumar',
    lastName : 'J Meshram',
    //fullName: function(){},
    fullName(){
      return  `${person.firstName} ${person.lastName}`
    }
};
//console.log(person.firstName+ ' ' + person.lastName);
//console.log(`${person.firstName} ${person.lastName}`);
//console.log(person.fullName()); this is readonly. ie we cannot change property from outside

//getters => access properties
//setters => change(mutate) them

var person ={
    firstName : 'Kirankumar',
    lastName : 'J Meshram',
    //fullName: function(){},
    get fullName(){
      return  `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'krishn kumar'

console.log(person)//-o { firstName: 'krishn', lastName: 'kumar', fullName: [Getter/Setter] }



