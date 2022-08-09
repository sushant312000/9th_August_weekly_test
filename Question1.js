//1. Write a function that reverse a number.

function rev(x){
    let num = String(x);
    let arr = num.split('');
    let i=0;
    let j=arr.length-1;
    while(i<=j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        i++;
        j--;
    }

    return arr.join('');
}

let ans = rev(32243);
console.log(ans);