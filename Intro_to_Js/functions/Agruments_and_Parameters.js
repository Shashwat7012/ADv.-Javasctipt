function add(x,y){//x and y :- parameters
    let a = x+y;
    return a;

}
let a = 10;
let b = 20;
let c = add(a,30);// a and 30 are :- agruments
console.log(c);

//here we are passsing 9,11 inside console.log, then add(9,11) will be passed
//so add(9,11) returns something. one the value processed then console.log will print value

console.log(9,11);

// if we passed one more then it will process 2
console.log(add(11,11,11));