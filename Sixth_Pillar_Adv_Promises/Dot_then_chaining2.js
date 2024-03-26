Promise.resolve("foo")
.then((string) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            string += "bar";
            res(string);
        }, 10000);
    });
})
.then((string) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            string += "baz";
            console.log(string);
            
        }, 1);
        return string;
    });
})
.then((string) => {
    console.log(string);
});
