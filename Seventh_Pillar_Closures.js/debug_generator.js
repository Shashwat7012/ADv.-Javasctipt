function* getNextElement(){
    const x = 10;
    console.log("inside the G-fuction")
    yield 11;
    console.log("entring after the yeild");
    const y = x + (yield 30);
    console.log("Value of Y is", y);
}

console.log("Start");
const iter = getNextElement();
console.log('called generator');
console.log(iter.next());

console.log(iter.next());
console.log(iter.next(13));
