class User5{

    private _courseCount:number = 1

    readonly city:string = "Jaipur"
    constructor(
        public email:string,
        private name:string
    ){
        this.email = email
        this.name = name
    }

    private deleteToken(){
        console.log("Deleting token")
    }
    // getter
    get AppleEmail():string{
        return "apple"+this.email
    }

    get courseCount():number{
        return this._courseCount
    }

    set courseCount(count:number){ //setter cant have return type
        if(count > 1){
            throw new Error("Invalid course count")
        }
        this._courseCount = count;
    }
    // getteres and setters are designed in js to access and modify the private properties of a class
}
const sahil = new User5("sahiljeet@gmail.com", "Sahil") 

class SubUser extends User5 { // cant access private properties of User5
    isFamily : boolean = true
    changeCourseCount(){
        this.courseCount = 2
    }
}