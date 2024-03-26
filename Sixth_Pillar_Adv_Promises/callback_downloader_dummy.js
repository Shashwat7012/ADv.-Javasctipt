function download(url,cb){
    console.log("started downloading from url",url)
        setTimeout(function exec(){
            console.log("Completed downloading after 5s");
            const content = "ABCDEF";
            cb(content);
            // if we call our callback twice
            cb(); // so thats why we use promises :- Inversion of controll.
        },5000)
}

download("www.xyz.com",function processDownload(data){
    console.log("download data is",data);
});