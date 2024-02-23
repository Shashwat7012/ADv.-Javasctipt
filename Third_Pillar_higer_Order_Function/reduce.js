// It is HOF
//also takes a function f as a argument
// It one by one goes to evry element of array,
//say the current element is arr[i];
// It will pass the element to the function f and accumalate the result of futher function calls with this particular result.

const arr = [1,2,3,4,5,6];

function sum(prevResult, currValue){
    console.log(prevResult,currValue);
return prevResult + currValue;
}

const result = arr.reduce(sum);
console.log(result);

function addprices(prev,curr){
    console.log(prev,curr);
    let newPrice =  prev.price + curr.price;
    return {price : newPrice};
}

let cart = [{price : 100000,name: "Iphone"}, {price : 500, name: 'backcover'}];
const totalPrice = cart.reduce(addprices);

console.log(totalPrice.price);