const User = {
  name:"hello",
  email:"hello@gmail.com",
  isActive : true
}
// just an object


// creating a function, takes name and ispaid
function createUser({name:string,isPaid:boolean}){}

createUser({name:"hello",isPaid:false})// that is correct
// createUser({name:"hello",isPaid:false,number:123})// that is incorrect, cuz we expect 2 only

// but

let newone = {name:"hello",isPaid:false,number:123}
createUser(newone) // letting the object like this pass, typescript aint working that good
// thats why we use interface