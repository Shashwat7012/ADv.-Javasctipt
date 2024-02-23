let x = {
    name: "Shashwat",
    company: "Google",
    salary: 400000,
    age: 21,
    city: "Bengaluru",
    designation: "Software Engineer"
};

//loop over an object
for (const entry of Object.entries(x)) {
    console.log(entry);
}
