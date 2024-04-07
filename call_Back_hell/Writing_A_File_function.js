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

function writeFile(data,cb){
    console.log("Started writing a file with ", data);
    setTimeout(function write(){
        console.log("Completed writing the data in a file");
        const filename = "file.txt";
        cb(filename);
    },5000)
}

// download("www.xyz.com",function process(cont){
//     console.log("Downloaded data is", cont);
// })

// if someone wants to write a file
writeFile("abcd",function process(name){
    console.log("file written with name",name);
})