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
export {}