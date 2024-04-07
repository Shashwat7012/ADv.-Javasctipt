//catching the error
function download(url){
    return new Promise(function exec(res,rej){
    console.log("Starting to download from given url",url);
    setTimeout(function down(){
        console.log("Downloading completed");
        const content = "STRING";
        // cb(content);
        rej(content);
    },4000);
    })
}

function writeFile(data){
    return new Promise(function exec(res,rej){
        console.log("Started writing a file with ", data);
        setTimeout(function write(){
            console.log("Completed writing the data in a file");
            const filename = "file.txt";
            // cb(filename);
            res(filename);
        },5000)
    })
}

function uploadData(url,file,cb){
    return new Promise(function exec(res,rej){
        console.log("Started uploading ", file, "on", url);
    setTimeout(function up(){
        console.log("upload completed");
        const response = "success";
        res(response);
    },2000);
    })
}

download("www.xyz.com")
.then(function processDownload(value){
    console.log("downloading done with following value", value);
    return writeFile(value);
})
.then(function processWrite(value){
    console.log("data written in the file name", value);
    return uploadData(value,"www.upload.com");
})
.then(function processUpload(value){
    console.log("We have uploaded with ", value);
})

.catch(function f(err){
    console.log("catching err ",err);
}) // if no error then .finally will work and execute in it.

.finally(function final()){
    console.log("executing finally");
}