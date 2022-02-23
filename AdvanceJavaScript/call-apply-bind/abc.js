function Person(n,a){
    this.name =n;
    this.age =a;
}

function Teacher(s,n,a){
    Person.call(this,n,a);
    this.subject =s
}

function Student(n,a){
    Person.apply(this,[n,a]);

    this.class="10th";
    this.name=n;
    this.age=a
}

let t1 = new Teacher("DOM","Nruput",30);
console.log(t1) // Teacher { name: 'Nruput', age: 30, subject: 'DOM' }
let s1 = new Student("Vipul",20);
console.log(s1)