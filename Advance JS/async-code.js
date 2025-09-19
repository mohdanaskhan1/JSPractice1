//callback, callback hell, pyramid of doom

const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');
const heading8 = document.querySelector('.heading8');
const heading9 = document.querySelector('.heading9');
const heading10 = document.querySelector('.heading10');

//CALLBACK HELL
// setTimeout(() => {
//     heading1.textContent = "one";
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.textContent = "two";
//         heading2.style.color = "purple";
//         setTimeout(() => {
//             heading3.textContent = "three";
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 heading4.textContent = "four";
//                 heading4.style.color = "orange";
//                 setTimeout(() => {
//                     heading5.textContent = "five";
//                     heading5.style.color = "yellow";
//                     setTimeout(() => {
//                         heading6.textContent = "six";
//                         heading6.style.color = "green";
//                         setTimeout(() => {
//                             heading7.textContent = "seven";
//                             heading7.style.color = "blue";
//                             setTimeout(() => {
//                                 heading8.textContent = "eight";
//                                 heading8.style.color = "indigo";
//                                 setTimeout(() => {
//                                     heading9.textContent = "nine";
//                                     heading9.style.color = "brown";
//                                     setTimeout(() => {
//                                         heading10.textContent = "ten";
//                                         heading10.style.color = "black";
//                                     }, 1000);
//                                 }, 1000);
//                             }, 1000);
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// BY FUNCTION
function changeText(element, textContent, textColor, time, onSuccessCallback, onFailureCallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = textContent;
            element.style.color = textColor;
            if (onSuccessCallback) onSuccessCallback();
        } else {
            if (onFailureCallback) onFailureCallback();
        }
    }, time);
}

changeText(heading1, "one", "violet", 1000, () => {
    changeText(heading2, "two", "purple", 1000, () => {
        changeText(heading3, "three", "red", 1000, () => {
            changeText(heading4, "four", "orange", 1000, () => {
                changeText(heading5, "five", "yellow", 1000, () => {
                    changeText(heading6, "six", "green", 1000, () => {
                        changeText(heading7, "seven", "blue", 1000, () => {
                            changeText(heading8, "eight", "indigo", 1000, () => {
                                changeText(heading9, "nine", "brown", 1000, () => {
                                    changeText(heading10, "ten", "black", 1000, () => {
                                    }, () => { console.log("Heading10 does not exist") });
                                }, () => { console.log("Heading9 does not exist") });
                            }, () => { console.log("Heading8 does not exist") });
                        }, () => { console.log("Heading7 does not exist") });
                    }, () => { console.log("Heading6 does not exist") });
                }, () => { console.log("Heading5 does not exist") });
            }, () => { console.log("Heading4 does not exist") });
        }, () => { console.log("Heading3 does not exist") });
    }, () => { console.log("Heading2 does not exist") });
}, () => { console.log("Heading1 does not exist") });



