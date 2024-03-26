function createPromise(){
    return new Promise(function execute(res,rej){
        let x = setTimeout(function giveValue(){
            return 2;
        },3000);
        if(x%2==0){
            res("Successfull");
        }
        else{
            rej("rejected");
        }
    })
}

y = createPromise();
// in browser