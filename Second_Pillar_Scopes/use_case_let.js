function fun(){
    for(var i =0; i<10; i++){
        //do something
    }
    console.log(i);
}

function processs(x,y){
    if(x>y){
        var temp = x;
        x=y;
        y=temp;
    }
    return y - x;
    // It  will create a problem. bcz in that way there is no use case of temp.
}

// console.log(processs(9,10));

//do it by let
function process(x,y){
    if(x>y){
        let temp = x;
        x=y;
        y=temp;
    }
    
   
}

// console.log(process(9,10));
// redeclarion is not allowed in let but allowed in var
