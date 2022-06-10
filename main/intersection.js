function intersection(a=[],b=[]){
    if(a.length==0 && b.length==0){
        return [];
    }
    else{
       var newArr=[];
       for(let intersection of a){
          if(b.indexOf(intersection) !=-1){
            newArr.push(intersection);
          }
       }
    }
    return newArr
}
intersection(a=[12,23],b=[12,43])