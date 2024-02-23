// butterfly

function compo1(n){
    let row = (n-1)/2;
for(let i=1;i<=row;i++){
    let stars = "";
    
    //first stars
    let leftStars = i;
    for(let j=1;j<=leftStars;j++){
        stars += "*";
    }
    //spaces
    let spaces = n-2*i;
    for(let k=1;k<=spaces;k++){
        stars += " ";
    }
    //stars
    let rightStars = i;
    for(let m=1;m<=rightStars;m++){
        stars += "*";
    }

    console.log(stars);

}

}


function compo2(n) {
    let stars = "";
    for (let i = 1; i <= n; i++) {
        stars += "*";
    }
    console.log(stars);
}

function compo3(n) {
    let row = (n - 1) / 2;
    for (let i = 1; i <= row; i++) {
        let stars = "";

        // left stars
        let leftStars = row - i + 1;
        for (let j = 1; j <= leftStars; j++) {
            stars += "*";
        }
        // spaces
        let spaces = 2 * i - 1;
        for (let k = 1; k <= spaces; k++) {
            stars += " ";
        }
        // spaces
        let rightStars = row - i + 1;
        for (let m = 1; m <= rightStars; m++) {
            stars += "*";
        }
        console.log(stars);
    }
}

function pattern(n) {
    compo1(n);
    compo2(n);
    compo3(n);
}

pattern(9);
