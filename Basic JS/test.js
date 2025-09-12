

// console.log("Hello"); 

 
// var a = "Hi";
// console.log(a);

// // cameCase - COnvention
// // snake_case
// // firstName
// // _firstName
// // first$Name
// // $firstName


//  //declare const
//  const pi = 3.14;

//  //stringIndezing
//  let firstName = "  MohdAnas  ";
//  console.log(firstName.length);
//  //last index : length - 1
//  console.log(firstName[0]);

//  // to remove spaces front and back
// console.log(firstName.trim());
// // all character to upper case
// console.log(firstName.toUpperCase());
// // all character to lower case
// console.log(firstName.toLowerCase());
// //slicing
// console.log(firstName.slice(0,4));

// //typeof
// console.log( typeof firstName);
// //change no to string
// let b = 5;
// // b = b + "";
// // or
// let str = String(b)

// //change string to number
// // let c = +"34";
// // or
// let c = "34"
// let num = Number(c);

// // string concatenation
// let a1 = "17";
// let a2 = "10";
// let fullName = a1 + " " + a2;
// let add = +a1 + +a2;

// //template stringn
// let age = 22;
// let fname = "anas";
// // let desc = "My Name is "+fname+" "+"and My Age is "+age;
// let desc = `my name is ${fname} and my age is ${age}`;

// // undefined
// let fn;
// console.log(fn);
// fn = "Hi";

// //NULL
// let vari = null;
// console.log(typeof null); //OBJECT (Bug)

// // BigInt
// let myNumber = BigInt(123);
// let myNumber1 = 123n;
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// //Booleans & Comparison (Doesnt check datatype)
// // T/F

// // == vs ===
// console.log(7==7);
// console.log(7=="7" ); //doesnt check datatype
// console.log(7===7);
// console.log(7==="7"); //check datatype

// // != vs !==
// console.log(7!=7);
// console.log(7!="7"); //dosnt check
// console.log(7!==7);
// console.log(7!=="7"); //check datatype

// // trythy and falsy values
// //false
// //""
// //null
// //undefined
// //0

// //ternary operator
// let aage = 8;
// let drink  = (aage<=5)?"Coffee":"Milk";
// console.log(drink);

// //array
// let ar = ['item1','item2'];
// let ar1 = ar;
// ar.push('item3');
// console.log(ar);
// console.log(ar1);


// // let arr = [].concat(ar);
// // let arr= [...ar];

// //clone with concat\
// // let arr=[].concat(ar1,["item3","item4"]);
// let arr=ar.slice(0,0).concat(ar1, ["item4","item5"]);
// console.log(arr);
// console.log(ar.length);
// for (let i=0;i<arr.length;i++){
//     console.log(arr[i].toUpperCase());
// }


// //use of const for creating array
// const fruits = ["apple","mango"];
// fruits.push("Banana");
// console.log(fruits);


//for of loop in array
// for(let fruit of fruits){
//     console.log(fruit);
// }
// for(let index in fruits){
//     console.log(fruits[index]);
// }

//Array Destructuring
// let [var1, var2, ...var3]=ar;
// console.log(var1);
// console.log(var2);
// console.log(var3);


//OBJECTS

//real world data
//store key value pairs
//dont have index
//key by default in string
// const key="email";
// const person = {
//     name:'Harshit',
//     age:22 ,
//     "person hobbies":["guitar","singing"]
// };
// person[key]="person@gmail.com";
// console.log(person);
// console.log(person["name"]);
// console.log(person.age);
// console.log(person["person hobbies"]);
// console.log(person.person hobbies); ERROR
// dot vs bracket operator


//add key value pair to object
// person.gender='male';
// console.log(person); 

// for(let key in person){
//     console.log(`${key}: ${person[key]}`);
// }

// console.log(Object.keys(person));

// Computed Properties
// const key1 = "objkey1";
// const key2 = "objkey2";
// const value1 = "myvalue1";
// const value2 = "myvalue2";

//way1
// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

// console.log(obj);

//way2
// const obj = {};
// obj[key1]=value1;
// obj[key2]=value2;
// console.log(obj);

//SPREAD OPERATOR
// const array1 = [1,2,3];
// const array2 = [5,6,7];

// const newArray = [...array1, ...array2];
// console.log(newArray);


