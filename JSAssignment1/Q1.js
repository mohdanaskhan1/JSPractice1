//1. Write a program to add, subtract, multiply, and divide two numbers entered by
// the user.

const num1 = Number(prompt("Enter First Number : "));
const num2 = Number(prompt("Enter Second Number : "));



const add = (num1,num2)=>num1+num2;
const sub = (num1,num2)=>{
    if (num1>num2){
        return num1-num2;
    }
    else{
        return "num1 is less than num2"
    }
}
const mul = (num1,num2)=>num1*num2;
const div = (num1,num2)=> {
    if (num2===0){
        return "Denominator cant be 0";
    }
    else{
        return num1/num2;
    }
}
console.log(add(num1,num2),
sub(num1,num2),
mul(num1,num2),
div(num1,num2));

