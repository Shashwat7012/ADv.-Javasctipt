function Do(task){ //local to do task
    console.log("Executing Do function");
    setTimeout(function exec(){ //during the scope resolution :- already realised that task is going to come
        // from the local scope of Do. exec function will be in the memory and comeback in callback queue
        
// closures :- function remember its lexical scope even when the function executed outside the lexical scope.

        console.log(task);
        console.log("executing outside box of DO Function and that is :- Closures");
        // it is not snapshot.
        // it is editable.
    },2000);
}
Do("HII");
console.log("end");