function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function swapp(arr){
    let n = arr.length;
    let  i = 0;
    let j = n-1;
    while(i<=j){
        if(arr[i] === 1 && arr[j] === 0){
            swap(arr,i,j);
            i++;
            j--;
        }
        if(arr[i] === 0){
            i++;
        }
        if(arr[j] === 1){
            j--;
        }
    }
    
}

let arr = [1,0,1,1,1,0,0];
swapp(arr);
console.log(arr);