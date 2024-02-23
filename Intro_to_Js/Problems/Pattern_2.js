function pattern(n){
    
    for(let i=1;i<=n;i++){
        let star = "";
        for(let j=1;j<=n-i+1;j++){
            star += "*";
        }
        console.log(star);
    }
}

pattern(5);

// *****
// ****
// *** 
// **  
// *