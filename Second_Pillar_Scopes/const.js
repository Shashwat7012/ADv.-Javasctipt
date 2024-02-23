// we cannot reassign the value.but through the properties of an array and an object

// const x = 0;
// x = 9;
// console.log(x); // error

const obj = {x : 10};
obj.x = 9;
console.log(obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));
