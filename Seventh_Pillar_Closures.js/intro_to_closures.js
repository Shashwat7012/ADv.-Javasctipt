function process(){
    let i =0;
    function innerFunction(){
        i += 1;
        return i;
    }
    return innerFunction; // we are not calling the function, we are just returnig it
}

let res = process(); // this calls the function, which returns another function.
console.log(res);
console.log("First time calling res", res());
console.log("Second time calling res", res());
console.log("Third time calling res", res());
