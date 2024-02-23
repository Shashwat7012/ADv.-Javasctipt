function isPalindrome(str){
    str = "" + str;

    let n = str.length;
    let s= 0;
    let e = n-1;

    while(s<=e){
        if(str[s] === str[e]){
            s++;
            e--;
        }
        else{
            return false;
        }

        return true;
    }
}

let str = "ShahS";
if(isPalindrome(str)){
    console.log("Yes, It is a palindrome");
}
else{
    console.log("No, It is not");
}