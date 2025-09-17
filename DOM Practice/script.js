// //getElementById    
// let mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);
// console.log(mainHeading.textContent);
// console.log(mainHeading.innerText);

// const mainH = document.querySelector("#main-heading");
// console.log(mainH);
// const header = document.querySelector(".header");
// console.log(header);
// const navItem = document.querySelector(".nav-item");
// console.log(navItem);
// const navItem1 = document.querySelectorAll(".nav-item");
// console.log(navItem1);
// const div = document.querySelector("div.headline h2");
// console.log(div);


// mainHeading.textContent="Changed Content";

// const mainHeading = document.querySelector("div.headline h2");
// mainHeading.style.color = "grey";
// mainHeading.style.backgroundColor="blue";
// mainHeading.style.padding="10px";
// mainHeading.style.borderRadius="10px";

// const link = document.querySelector("a");
// console.log(link.getAttribute("href").slice(1));
// link.setAttribute("href","https://google.com/"); 
// console.log(link.getAttribute("href"));


// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));


// //Get Multiple items using getElements by class name
// const navItems = document.getElementsByClassName("nav-item");
// console.log(navItems); //HTMLCOllection
// console.log(navItems[2]);
// console.log(Array.isArray(navItems)); // False


//Get Multiple items using getElements by QuerySelectorALl
// const navItems = document.querySelectorAll(".nav-item");
// console.log(navItems); //NodeList
// console.log(navItems[2]);  //ArrayLikeObject
// console.log(Array.isArray(navItems)); // False

// //array like object indexing and length
// let navItems = document.getElementsByTagName("a");
// console.log(navItems); //HTMLCOllection

//simple for
// for(let i=0; i<navItems.length;i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
    
// }
// for of
// for (let navItem of navItems){
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight="dark";
// }


//forEach Method
//cant use forEach method directly to iterate throuch HTML Collection
// navItems = Array.from(navItems);
// navItems.forEach(navItem => {
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight="dark";
// });


//INNERHTML

// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML="INNER HTML CHANGED";
// console.log(headline.innerHTML);



//classList, add and remove and toggle class
// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo);
// console.log(sectionTodo.classList);
// sectionTodo.classList.add('bg-dark');
// sectionTodo.classList.remove('container');
// const ans = sectionTodo.classList.contains("container");
// console.log(ans);

// sectionTodo.classList.toggle("bg-dark");
// sectionTodo.classList.toggle("bg-dark");


//ADD HTML ELEMENT to page

// //using innerHTML
// const todoList = document.querySelector(".todo-list");
// todoList.innerHTML+="<li>New Todo</li>";
// todoList.innerHTML+="<li>Teach Students</li>";

//when to use and when to not
//use to change not to add



//CREATE ELEMENT AND APPEND, PREPEND, BEFORE, AFTER, REPLACEWITH
// const newTodoItem = document.createElement("li");
// // // const newTodoItemText = document.createTextNode("Teach Students");
// newTodoItem.textContent="TEACH STUDENTS";
// // // newTodoItem.append(newTodoItemText);
// const todoList = document.querySelector(".todo-list");
// // // todoList.append(newTodoItem);
// todoList.prepend(newTodoItem);
// // console.log(newTodoItem);


// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();


// const newTodoItem = document.createElement("li");
// newTodoItem.textContent="TEACH STUDENTS";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);
// todoList.after(newTodoItem);



//INSERT ADJACENT ELEMENTS
//beforebegin
//afterbegin
//beforeend
//afterend
// const todoList = document.querySelector(".todo-list ");
// todoList.insertAdjacentHTML("beforeend","<li>Teach Students</li>");
// todoList.insertAdjacentHTML("afterend","<li>Teach Students</li>");
// todoList.insertAdjacentHTML("beforebegin","<li>Teach Students</li>");
// todoList.insertAdjacentHTML("afterbegin","<li>Teach Students</li>");



//CLONE NODE
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent="NEW NODE";
// const li2 = li.cloneNode(true);
// ul.append(li);
// ul.prepend(li2);

//Some old methods to support poor IE
//appendChild;
//insertBefore;
//replaceChild;
//removeChild;
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// const referenceNode = document.querySelector(".first-todo");
// li.textContent="NEW NODE";
// ul.appendChild(li);
// ul.insertBefore(li,referenceNode);
// ul.replaceChild(li,referenceNode);
// ul.removeChild(li);



//STATIC LIST AND LIVE LIST

//query selector static list
//getElementsBySomething live list

// const listItems = document.querySelectorAll(".todo-list li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent="todo  6";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthLi);
// console.log(listItems); //static list

