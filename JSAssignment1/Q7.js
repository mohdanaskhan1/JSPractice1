//7. Use a switch statement to print the day of the week when given a number (1–7).

const num = Number(prompt("Enter number between 1 to 7 :- "));
switch (num) {
    case 1:
        console.log(num," : MONDAY");
        break;
    case 2:
        console.log(num," : TUESDAY");
        break;
    case 3:
        console.log(num," : WEDNESDAY");
        break;
    case 4:
        console.log(num, " : THURSDAY");
        break;
    case 5:
        console.log(num, " : FRIDAY");
        break;
    case 6:
        console.log(num," : SATURDAY");
        break;
    case 7:
        console.log(num," : SUNDAY");
        break;
    default:
        console.log("Enter a valid Number");
        break;
}