//12.Write a program to iterate over an array of numbers and print only the even ones.

const arr = [1,2,3,4,5,6,7,8,9]
let arr1 = []
for (let element of arr){
    if (element%2===0){
        arr1.push(element);
    }
}
console.log(arr1);