// it is a HOF
// filter also iterate over the array of element
// spl. thiing = argument function f which we have to pass inside a filter should always return a boolean otherwise output will be converted to a boolean.
// loops over the element and passes that element in the argument function and then if the output
//of this function call is true then it stores the original element in a new array otherwise doesn't add this add element to the array.

function oddEven(x){
    return (x %2 == 0); //return a boolean
}

let arr = [1,2,3,4,5,6];
const result = arr.filter(oddEven);
console.log(result);

