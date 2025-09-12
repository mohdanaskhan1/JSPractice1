//20.Demonstrate how to update a value in a Map and then iterate through all keyvalue pairs.

const map1 = new Map([
    ["A","ARGENTINA"],
    ["I","INDIA"],
    ["C","CHINA"],
    ["D","DENMARK"]
]);
console.log(map1);
map1.set("A","AMERICA");
console.log(map1);
for (let [key,value] of map1){
    console.log(`${key} : ${value}`);
}