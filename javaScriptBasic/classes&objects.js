class User{
    constructor(firstname, lastname,credit){
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;
    }


}

const john = new User('John','Aderson',34);
console.log("john: ",john);