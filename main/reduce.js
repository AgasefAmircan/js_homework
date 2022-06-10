function reduce(arr=[],func){
    let newValue=0;
        for (var i in arr) {
           newValue+=arr[i];
        }
        return newValue;
}