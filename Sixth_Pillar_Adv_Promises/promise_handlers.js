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
        }, 5000);
        console.log("Exiting the executor callback in the promise constructor");
    });
}

console.log("Starting....");
const p = createPromisewithTimeOut();
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like..",p);

p.then(
    function fullfillHandler(value) {
        console.log("Inside fulfillment handler with value", value);
        console.log("Promise after fullfilment is", p)
    },
    function rejectionHandler(value) {
        console.log("Inside rejection handler with value", value);
        console.log("Promise after rejection is", p)

    }
);
