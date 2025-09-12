// 6. Write a program that checks whether a given year is a leap year using if-else

const year = Number(prompt("Enter the Year : - "));
const check = (year) => {
    if (year % 400 ===0){
        return `${year} is a Leap Year`;
    }
    else if (year % 400 !== 0){
        return `${year} is NOT a Leap Year`;
    }
    else{
        return `Enter a Valid Year`;
    }
}
console.log(check(year));
