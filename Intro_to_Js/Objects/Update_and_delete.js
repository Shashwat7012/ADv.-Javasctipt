let x = {
    name: "Shashwat",
    age: 20,
    marks: 49
};

//using "" 

console.log(x["name"]);

//using .

console.log(x.age);

// objects are mutable
x.age = 21;
console.log(x.name, x.age);

// Add and remove key value pairs
x.marks = 50; // if marks key is present then it update otherwise it will add;
x.company = "Google";

console.log(x);

//Delete key value pair
// we can use delete operator

delete x.age;
console.log(x);