// SPREAD OPERATOR IN ARRAY

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2"
// };
// const obj2 = {
//     key1 : "valueUnique" ,
//     key3 : "value3",
//     key4 : "value4"
// };
// const newObj = { ...obj1 , ...obj2};
// console.log(newObj);
// const newObj1 = { ..."abc"};
// console.log(newObj1);
// const newObj2 = { ...["item1","item2"] };
// console.log(newObj2);

// OBJECT DESTRUCTURING
// const band = {
//     bandName : "value1",
//     famousSong : "value2",
//     year : 1998,
//     anotherSong : "value3"
// };
// const var1 = band.bandName;
// const var2 = band.famousSong;
// console.log(var1,var2);

//OR

// const {bandName:var1,famousSong:var2, ...restProps} = band;
// console.log(var1, var2, restProps);
// const are immutable and let can be changed


//OBJECTS INSIDE ARRAY
// const users = [
//     {userId :1, Name:"N1"},
//     {userId :2, Name:"N2"},
//     {userId :3, Name:"N3"}
// ]
// for(let user of users){
//     console.log(user.Name);
// }

//NESTED DESTRUCTURING
// const [user1, user2, user3]= users;
// console.log(user1);

// const [{Name : UName}, , {userId : UId}]= users;
// console.log(UName);
// console.log(UId);



//FUNCTIONS DECLARATION

// function sum2Nos(number1, number2){
//     return number1+number2;
// }
// console.log(sum2Nos(5,7));//Fun call, run, invoke

// function isEven(num){
//     return num % 2 === 0;
// }
// console.log(isEven(5));

// function firstCHar(anyString){
//     return anyString[0];
// }
// console.log(firstCHar("Hello"));

// function findTarget(array, target){
//     for (let i=0 ; i<array.length; i++){
//         if (array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myArr = [1,2,3,4,5];
// console.log(findTarget(myArr,8));


// function Expression
// function sing(){
//     return "Hi";
// }
// console.log(sing());

// const sing1 = function(){
//     return "Hi";
// }
// console.log(sing1());


//ARROW FUNCTIONS

// const sing = () => {
//     console.log("HBD");
// }
// sing();
// //short function or callbacks


// const isEven = num => num % 2 === 0;

// console.log(isEven(5));


//HOISTING
//process of moving variable and function declarations to the top of their scope during the compilation phase before code execution

// hello();

// function hello(){
//     console.log("HI");
// }

// var undefine
//let const - ERROR Reference Error

//FUNCTION INSIDE FUNCTION
// const app =() =>{
//     const helloworld =() => {
//         console.log("Hello")
//     }

//     const addTwo = (num1, num2) => {
//         console.log(num1+num2);
//     }
//     helloworld();
//     addTwo(5,0);

//     console.log("OUTSIDE FUN");
// }

//  app();

//LEXICAL SCOPE
//variable’s scope is determined by its location within the source code—specifically, where it is declared.

// const myVar = "Value1";
// const myApp = ()=> {
//     const myFunc = () =>{
//         const myVar = "Value2"
//         console.log(myVar);
//     }
//     console.log(myVar);
//     myFunc();
// }
// myApp();


//BLOCK AND FUNCTION SCOPE
//let and const are block scope
// var is function scope

// Default Parameter
// function addTwo(a,b=0){
//     return a+b;
// }
// console.log(addTwo(5));

//Rest Parameter
// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is `,c);
    
// }

// myFunc(1,5,8,8,9,4); 

// function addAll(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total = total + number;
//     }
//     return total;
// }
// console.log(addAll(1,4,6,2,7,9));

// PARAMETER DESTRUCTURING
// OBJECT - REACT
// const person = {
//     firstName : "name1" ,
//     gender : "M"
// }
// function printD({firstName,gender}){
//     console.log(firstName);
//     console.log(gender);
// }
// printD(person);



//CallBack Function
// function myFunc2(){
//     console.log("inside my func2");
//     }
//     function myFunc(callback){
//         callback();
// }
// myFunc(myFunc2);



//Function returning function
// function myFunc(){
//     function hello(){
//         return "Hello";
//     }
//     return hello;
// }
// const ans = myFunc();
// console.log(ans());

//IMPORTANT ARRAY METHODS

