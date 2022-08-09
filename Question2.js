function upper(str){
    let arr = str.split(" ");
    let upperStr = "";
    for(let i=0; i<arr.length; i++){
        upperStr += arr[i][0].toUpperCase();
        upperStr += arr[i].slice(1);
        upperStr += " ";
    }

    return upperStr;
}

console.log(upper("the quick brown fox"));