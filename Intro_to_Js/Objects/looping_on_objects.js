let x = {
    name: "Shashwat",
    company: "Google",
    salary: 400000,
    age:21,
    city: "Bengaluru",
    designation: "Software Engineer"
};

// console.log(x);

// if we want only keys
//there is function :- Object.keys

let keysOfx = Object.keys(x); // return array of the keys of x
console.log(keysOfx);

//acess of all values
let valueOfx = Object.values(x); // return array of the values of x
console.log(valueOfx);

//acess of both
let entries = Object.entries(x); // return array of arrays of the key value pair.
console.log(entries);

