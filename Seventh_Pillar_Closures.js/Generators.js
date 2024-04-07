//declarative :- allways
function* fetchNextElement(){ // generator function
    console.log("I'm inside a generator function");
    yield 1;
    yield 2;
    console.log("Somewhere in the middle");
    yield 3;
    // return 10; // when we hit return the function end here
    yield 4;

}

const iter = fetchNextElement();

console.log("1st",iter.next());
console.log("2nd",iter.next());
console.log("3rd",iter.next());
console.log("4th",iter.next());
console.log("5th",iter.next());
console.log("6th",iter.next());
