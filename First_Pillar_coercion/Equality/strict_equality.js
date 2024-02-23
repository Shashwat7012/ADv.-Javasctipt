console.log(NaN === NaN)
//It is only in js which is not equal to itself
console.log(0 === -0);


let obj = {x:10,valueOf(){return 100;}}
console.log(99 == obj);
console.log(100 == obj);

// console.log(typeof(null));
console.log("comparing objects");
let obj1  = {x:10};
let obj2 =  {y:10};
let obj3  = {z:10};
let obj4  = {x:10};
console.log(obj1 === obj4);
console.log(obj2 === obj1);
console.log(obj3 === obj4);
console.log(obj2 === obj3);
console.log(obj4 === obj4);


