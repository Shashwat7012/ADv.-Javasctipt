function download(url,cb){
    // download content from the given url and passed the 
    // doenloaded content to the given callback cb
    console.log("Starting to download from given url",url);
    setTimeout(function down(){
        console.log("Downloading completed");
        const content = "STRING";
        cb(content);
    },4000);
}



download("www.xyz.com",function process(cont){
    console.log("Downloaded data is", cont);
})

// if s