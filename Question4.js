function substr(str){
    for(let i=0; i<str.length; i++){
        let subStr = "";
        for(let j=i; j<str.length; j++){
            subStr += str.charAt(j);
            console.log(subStr+" ");

        }
    }
}

substr("dog");