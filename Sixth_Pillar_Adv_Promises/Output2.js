function fetchData(url){
    return new Promise(function(res,rej){
        console.log("Started downloading the form", url);
        setTimeout(function processDownloading(){
            let data  = "Dummy data";
            console.log("Download completed");
            res(data);
            console.log("Download Completed");
        },7000);
    });
}

console.log("Start");
let promiseObj = fetchData("shashwat");
promiseObj.then(function A(value){
    console.log("value is", value);
})

console.log("end");