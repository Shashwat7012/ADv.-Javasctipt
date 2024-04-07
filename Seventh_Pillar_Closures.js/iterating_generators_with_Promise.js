function download(url){
    return new Promise(function exec(res,rej){
    console.log("Starting to download from given url",url);
    setTimeout(function down(){
        console.log("Downloading completed");
        const content = "STRING";
        // cb(content);
        res(content);
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

function doAfterRecieving(value){
    
let future = iter.next(value);
console.log("future is ",future)
if(future.done) return;
 future.value.then(doAfterRecieving);
}

function* steps(){
    const downloadedData = yield download("www.xyz.com");
    console.log("Data downloaded is", downloadedData);
    const fileWritten = yield writeFile(downloadedData);
    console.log("file written is ", fileWritten);
    const uploadResponse = yield uploadData(fileWritten,'www.drive.google.com');
    console.log("Upload Responses",uploadResponse);
    return uploadResponse;
}

const iter = steps();
const future = iter.next();
future.value.then(doAfterRecieving);