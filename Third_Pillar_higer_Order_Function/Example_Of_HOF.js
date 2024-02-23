let arr = [1,10,9,100,11,12,3,1,2]; //unsorted arr

arr.sort();//sorts the given array 
// It will do lexographical order
// means according to ascii value
/*
0 - a
1 - b 
2 - c
3 - d
4 - e
5 - f
6 - g
7 - h
8 - i
9 - j
10 - k

[b,ba,j,baa..] // like that
//according to dectionary
[b,baa,baa,c] // like that
*/

console.log(arr);

//comparator function
//sort is HOF. It will take another function as a  argument.
let b = [1,2,5,9,7,6,5];

b.sort(function(a,b){
return a-b; // if a<b -> a-b is is negetive -> cmp function is negetive then a is placed before b.
// if result is positive then b will bfore a.
});

console.log(b);