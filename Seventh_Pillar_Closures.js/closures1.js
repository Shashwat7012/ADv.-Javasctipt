function process(){
    let i=0;
    let j = [1,2,3];
    let k = 10;
    function innerprocess(){
        i += 1;
        console.log(j);
        return i;
    }
    return innerprocess;
}

x = process();

obj = {func : x};
console.log(obj); // doensnt remember k