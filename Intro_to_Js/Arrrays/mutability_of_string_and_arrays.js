// arrays are mutable. string are not
let str = "Shashwat";
str[0] = 'b';
console.log(str); // string are immutable

let arr = [1,2,3,4,5,5];
arr[4] = 121;
console.log(arr); // arrays are mutable