interface User1 {
    readonly dbId:number, //readonly means you can't change the value
    email:string,
    firstName:string,
    googleId?:string //optional
    startTrial:() => string
    // startTrial(): string
    getCoupon(couponCode:string):number

}

// interface give schema to the hello
const hello:User1 = {
    dbId:1,
    email:'',
    firstName:'',
    startTrial:() => {
        return "Trial Started"
    },
    getCoupon(name:"hello"):number {
        return 10
    }
}

hello.email = "helloworld"
// hello.dbId = 2 //error as it is readonly