// const ul = document.querySelector(".todo-list");
// const listItems = ul.getElementsByTagName("li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent="todo  6";
// ul.append(sixthLi);
// console.log(listItems); //live list
// console.log(listItems.length);
// console.log(listItems[5]);
// console.log(listItems[0]);
// console.log(listItems[1]);
//listItems is updated automatically when we add or remove an element from the DOM  


//how to get dimensions of an element
// const sectionTodo = document.querySelector(".section-todo");
// const info = sectionTodo.getBoundingClientRect();
// console.log(info);
// console.log(info.height);
// console.log(info.width);
// console.log(info.top);
// console.log(info.left);
// console.log(window.innerHeight);
// console.log(window.innerWidth);




//EVENTS
//3 WAYS
//1. Direct Onclick method in HTML
//2. Using element.onclick
// const btn = document.querySelector(".btn-headline");
// btn.onclick = ()=>{
//     console.log("You Clicked Me");
// }

//3. Using addEventListener
// const clickMe = ()=>{
//     console.log("You Clicked Me");
// }
// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click",clickMe);

//THIS KEYWORD IN EVENT HANDLER
// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click",function(){
//     console.log("You Clicked Me");
//     console.log(this);
//     this.style.backgroundColor="grey";
// });

//In Arrow function value to this is taken from surrounding
// but in normal function it is the element on which event is attached

// const allButtons = document.querySelectorAll(".btn");
// for(let button of allButtons){
//     button.addEventListener("click",function(){
//         console.log(this.textContent);
//     });
// }
//we cant use arrow function here because this will not refer to button element

//EVENT OBJECT
// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log(event.currentTarget)
//     console.log(event.target);
//     console.log(event.target.textContent);
//     console.log(this.textContent);
// });


//When Event lister is added to an element then browser creates an event object and passes it to the event handler function
//event object contains useful information about the event that occured
//most useful property of event object is target property which references the element on which the event occured
//In normal function this keyword refers to the element on which event is attached
//In arrow function this keyword refers to the surrounding where it is written

//Jab browser ko ata chala ki user ne event perform kia
//jo hum listen kar rahe hai
//browser 
//1) callback func hai vo js ko dega
//2) js call stack me jayega
//3) js callback function ko execute karega aur event object ko pass karega
//4) event object me event ke bare me useful information hogi
//5) js call stack se callback function ko hata dega
//6) browser ko callback function ke execute hone ki information dega



//KEYPRESS EVENT

// const body = document.body;
// body.addEventListener("keypress",(event)=>{
//     console.log(event)
//     console.log(event.key);
//     console.log(event.code);
// });


//MouseOver Event
// const mainButton = document.querySelector(".btn-headline");
// mainButton.addEventListener("mouseover",(event)=>{
//     console.log("Mouse Over Event");
//     console.log(event);
// });
// mainButton.addEventListener("mouseout",(event)=>{
//     console.log("Mouse Out Event");
//     console.log(event);
// });
// mainButton.addEventListener("mouseenter",(event)=>{
//     console.log("Mouse Enter Event");
//     console.log(event);
// });
// mainButton.addEventListener("mouseleave",(event)=>{
//     console.log("Mouse Leave Event");
//     console.log(event);
// });

//difference between mouseover and mouseout and mouseenter and mouseleave
//mouseover and mouseout bubble up
//mouseenter and mouseleave do not bubble up

//EVENT BUBBLING / EVENT PROPAGATION
//Event Bubbling is a type of event propagation where the event first triggers on the innermost target element and then successively triggers on the ancestors of the target element in the same hierarchy until it reaches the outermost DOM element or until it is stopped.



//EVENT CAPTURING
//event capturing is the opposite of event bubbling
//in event capturing the event first triggers on the outermost DOM element and then successively triggers on the descendants of the target element in the same hierarchy until it reaches the innermost target element or until it is stopped.


//EVENT DELEGATION
//event delegation is a technique of using event bubbling to handle events at a higher level in the DOM rather than attaching event listeners to individual elements.
//it is a very efficient way of handling events because we can attach a single event listener to a parent element and handle events for all its child elements.


const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHTML=`
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
    newLi.innerHTML=newLiInnerHTML;
    todoList.append(newLi);
    todoInput.value="";
});


todoList.addEventListener("click",(event)=>{
    if (event.target.classList.contains("remove")){
        const li = event.target.parentNode.parentNode;
        li.remove();
    }
    if (event.target.classList.contains("done")){
        const li = event.target.parentNode.parentNode;
        const span = li.firstElementChild;
        span.style.textDecoration="line-through";
    }
});        










































