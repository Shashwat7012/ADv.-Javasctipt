function solve(a,b,c){
    let sqrValue = Math.sqrt(b*b - 4*a*c);
    let root1 = (-b + sqrValue)/2*a;
    let root2 = (b - sqrValue)/2*a;
    console.log(root1,root2);
     
}
solve(2,5,3);