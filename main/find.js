function find(arr = [], func) {
    let newArr = [];
    for (let elem of arr) {
        let result = func(elem);
        if (result) {
            return elem;
        }
    }
}