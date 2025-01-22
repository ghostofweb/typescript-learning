const user:(string | number)[] = ['name', 'age', 'email'];
let user2 : [string,number,boolean]
user2 = ['name', 20, true];
let rbg:[number,number,number] = [255,0,0];

// so here what we are doing is we are defining a tuple with 3 elements
// the first element is of type number
// the second element is of type number
// the third element is of type number
// and we are assigning the values to the tuple
// the first element is 255
// the second element is 0
// the third element is 0


// here we can see that we can define the type of each element in the tuple
// and also we can define the order of the elements in the tuple 
// if we try to change the order of the elements in the tuple then it will give us an error
// user2 = ['name', 20]; // error
// user2 = [20, 'name', true]; // error

type User = [number,string]
const newUser:User = [1, 'name'];
// here we are defining a type User which is a tuple with 2 elements
// the first element is of type number
// the second element is of type string

newUser[1] = "new name";
// here we are changing the value of the second element in the tuple to "new name"


export {}