//FOR EACH
// const numbers = [4,6,2,8];
// function myFunc(number , index){
//     console.log(`index of ${index} number is ${number}`);
// }
// numbers.forEach(myFunc);
//iterate over each element in an array and perform an operation (usually via a function or callback).
//OR
// for (let i = 0; i<numbers.length;i++){
//     myFunc(numbers[i],i);
// }

// numbers.forEach(function(number,index){
//     console.log(number*3,index);
// })

// const users = [
//     {firstName : "n1", age : 8},
//     {firstName : "n2", age : 9},
//     {firstName : "n3", age : 9},
//     {firstName : "n4", age : 4}
// ]
// users.forEach(function(user){
//     console.log(user.firstName);
// });
// by Arrow Function
// users.forEach((user,index)=>{
//     console.log(user.firstName,index);}
// );
// for (let user of users){
//     console.log(user.firstName);
// }

// MAP METHOD
// const numbers = [3,5,6,9,1];
// const square = function(number){
//     return number*number;
// }
// const squareNumber = numbers.map(square);
// console.log(squareNumber); 

//or
// const squareNumber = numbers.map((number, index)=>{
//     return `index: ${index}, ${number*number}`;
// });
// console.log(squareNumber);

// Return array with firstname from the object
// const users = [
//     {firstName : "n1", age : 8},
//     {firstName : "n2", age : 9},
//     {firstName : "n3", age : 9},
//     {firstName : "n4", age : 4}
// ]
// const firstName= users.map(users => users.firstName);
// console.log(firstName);



//Filter Method
// const numbers = [1,3,2,6,4,8];
// // const isEven = function(number){
// //     return number%2==0;
// // }
// // const evenNos = numbers.filter(isEven); 
// //OR
// const evenNos = numbers.filter((number)=>{
//     return number % 2 === 0;
// })
// console.log(evenNos); 


//Reduce Method
// const numbers = [1,2,3,4,5,10];
// const sum = numbers.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// });
// console.log(sum);

//acc = 1 and currv = 2 return=acc=3 and currv= next=3 hench forth 
//The reduce() method is used to "reduce" an array to a single value by applying a function to each element and accumulating the result.
// It's commonly used for things like:
// Summing numbers
// Flattening arrays
// Collecting or transforming data

// const userCart = [
//     {productId : 1,productName:"Laptop",price: 15000},
//     {productId : 2,productName:"Mobile",price:8000 },
//     {productId : 3,productName:"Tablet",price:12000 }
// ]
// const total = userCart.reduce((totalPrice, currentProduct)=>{
//     return totalPrice + currentProduct.price;
// },0);
// console.log(total);


//SORT METHOD
// 0-9 : 48-57
// A-Z : 65-90
// a-z : 97-122

// const numbers = [5, 9, 1200, 400, 3000];
// numbers.sort((a,b)=>{
//     return a-b;
    //negative a comes before b
    //positive b comes before a 
    //zero no change
// });
// console.log(numbers);
//Sort numbers with converting them to string and checking for ascii code.
//first check capital and then lower case first character

// const userCart = [
//     {productId : 1,productName:"Laptop",price: 15000},
//     {productId : 2,productName:"Mobile",price:8000 },
//     {productId : 3,productName:"Tablet",price:12000 }
// ]
// const lowToHigh = userCart.slice(0).sort((a,b)=>{
//     return a.price-b.price;
// });
// console.log(lowToHigh);


//FIND METHOD
//search an array and return the first element that matches a specific condition.
//array.find(callback(element, index, array), thisArg)
// const myProduct = userCart.find((user)=>{
//     return user.productId===3;
// })
// console.log(myProduct);

//EVERY METHOD
//The .every() method in JavaScript is used to test whether all elements in an array pass a specified condition.
//array.every(callback(element, index, array), thisArg)
// const num = [2,4,6,8,10];
// const vaar = num.every((number)=>{
//     return number%2===0;
// })
// console.log(vaar);
//
//to check price of all product greater than 30k
// const chheck = userCart.every((cartItem)=>cartItem.price<30000);
// console.log(chheck);

//SOME METHOD
// const numbers = [3,5,2,9];
// // kya ek bhi number aisa hai jo even hai
// const ans = numbers.some((number)=>number%2===0);
// console.log(ans);


// FILL METHOD
//The .fill() method in JavaScript is used to fill all or part of an array with a static value.
//array.fill(value, start, end)

// const myArray = new Array(10).fill(-1);
// console.log(myArray);

