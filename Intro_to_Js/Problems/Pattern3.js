function uppertriangle(n){

for(let i=1;i<=n;i++){
    let stars = "";
let spaces = n-i;

    for(let j=1;j<=spaces;j++){
        stars += " ";
    }
   let str = 2*i-1;
    for(let k=1;k<=str;k++){
        stars += "*";
    }
    console.log(stars);
}

}
function lowertriangle(n){
    for(let i=1;i<=n-1; i++){
        let spaces = i;
        let stars = "";
        for( let j=1;j<=spaces;j++){
            stars += " ";
        }
        let str = 2*(n-i)-1;
        for(let k=1; k<=str; k++){
            stars += "*";
        }
        console.log(stars);
    }
}
// uppertriangle(4);
// lowertriangle(4);

//diamond shape triangle

// n = 3
//      *
//    * * *
//  * * * * *
//    * * *
//      * 

function pattern(n){
    uppertriangle(n);
    lowertriangle(n);
}

pattern(5);