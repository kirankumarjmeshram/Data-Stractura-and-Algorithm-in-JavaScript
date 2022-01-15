const user ={
    First_name:"Kirankumar j",
    Last_name:"Meshram",
    Age:26,
    Gender: "Male",
    Adderss:{
        at:"keshori",
        post:"Gondiya"
    }
}
const product={
    name:"item1",
    price:"1500000",
    
}
const {First_name:name,Last_name}=user;//based on actual name

console.log("My name is"+ name,Last_name)

const thirdPerson = {...user,...product};

console.log(thirdPerson)/*=>{
    First_name: 'Kirankumar j',
    Last_name: 'Meshram',
    Age: 26,
    Gender: 'Male',
    Adderss: { at: 'keshori', post: 'Gondiya' },
    name: 'item1',
    price: '1500000'
  } */

  function printUser({First_name,name,price,color="blue"}){
      console.log(`My name is ${First_name} and want to but ${name} of price ${price} of color ${color}`)
  }
  printUser(thirdPerson)