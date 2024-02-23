function isPrime(x){
    for(let i=2;i<=x-1; i+=1){
        if(x % i == 0){
            return false;
        }
        else{
            return true;
        }
    }
}

let x = 111;
let result = isPrime(x);
if(result == true){
    console.log("Not a Prime number");
}
else{
    console.log("Prime");
}
