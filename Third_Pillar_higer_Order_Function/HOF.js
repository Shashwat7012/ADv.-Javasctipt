// higher order functions :- there are functions which take another function as arguments.


function f(x,fn){
    console.log(x);
    fn();
}

f(10, function exec(){
    console.log("I am an expression passed to a HOF");
})