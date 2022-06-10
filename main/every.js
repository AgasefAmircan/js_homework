function every(arr = [], func) {
    let isTrue = true;
    for (let elem of arr) {
        let result = func(elem);
        if (!result) {
            isTrue = false;
        }
    }
    return isTrue;
}