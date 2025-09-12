//10.Write a program using if-else that determines the largest of three numbers.

n1 = Number(prompt("Enter 1st No :- "));
n2 = Number(prompt("Enter 2nd No :- "));
n3 = Number(prompt("Enter 3rd No :- "));

if (n1>n2){
    if (n1>n3){
        console.log(`${n1} is Largest`);
    }
    else{
        console.log(`${n3} is Largest`);
    }
}
else{
    if (n2>n3){
        console.log(`${n2} is Largest`);
    }
    else{
        console.log(`${n3} is Largest`);
    }
}

