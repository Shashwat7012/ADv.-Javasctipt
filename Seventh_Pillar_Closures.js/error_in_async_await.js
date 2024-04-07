// try catch
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



 async function steps(){
    try {
        console.log("staring steps");
        const downloadedData = await download("www.xyz.com");
        return downloadedData;
        
    } catch (error) {
        console.log(" handled error ",error);
    } finally{
        console.log("ending");
    }
  
}

steps();
