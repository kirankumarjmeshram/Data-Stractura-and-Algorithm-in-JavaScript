//getters and setters to Control Access to an Object

//Getter functions are meant to simply return (get) the value of an object's private variable 
//to the user without the user directly accessing the private variable.
//Setter functions are meant to modify (set) the value of an object's private variable 
//based on the value passed into the setter function. 
//This change could involve calculations, or even overwriting the previous value completely.


class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);
  novel.writer = 'newAuthor';
  console.log(novel.writer);
  



// var person ={
//     firstName : 'Kirankumar',
//     lastName : 'J Meshram',
//     //fullName: function(){},
//     fullName(){
//       return  `${person.firstName} ${person.lastName}`
//     }
// };
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





