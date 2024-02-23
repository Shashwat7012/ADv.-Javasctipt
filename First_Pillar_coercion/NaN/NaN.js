console.log(Number("123"));
console.log(Number("abc"));//NaN
console.log(Number("0xa"));//hexadecimaml

let x = NaN;

console.log(x === NaN);
// we cannot check NaN from that because we see NaN we return false either it is [(x) === (y)] x or y

// so there is function available in it.
//isNaN
console.log(isNaN(x));


console.log(isNaN("Shashwat"));// isNaN converts the incoming input to number
// for that
console.log(Number.isNaN("Shashwat"));//bcz it will not use coersion.





