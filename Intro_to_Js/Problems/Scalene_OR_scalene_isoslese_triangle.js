let a = 30;
let b = 30;
let c = 30;

if(a==b && b ==c && a==c){
    console.log("Equilateral traingle");
}
else if(a==b || b==c || a==c){
    console.log("isoslese triangle");
}
else{
    console.log("scalene triangle");
}