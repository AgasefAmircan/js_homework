function filter(arr = [], func) {
    let newArr = [];
    for (let elem of arr) {
        let result = func(elem);
        if (result) {
            newArr.push(result);
        }
    }
    return newArr;
}