// const myArray = [1,2,3,4,5,6,7,8,9];
// myArray.fill(0,2,5 );
// console.log(myArray);


// SPLICE METHOD
// start delete insert

// const myArray = ['item1','item2','item3'];
// //delete
// myArray.splice(1,1);
// console.log(myArray);
// return deleted item

//insert
// myArray.splice(1,0,'iteminserted');
// console.log(myArray);

//insert and delte
// myArray.splice(1,2,"inserted item1", "inserted item 2")
// console.log(myArray);



//ITERABLES
//jispse hum for of loop laga sakein
//string, array are iterables

// const firstName = "MAK";
// for (let char of firstName){
//     console.log(char);
// }


//array like object
//jinke pas length property hoti hai
// aur jinko hum index se access kar sakte hai


//SETS (Iterables)
//store data
//sets also have its own methods
// no index based access
// order in not guaranteed
// unique items only (no duplicates allowed)

// const numbers = new Set([1,2,3]);
// console.log(numbers);
// numbers.add(1);
// numbers.add("hello");
// numbers.add(['1','2']);
// numbers.add(['1','2']);

// console.log(numbers);

// const check = numbers.has("1");
// const myArray = [1,2,3,3,5,6,8];
// const uniqueArray = new Set(myArray);
// console.log(uniqueArray);
// let length = 0;
// for(let element of uniqueArray){
//     length++;
// }
// console.log(length);


//MAP (Iterables)
//store data in key value pair and ordered fashion
// key can of of any datatype whereas objects can only have string or symbol as key
//duplicate keys are not allowed
//key value pair in array


// const person = new Map();
// person.set('fName','Hi');
// person.set('age',7);
// person.set(1,'one');
// console.log(person);
// for (let key of person.keys()){
//     console.log(key, typeof key);
// }
// for (let key of person){
//     console.log(key, Array.isArray(key));
// }
// //array detructure
// for(let [key,value] of person){
//     console.log(`${key} : ${value}`);
// }

//CLONE USING OBJECT.ASSIGN
// const obj = {
//     key1: "value1",
//     key2: "value2"
// }

// //const obj1 = {...obj};
// const obj1 = Object.assign({},obj);
// obj.key3 = "value3"
// console.log(obj);
// console.log(obj1);



//OPTIONAL CHAINING
// ?.
//Optional chaining (?.) is a feature in JavaScript that lets you safely access deeply nested properties in an object without getting errors if a part of the chain is undefined or null.

// const user= {
//     fName : "MAK",
//     address: {houseN : '1234'}
// }
// console.log(user?.fName);
// console.log(user?.address?.houseN);



//METHODS
//FUNCTION INSIDE OBJECTS

// function personInfo(){
//     console.log(this);
//     console.log(`person name is ${this.fName} and age is ${this.age}`);
// }
// const person1 = {
//     fName : 'abc',
//     age : 9 ,
//     about : personInfo
// }
// const person2 = {
//     fName : 'def',
//     age : 5 ,
//     about : personInfo
// }
// person1.about();
// person2.about();


//call Immediately invokes the function with a specified this and arguments.
//apply Similar to call(), but arguments are passed as an array.
//bind Returns a new function with this bound to the specified value.
//Does not invoke the function immediately.

// function about1(hobby, favMu){
//     console.log(this.fName, this.age, hobby, favMu);
// }
// const user1 = {
//     fName : "hhh",
//     age : 8
// }
// const user2 = {
//     fName : "yyy" ,
//     age : 10
// }

// about1.call(user1,"guitar","bach");
// about1.apply(user1,["guitar", "bach"]);
// const u1 = about1.bind(user2,"guitar","bach");
// u1();

// function (that function create object)
// 2.) add key value pair
// 3.) object ko return krega



// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old`;
//     }
//     user.is18 = function(){
//         return this.age >= 18;
//     }
//     return user;
// }

// const user1 = createUser("MAK","KHAN","abc@gmail.com",18,"myadd")
// console.log(user1);
// console.log(user1.is18());
// console.log(user1.about());


//REPEATING METHODS DRY PRINCIPLE


// const userMethod = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }
// function createUser(firstName, lastName, email, age, address){
//     const user = Object.create(userMethod);//{}
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     user.about = userMethod.about;
//     user.is18 = userMethod.is18;
//     return user;
// }

