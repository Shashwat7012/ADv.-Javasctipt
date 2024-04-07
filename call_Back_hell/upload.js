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

// writes the given data 
function writeFile(data,cb){
    console.log("Started writing a file with ", data);
    setTimeout(function write(){
        console.log("Completed writing the data in a file");
        const filename = "file.txt";
        cb(filename);
    },5000)
}

// uploads the file
function upload(url,file,cb){
    console.log("Started uploading ", file, "on", url)
    setTimeout(function up(){
        console.log("upload completed");
        const response = "success";
        cb(response);
    },2000);
}

download("www.xyz.com", function process(content){
    console.log("we are now going to process the downloaded data");
    writeFile(content,function processWrite(filename){
        console.log("We have downloaded and written the file, now will upload");
        upload("www.upload.com",filename, function processUpload(response){
            console.log("we have uploaded with",response);
        });
    });
});