type User2 = {
    readonly _id : string; //only for the sake of read, cant be changed or manuplated
    name:string;
    email:string;
    isActive:boolean;
    creditCard?:number; //optional
}
// can be an option

function createUser(user:User2){
    // user._id = "123"
    // this will give an error, cuz _id is readonly
}

let myUser :User2 = {
    _id : "123",
    name:"hello",
    email:"h@h.com",
    isActive:true
}


type cardNumber = {
    cardnumber:string;
}

type cardDate = {
    cardData:string
}

type cardDetails = cardNumber & cardDate &{
    cardcvv:number    
}


export{}