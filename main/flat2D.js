function flat2D(a = [[], []]) {
    if (a[0].length == 0 && a[1].length == 0) {
        return [];
    }
    else if (a[0].length != 0 && a[1].length == 0) {
        return a[0];
    }
    else if (a[0].length == 0 && a[1].length != 0) {
        return a[1];
    }
    else {
        var newArr = a[0].concat(a[1]);
    }
    return newArr;
}
flat2D([[1, 23, 4, 5], [6, 7, 8, 9]])