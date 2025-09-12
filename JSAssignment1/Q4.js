//4. Write a program using logical operators to check if a number lies between 10
// and 50

const num = Number(prompt("Enter a Number :- "));
const check = (num) => {
    if (num >10 && num < 50){
        return `Yes, ${num} lies between 10 and 50`;
    }
    else{
        return `No, ${num} not lies between 10 and 50`;
    }
}
console.log(check(num));

