interface Database {
    connection :string;
    username:string;
    password:string;
}

// can extends interface in generics
function genericFunction<T,U extends Database>(valone:T,valtwo:U):object{
    return {
        valone,
        valtwo
    };
}

genericFunction(3,{
    connection:'localhost',
    username:'admin',
    password:'admin'
});

interface Quiz{
    name:string;
    type:string;
}

interface Course{
    name:string;
    author:string;
    subject:string;
}

class Sellable<T>{
    public cart : T[] = []

    addToCart(products: T){
        this.cart.push(products);
    }
}