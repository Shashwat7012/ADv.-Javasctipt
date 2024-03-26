console.log("Start of the file");

setTimeout(function timer1(){
    console.log("Timer1 done");
},0);

for(let i =0;i<1000000000;i++){
    // logic
}

let x = Promise.resolve("Yes, Promise");
x.then(function processPromise(value){
    console.log("Promise ?",value);
});

setTimeout(function timer2(){
    console.log("Timer 2 done");
},0);

console.log("End of file");