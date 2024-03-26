function getRandomINT(max){
    return Math.floor(Math.random() * max);
}

function createPromisewithTimeOut(){
    return new Promise(function executer(res, rej){
        console.log("Entering the executer callback in the promise constructor");

        setTimeout(function(){
            let num = getRandomINT(10);
            if(num % 2 === 0){
                res(num);
            } else {
                rej(num);
            }
        }, 1000);
        console.log("Exiting the executor callback in the promise constructor");
    });
}

console.log("Starting....");
const p = createPromisewithTimeOut();
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like..",p);
console.log("Going to register my 1st set of handlers");

p.then(
    function fullfillHandler1(value) {
        console.log("Inside fulfillment handler 1 with value", value);
        console.log("Promise after fullfilment is", p);
        setTimeout(function t(){console.log("Ended in 0s timer")},0);
        console.log("Exiting the fullfill handler 1");
    },
    function rejectionHandler1(value) {
        console.log("Inside rejection handler 1 with value", value);
        console.log("Promise after rejection is", p);
        setTimeout(function t(){console.log("Ended in 0s timer")},0);
        console.log("Exiting the rejection handler 1");

    }
);

console.log("Going to register my 2st set of handlers");
p.then(
    function fullfillHandler2(value) {
        console.log("Inside fulfillment handler 2 with value", value);
        console.log("Promise after fullfilment is", p)
    },
    function rejectionHandler2(value) {
        console.log("Inside rejection handler  2 with value", value);
        console.log("Promise after rejection is", p)

    }
);

console.log("Ending....");

// for(let i=0;i<1000000000;i++){}
// console.log("Ending the loop");
setTimeout(function(){console.log("Global timer of 0s")},1000);
