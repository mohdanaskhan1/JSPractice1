//19.Create a Map to store country-capital pairs and print them.

const map1 = new Map([
    ["A","ARGENTINA"],
    ["I","INDIA"],
    ["C","CHINA"],
    ["D","DENMARK"]
]);
console.log(map1);
for (let [key,value] of map1){
    console.log(`${key} : ${value}`);
}