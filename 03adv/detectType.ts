function detectType(val:number | string){
    if(typeof val === 'number'){
        return val + 3 
    }else{
        return val.toLowerCase();
    }
}

function provideId (id : string | null){
    if(id === null){
        return 'No ID provided';
    }else{
        return id;
    }
}

// typescript finished.......... for now