let x = -0;
console.log(0 === x);
console.log(0 === 0);

//how to check that is that -0 or not
// function :- Object.is
console.log(Object.is(x,-0));
console.log(Object.is(x,0));

// functionn :- Math.sign :- it will give us sign
console.log(Math.sign(-3));
console.log(Math.sign(2));

console.log(Math.sign(-0));
// can we write a custom function that can give us sign of a number






