let x = {
    name: "Shashwat",
    company: "Google",
    salary: 400000,
    age: 21,
    city: "Bengaluru",
    designation: "Software Engineer"
};

//help us to loop over the keys
for(const keys in x){
    console.log(keys);
}

//but we want to loop over the values

console.log("new line");
for(const keys in x){
    console.log(x[keys]);
}
