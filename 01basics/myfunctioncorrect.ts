// function getValue (myVal:number){
//     if (myVal > 5) {
//         return true
//     }

//     return "200 OK"
// }

// need to use union

const getHellp = (s:string):string=>{
  return ""
}

const fruits = [
    "apple","mango","banana"
]


fruits.map( (hero:string):string =>{
    return `fruits are ${hero}` 
})
// using typesafety for the map


function consoleError (error:string) : void{
    console.log(error);
    // here we are making it expect to return nothing
}

function handleError (errormsg:string):never{
    throw new Error(errormsg)
}

// Never type represents values which are never observed, In a return type, this mean that the fucntion throws an exception or terminates execution of the program
