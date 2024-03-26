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
                res(num,10,20,30);// doesn't matter the next arguments after the first.
                
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

