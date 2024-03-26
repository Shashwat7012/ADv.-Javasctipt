function createPromise(){
    return new Promise(function exec(res,rej){
        console.log("Resolving the promise");
        res("Done");
    });
}

setTimeout(function process(){
    console.log("Timer Completed");
},0);

let p = createPromise();
p.then(function fullfillHandler1(value){
    console.log("fulfilled 1 with a value ",value)
}, function rejectionHandler1(){});

p.then(function fullfillHandler2(value){
    console.log("fulfilled 2 with a value ",value)
}, function rejectionHandler2(){});

p.then(function fullfillHandler3(value){
    console.log("fulfilled 3 with a value ",value)
}, function rejectionHandler3(){});

for(let i=0; i<100000000;i++){}
console.log("ending");