let arr = [1,10,1000,9,3,2];

arr.sort(function cmp(a,b){
    return a - b;
});

console.log(arr);