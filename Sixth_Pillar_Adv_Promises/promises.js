function getRandomINT(max){
    return Math.floor(Math.random() * max);
}

function createPromisewithTimeOut(){
    return new Promise(function executer(res,rej){
        // for(let i=0;i<1000000000;i++){

        // }
        setTimeout(function(){
            let num = getRandomINT(10);
            if(num%2 == 0){
                res(num);
            }
            else{
                rej(num);
            }
        },5000);

    })
}

let x = createPromisewithTimeOut();
console.log(x);
console.log("HII");

//fullfill

// Promise {<pending>}
// [[Prototype]]
// : 
// Promise
// catch
// : 
// ƒ catch()
// constructor
// : 
// ƒ Promise()
// finally
// : 
// ƒ finally()
// then
// : 
// ƒ then()
// Symbol(Symbol.toStringTag)
// : 
// "Promise"
// [[Prototype]]
// : 
// Object
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// 0

// Rejected


// Promise {<pending>}
// [[Prototype]]
// : 
// Promise
// catch
// : 
// ƒ catch()
// constructor
// : 
// ƒ Promise()
// finally
// : 
// ƒ finally()
// then
// : 
// ƒ then()
// Symbol(Symbol.toStringTag)
// : 
// "Promise"
// [[Prototype]]
// : 
// Object
// [[PromiseState]]
// : 
// "rejected"
// [[PromiseResult]]
// : 
// 5