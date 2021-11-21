//The constructor method is a special method of a class f
//or creating and initializing an object instance of that class.


class User{
    constructor(firstname, lastname,credit){
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;
    }


}

const john = new User('John','Aderson',34);
console.log("john: ",john);
