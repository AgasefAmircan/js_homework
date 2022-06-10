function reverse(arr=[]){
    if(arr.length==0){
        return [];
    }
    else if(arr.length==1){
        return arr;
    }
    else{
        var newArr=arr.reverse();
    }
    return newArr;
}


// function reverse(arr=[]){
//     if(arr.length==0) return [];
//     else var newArr=arr.reverse();
//     return newArr;
// }