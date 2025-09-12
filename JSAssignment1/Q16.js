// 16.Use reduce() to find the sum of all numbers in an array.

arr = [1,2,3,4,5,6,7,8,9,10]
const sum = arr.reduce(((total,element)=> total+element),0);
console.log(sum);
