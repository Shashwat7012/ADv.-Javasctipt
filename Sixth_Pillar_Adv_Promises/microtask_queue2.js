function createPromise() {
    return new Promise(function exec(res, rej) {
        setTimeout(function () {
            console.log("Resolving the promise");
            rej(" :- fething error");
        }, 1000);
    });
}

let p = createPromise();

p.then(
    function fulfillmentHandler1(value) {
        console.log("fulfilled 1 with a value ", value);
    },
    function rejectionHandler1(reason) {
        console.log("Rejected 1 with a reason ", reason);
    }
);

p.then(
    function fulfillmentHandler2(value) {
        console.log("fulfilled 2 with a value ", value);
    },
    function rejectionHandler2(reason) {
        console.log("Rejected 2 with a reason ", reason);
    }
);

p.catch(function (reason) {
    console.log("Unhandled rejection caught with reason ", reason);
});

for (let i = 0; i < 1000000000; i++) {}
console.log("ending");
