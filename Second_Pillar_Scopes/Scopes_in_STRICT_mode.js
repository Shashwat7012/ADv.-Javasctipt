"use strict";

var frnd = "shashwat";

function fun(){
    var frnd = "rakesh";
    content = "JS";
    console.log(frnd);
}

function gun(){
    var frnd1 = "rishabh";
    console.log(frnd1);
}
// if we call it before
// console.log(content); // It comes before the execution of fun.//when fun() is called then it will convert to global.


console.log(frnd);
fun();
gun();
console.log(content); // mechanism of autoglobal
//It stops the creation of autoglobal :- strict