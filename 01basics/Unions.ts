let score : number | string = 33;
// put a pipe so it can be string as well

score = "33"
// now it can be a string as well
// but if we try to do score = true, it will give an error

type User = {
    name:string;
    id:number
}


type Admin = {
    username:string;
    id:number
}

let user : User & Admin = {
    name:"sahiljeet",
    id:1,
    username:"sahiljeet"
}

function getDbid(id:number | string):string{
    console.log('db id',id);
    // id.toLowerCase() // this will give an error, cuz it can be a number as well
    // so we can do this
    if(typeof id === "string"){
        id.toLowerCase();
    }
    return "id"
}

getDbid(1)
getDbid("1")

// arrays as well

const data :number[]= [1,2,3,4,5,6,7,8,9,10]
const data2 :string[] = ["1","2","3","4","5","6","7","8","9","10"]

const data3 : (string | number)[] = [1,2,3,4,5,6,7,8,9,10,"1","2","3","4","5","6","7","8","9","10"]

// not string[] | number[] cuz it will only accept string or number, not both
// so we use (string | number)[]

let seatAllotment : "window" | "aisle" | "middle" 
seatAllotment = "window"
seatAllotment = "aisle" 
seatAllotment = "middle"

export {}