// const user1 = createUser("MAK","KHAN","abc@gmail.com",18,"myadd")
// console.log(user1);
// console.log(user1.is18());
// console.log(user1.about());

//__proto__ or [[prototype]]
//__proto__ is a property in JavaScript that refers to the prototype of an object. It's a way to access or modify the internal [[Prototype]] of an object, which is part of JavaScript's prototype chain mechanism used for inheritance.

// const obj1 ={
//     key1 : "value1" ,
//     key2 : "value2"
// }
// const obj2 = Object.create(obj1);
// obj2.key3 = " value3";
// console.log(obj2);
// console.log(obj2.__proto__);

// Prototype
//prototype is a built-in property of functions that is used to implement inheritance. It plays a key role in the prototype chain, which allows objects to share methods and properties.
//Property of a constructor function. Used to set what gets assigned as __proto__ in the instance.
//and __proto__ : Internal property of all objects. Points to the object's prototype (usually a function’s .prototype).

// function hi(){
//     console.log("HELLO");
// }

// if (hi.prototype){
//     console.log("TRUE")
// }

// hi.prototype.abc="abc";
// hi.prototype.xyz="xyz"; 
// hi.prototype.fun1 = function () {
//     return "FUN1";
// }

// console.log(hi.prototype); 




// function createUser(firstName, lastName, email, age, address){
//     const user = Object.create(createUser.prototype);//{}
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     return user;
// }

// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old`;
// }
// createUser.prototype.is18 = function(){
//     return this.age >= 18;
// }


// const user1 = createUser("MAK","KHAN","abc@gmail.com",18,"myadd")
// console.log(user1);
// console.log(user1.is18());
// console.log(user1.about());
 

// NEW KEYWORD
// function CreateUser(firstName, age){
//     this.firstName = firstName;
//     this.age = age;
// }

// CreateUser.prototype.about= function(){
//     console.log(this.firstName,this.age);
// }

// const user1 = new CreateUser("har",6);

// console.log(user1);
// user1.about();

// for (let key in user1){
//     if(user1.hasOwnProperty(key)){
//         console.log(key);
//     }
//     else {
//         console.log(`prototype :  ${key}`);
//     }
// }


// MOre ABout Prototype
// let numbers = [ 1,2,3];
// console.log(Object.getPrototypeOf(numbers));
// console.log(Array.prototype);
// console.log(numbers);

// function hello(){
//     console.log("hello");
// }
// console.log(hello.prototype);


// CLASS KEYWORD

// class CreateUser{
//     constructor(firstName, lastName, email, age, address){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.email=email;
//         this.age=age;
//         this.address=address;
//     }

//     about(){
//         return `${this.firstName} is ${this.age} years old`;
//     }
//     is18(){
//         return this.age >= 18;
//     }
// }

// const user1 = new CreateUser("MAK","K","abc@gmail.com",18, "Hi")
// console.log(user1);

//Class Practice


//GETTER AND SETTER
// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age;
//     }
//     //getter
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     // setName(firstName,lastName){
//     //     this.firstName=firstName;
//     //     this.lastName=lastName;
//     // }

//     // setter
//     set fullName(fullName){
//         const [firstName,lastName]=fullName.split(" ");
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
// }
// const person1 = new Person("MAK","K",18);
// console.log(person1.firstName);
// console.log(person1.fullName);
// // person1.setName("KHNA","MAK");
// // console.log(person1.firstName);
// // console.log(person1.fullName);
// // or
// person1.firstName="RAM";
// person1.lastName="DEV";
// console.log(person1.firstName);
// console.log(person1.fullName);

// person1.fullName = "Mohit Vash";
// console.log(person1.firstName);
// console.log(person1.fullName);


//Closure 


//ex1
// function hello(x){
//     const a = "varA";
//     const b = "varB";
//     return function(){
//         console.log(a,b,x)
//     }
// }
// const ans = hello("arg");
// ans();

//ex2
// function myFunction(power){
//     return  function(number){
//         return number ** power
//     }
// }
// const myFunction = power => number => number ** power;
// const cube = myFunction(3)
// const ans = cube(2);
// console.log(ans);


//application of closure
// function fun(){
//     let counter = 0;
//     return function(){
//         if (counter < 1){
//             console.log("Hi You Called me")
//             counter++;
//         }else {
//             console.log("Already Called");
//         }
//     }
// }
// const myFunc = fun();
// myFunc();
// myFunc();



