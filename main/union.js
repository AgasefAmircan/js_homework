function union(a=[],b=[]){
    if(a.length==0 && b.length==0){
        return [];
    }
    else{
        var newArr=a.concat(...b);
    }
    return newArr;

}
union([1,23,4,5],[6,7,8,9])