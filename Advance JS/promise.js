// const bucket = ['milk', 'coffee', 'tea', 'water', 'rice'];
// const myPromise = new Promise((resolve, reject) => {
//     if (bucket.includes('rice') && bucket.includes('water')) {
//         resolve('Fried Rice');
//     }
//     else {
//         reject('Could not do it');
//     }
// });

// myPromise.then(
//     (myFriedRice)=>{
//         console.log(`Lets Eat ${myFriedRice}`);
//     }
//     ,
//     (error)=>{console.log(error);}
// )


//FUNCTION RETURNING PROMISE
// function ricePromise(){
//     const bucket = ['milk', 'coffee', 'tea', 'water', 'rice'];
//     return new Promise((resolve,reject)=>{
//         if (bucket.includes('milk')&&bucket.includes('water')){
//             resolve({"value":"Fried Rice"});
//         }
//         else{
//             reject(error);
//         }
//     })

// }

// ricePromise().then(
//     (myPromise)=>{
//         console.log(`Lets Eat ${myPromise.value}`);
//     }).catch(
//     (error)=>{
//         console.log(error)
//     });


//PROMISE WITH SET TIME OUT
//RESOLVE & REJECT AFTER 2 SECOND
// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         const value = false;
//         setTimeout(()=>{
//             if(value){
//                 resolve();
//             }else{
//                 reject();
//             }
//         },3000)
//     })
// }

// myPromise()
// .then(()=>console.log("RESOLVED"))
// .catch(()=>{console.log("REJECTED")});


//Promise Resolve Chaining
//then returns a promise

// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         resolve("foo");
//     })
// }

// myPromise()
// .then((value)=>{
//     console.log(value);
//     value+="bar";
//     return value;
// })
// .then((value)=>{
//     console.log(value);
//     value+="barar";
//     return value;
// })
// .then((value)=>{
//     console.log(value);
// })

// // CALL BACK HELL BY PROMISE
// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// const heading8 = document.querySelector(".heading8");
// const heading9 = document.querySelector(".heading9");
// const heading10 = document.querySelector(".heading10");

// function changeText(element,color,text,time){
//     return new Promise(
//         (resolve,reject)=>{
//             setTimeout(()=>{
//                 if(element){
//                     element.textContent= text;
//                     element.style.color= color;
//                     resolve();
//                 }else
//                     reject();
//             },time)
//         },
//     )
// }


// changeText(heading1,"red","one",1000)
// .then(()=>changeText(heading2,"orange","two",1000))
// .then(()=>changeText(heading3,"yellow","three",1000))
// .then(()=>changeText(heading4,"green","four",1000))
// .then(()=>changeText(heading5,"blue","five",1000))
// .then(()=>changeText(heading6,"indigo","six",1000))
// .then(()=>changeText(heading7,"violet","seven",1000))
// .then(()=>changeText(heading8,"purple","eight",1000))
// .then(()=>changeText(heading9,"pink","nine",1000))
// .then(()=>changeText(heading10,"brown","ten",1000))
// .catch((error)=>{
//     alert(error);
// });




