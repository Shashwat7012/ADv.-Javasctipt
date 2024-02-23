function timeconsimungloop(){
    console.log("Loop starts");

    for(let i=0;i<1000000000;i++){
        //some task
    }
    console.log("Loop ends")
}

function timeconsimungloopbyruntime0(){
    console.log("Strating timer0");

    setTimeout(function exec0(){
        console.log("Timer completed0");
        for(let i=0;i<10000000;i++);
    },5000);
}

function timeconsimungloopbyruntime1(){
    console.log("Strating timer1");

    setTimeout(function exec1(){
        console.log("Timer completed1");
    },0);
}

function timeconsimungloopbyruntime2(){
    console.log("Strating timer2");

    setTimeout(function exec2(){
        console.log("Timer completed2");
    },200);
}

console.log("HII");

timeconsimungloop();
timeconsimungloopbyruntime0();
timeconsimungloopbyruntime1();
timeconsimungloopbyruntime2();
timeconsimungloop();

console.log("BYE");
