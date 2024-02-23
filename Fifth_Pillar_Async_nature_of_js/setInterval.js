x = setInterval(() => {
    console.log("Another one");
}, 1000);

y = setInterval(()=>{
    console.log("Same");
},500);

console.log(x);
clearInterval(x); // stop this