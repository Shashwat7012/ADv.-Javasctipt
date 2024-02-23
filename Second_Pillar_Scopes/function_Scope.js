// //  var supported as global or functional scoping;
// function fun(){
// var i = 10; // not accessible outside
// console.log(i);
    
// }
// fun();
// // console.log(i);


if(false){
    var x = 10;
}
console.log(x); // accessible bcz it will treat as global

function fun(){
    console.log(y); // It will accessible here
    var y = 10;// not accessible outside when inside a function 
    // var will accessible anywhere in the function.
}

function gun(){
    console.log(z); // but let is not accessible
    // var y = 10;
    let z  = 10;
    
}
console.log(z);
gun();