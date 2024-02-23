// // let a = "s";
// // let b = null;
// // let c = a+b;
// // console.log(c);
// function pattern(n){
//     for(let i =1;i<=n;i++){
//         let str = "";
//         let spaces = n-i;
//         //spaces
//         for(let j=1;j<=spaces;j++){
            
//              str += " ";
//         }
//         //stars
//         let stars = i;
//         for(let col = 1; col<=stars; col++){
//             str += "*";
//         }
       
//         console.log(str);
//     }
    
// }

// pattern(8);
// // pattern(2);

function pattern(n){
    for(let i=0; i<=n; i++){
        let str = "";
        let spaces = n-i;
        //spaces
        for(j=1;j<=spaces;j++){
            str += " ";
        }
        //stars
        let stars = 2*i -1;
        for(col = 1;col<=stars;col++){
            str += "*";
        }
        console.log(str);
    }

    
}

pattern(5);