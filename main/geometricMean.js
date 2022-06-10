function geometricMean(nums = []) {
    let sum = 0;
    for (let num of nums) {
        sum *= num;
    }
    return sum ** 1 / nums.length
}