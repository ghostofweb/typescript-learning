const user:(string | number)[] = ['name', 'age', 'email'];
let user2 : [string,number,boolean]
user2 = ['name', 20, true];
// here we can see that we can define the type of each element in the tuple
// and also we can define the order of the elements in the tuple 
// if we try to change the order of the elements in the tuple then it will give us an error

// user2 = ['name', 20]; // error
// user2 = [20, 'name', true]; // error

export {}