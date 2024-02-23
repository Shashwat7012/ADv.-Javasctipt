function timeconsimungloop(){
    console.log("Loop starts");

    for(let i=0;i<1000000000;i++){
        //some task
    }
    console.log("Loop ends")
}

function timeconsimungloopbyruntime(){
    console.log("Strating timer");

    setTimeout(function exec(){
        console.log("Timer completed");
    },500);
}

console.log("HII");

timeconsimungloop();
timeconsimungloopbyruntime();
timeconsimungloop();

console.log("BYE");
