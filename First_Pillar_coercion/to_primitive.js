let obj = {};

console.log(10 - obj); //obj.value of -> object, to string -> [object object]

let obj1 = {x:9, valueOf() {return 99}};
console.log(100 - obj1);

let obj3 = {x:6, toString() { return "88"}};
console.log(100 - obj3);