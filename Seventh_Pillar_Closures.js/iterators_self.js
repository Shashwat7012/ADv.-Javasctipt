function fetchNextElement(array) {
    let idx = 0;
    function next() {
        if (idx == array.length) {
            return {value: undefined, done:true};
        }
        const nextElement = array[idx];
        idx++;
            return {value: nextElement, done:true};
          
    }
    // return next;
    // returning a next object
    return {next};

}

//somewhere we consume it...
const automaticFetcher = fetchNextElement([99,11,12,14,0,1,2,3,4]);

//declarative programming
// console.log(automaticFetcher());
// console.log(automaticFetcher());
// console.log(automaticFetcher());
// console.log(automaticFetcher());

console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
