//short hand property :- while we do not work with indexes. when we have to just print.

let arr = [10,11,14,120,-1];
for(const i of arr){
    console.log(i);
}

for(let i of arr){
    console.log(i);
}

for(var i of arr){
    console.log(i);
}

//
// String
let str = "Shashwat";
for(let i of str){
    console.log(i);
}