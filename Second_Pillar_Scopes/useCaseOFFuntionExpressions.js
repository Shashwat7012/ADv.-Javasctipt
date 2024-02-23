function fun(fn){
    console.log("Welcome");
    fn();
}

fun(function asking(){
    console.log("Bye");
    console.trace();
})

//same but those who have name then it will be more understanding.
// [1,2,3,4,5];