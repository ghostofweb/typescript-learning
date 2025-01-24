const score : Array<number> = [];
const names : Array<string> = [];

function identityOne(val : boolean | number):boolean|number {
    return val;
}

function identityFour<T>(val : T):T {
    return val
}

// identityFour(2) //function identityFour<2>(val: 2): 2

interface Bootle{
    brand:string;
    type:number;
}

identityFour<Bootle>(
    {
        brand:'Coca-Cola',
        type:2
    }
)


function getSearchProducts<T>(products:T[]):T{
    return products[0]; 
}
//or

const getMoreSearchProducts = <T> (products:T[]) : T => {
    return products[0];
}


function anotherFunction<T,U>(val:T, val2:U):object{
    return {};
}