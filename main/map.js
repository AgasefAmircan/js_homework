function map(arr = [], func) {
    let newArr = [];
    for (let elem of arr) {
        let result = func(elem);
        newArr.push(result);
    }
    return newArr;
}