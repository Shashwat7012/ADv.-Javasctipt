// Promise.all
// for multiple downloading



function download(url,time){
    return new Promise(function exec(res,rej){
    console.log("Starting to download from given url",url);
    setTimeout(function down(){
        console.log("Downloading completed");
        const content = "STRING";
        // cb(content);
        if(time > 3000){
            rej(content);
        }
        res(content);
    },time);
    })
}

const p1 = download("www.avb1.com",5000);
const p2 = download("www.avb2.com",1000);
const p3 = download("www.avb3.com",2000);
//parallel starting of all
Promise.all([p1,p2,p3]).then(function fullfillhander(values){
    console.log(values);
})
