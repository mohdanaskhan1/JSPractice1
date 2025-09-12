//3. Use the modulus operator % to check if a number is even or odd.

const num = Number(prompt("Enter the Number :- "));
const check = (num) => {
    if (num % 2 === 0){
        return `${num} is Even`;
    }
    if (num % 2 !== 0){
        return `${num} is Even`;
    }
    else if (num===0){
        return `${num} is Zero (Cant Check)`;
    }
    else{
        return `Enter a Valid Number`;
    }
}
console.log(check(num));