function download(url){
    console.log("started downloading content from ",url);
    return new Promise(function exec(res,rej){
        setTimeout(function p(){
            console.log("completed downloading data in 5s");
            const content = "ABCDEF";
            res(content);
        },5000)
    })
}

x = download("www.xyz.com");
//promise chaining
x
.then(function fullfillHandler1(value){
    console.log("Content downloaded is1 ",value);
    return "New Promise string"; // next one will undefined , if we comment out this.
    
},
function rejectionHandler1(value){
    console.log("rejected with ",value);
}
)

.then(function fullfillHandler2(value){
    console.log("Content downloaded is2 ",value); // whatever we return from chained dot_then , that value is going to be the fullfilled value for chained promise.

});