type User = {
    name:string,
    age:number,
    isActive:boolean
}

function createUser(user:User):void{
    // do something with user
    console.log(user.name,user.age,user.isActive)
}

createUser({name:"ayo",age:23,isActive:true})