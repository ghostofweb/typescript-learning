const User = {
    name: 'John Doe',
    email:"hello@gmail.com", 
    age: 30
}
// here we are passing the arguments  here we are giving its type         here the type of function it will return
function createUser({ name, isPaid }: { name: string; isPaid: boolean }){
  return {
    name: name,
    isPaid: isPaid,
  };
}

createUser({name:"ayo",isPaid:true})

const user = createUser({ name: "hello", isPaid: true });
console.log(user);


export{}