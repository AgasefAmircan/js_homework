function sum(nums=[]){
    let sum=0;
    for(let num of nums){
        sum+=num;
    }
    return sum;
}

// function sum(nums=[]){
//   return nums.reduce((a,b) => a+b)
// }
// sum([1,3,4,56,7])