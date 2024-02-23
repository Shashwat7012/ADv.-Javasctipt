// arrys as also a custom objects in JS
// index of the element is the key and element it self is value.


//function :- 1 :- MAP function :- higher order function available with array.
// It takes a function  as a argument
// it return an array in which every value is actually populated by calling
// function f is orginal array element as argument
// every element will be passed one by one in the argument function f. And then whatever the the output we populate in the array.
// Map internally iterates over the every element of the given original array pass that element in the argument function f and then store the returned value inside an array


// example

function sqaure(el){
    return el*el;
}

function cube(x){
    return x*x*x;
}

function even_Odd(x){
    if(x%2 == 0){
        return "even";
    }
    else{
        return "Odd";
    }
}

 const arr = [1,2,3,4,5];

//  it returns a new array
  const result = arr.map(sqaure);
  const cube_result = arr.map(cube);
  const even_odd = arr.map(even_Odd);

  console.log(result);
  console.log(cube_result);
  console.log(even_odd);
  console.log(arr);

  // when to use map :- 
  // when we have to store the result of each operations

const newArr = [9,8,7,6,5];
/*
If the function that we are passing in map takes two arguments
then first will accessing the actual value
second will accesing the index of the value
*/

function print(element,index){
    return `Element at index ${index} is ${element}`;
}

const result2 = newArr.map(print);
console.log(result2);


//this is how we create our own map
function custommapper(arr,func){
    let result = [];
    for(let i = 0;i<arr.length; i++){
        result.push(func(arr[i],i));
    }
    return result;

}

const value = custommapper(newArr,print);
console.log(value);
