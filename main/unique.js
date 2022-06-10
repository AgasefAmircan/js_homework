function unique(arr) {
    var a = [];
    for (let b of arr) {
        if (a.indexOf(b) == -1) {
            a.push(b);
        }
    }
    return a;
}
// unique([1, 2, 3, 4, 4, 3, 2, 1, 2, 3, 4])