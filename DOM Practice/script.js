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

























