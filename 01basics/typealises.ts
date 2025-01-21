type User = {
    name:string;
    email:string;
    isActive : boolean;
}

function createUser(user:User):User{
    return {name:"hello",email:"",isActive:true}
}

createUser({name:"hello",email:"",isActive:true}) // this is correct

export {}