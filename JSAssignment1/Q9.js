//9. Use a while loop to calculate the factorial of a number.

const num = Number(prompt("Enter a Number :- "));
let i = 1;
let fact = 1;
while (i<=num){
    fact*=i;
    i++;
}

console.log(`Factorial of ${num} is ${fact}`);