class User3{
    email:string
    private name:string
    private readonly city:string = "Jaipur"
    constructor(email:string,name:string){
        this.email = email
        this.name = name
        this.city = "Delhi" // Error: Cannot assign to 'city' because it is a read-only property.
    }
}

const user3 = new User3 ("abc@gmail.com","Hitesh")
console.log(user3.email) // Error: Property 'city' is private and only accessible within class 'User3'.
// The private keyword restricts access to the city property to only the User class.
class User4{
    
    readonly city:string = "Jaipur"
    constructor( // another way to declare properties
        public email:string,
        public name:string
    ){
        this.email = email
        this.name = name
        this.city = "Delhi" // Error: Cannot assign to 'city' because it is a read-only property.
    }
}