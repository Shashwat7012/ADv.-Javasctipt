function IsEven(num){
    if(num%2 == 0){
        return true;
    }
    else {
        return false;
    }
}

// let x = 11;
// let result = IsEven(x);
// if(result == true){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }

// for(let i=0;i<=20;i++){
//     let result = IsEven(i);
//     if(result == true){
//         console.log(i,"Even");
//     }
//     else{
//         console.log(i, "Odd");
//     }
// }

let x= 10;
let y = 20;
let z = 81;

if(IsEven(x)){
    console.log("X is even");
}else{
    console.log("X is odd");
}

if(IsEven(y)){
    console.log("y is even");
}else{
    console.log("y is odd");
}

if(IsEven(z)){
    console.log("z is even");
}else{
    console.log("z is odd");
}