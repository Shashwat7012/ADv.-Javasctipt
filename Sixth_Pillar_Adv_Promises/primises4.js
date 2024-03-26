//what if we call resolve 2 times 
// once we set the res or reject it can never be updated
//but if we have done this then it will not show any effect


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
                console.log("fulfilling");
                res(num);
                console.log("Completed resolving");
                res(10);
                console.log("Resolving again");
                return num;
            }
            else{
                console.log("Rejecting");
                rej(num);
                console.log("Completed Rejecting");
                return num;
            }
        },5000);

    })
}

let x = createPromisewithTimeOut();
console.log(x);
console.log("HII");

