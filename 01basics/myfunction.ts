function addTwo(num:string){
    return num + 2
}

function signup(name:string,email:string,isPaid:boolean):number{
    return 4
}


signup("ayo","ayo@gmail,com",true)


var login = (name:string,email:string,isthere:boolean)=>{
    console.log(name,email,isthere)
}
login("ayo","whas",true)

// function getValue(myVal:number):string{ 
//     if(myVal){
//         return true
//     }
//     return "200 cool"
// }


const getHello = (s:string):string =>{
return "wow"
}

const list = ["fries","chicken"]

list.map((l):string=>{
    return l;
})

function consoleError(errmsg:string):void{
    console.error(errmsg)
}

let userId = 12312


let signUp = (name:string,email:string,isPaid:boolean = false)=>{}
signUp("hello","hello") /// here we added the default value to it


export{}