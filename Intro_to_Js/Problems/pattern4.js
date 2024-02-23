function pattern(n){
for(let i=1;i<n;i++){
    let str = "";
    let spaces = n-i;
    //spaces
    for(let j=1;j<=spaces;j++){
        str += " ";
    }
    //numbers
    let counter = 1;
    for(let k = 1;k<=i;k++){
        str += counter;
        counter++;
    }
    let counter2 = i-1;
    for(let m =1;m<=counter2;m++){
        str += counter2;
        counter2--;
    }
    console.log(str);
}
}

pattern(5);