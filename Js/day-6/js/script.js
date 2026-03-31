let fruit = ["Apple", "Mango", "Grapes", "Orange", "Banana", "Strawberry", "Guava"];
let numbers = [1, 2, 3, 4, 5, "7", true, null, undefined];

console.log(fruit);
console.log(fruit.length, "fruit.length");
console.log(numbers.length, "numbers.length");

console.log(fruit[2]); // Grapes at 2nd index
console.log(fruit[5]); // undefined for 5th index
console.log(fruit[0]); // Apple at 0 index

for (let i = 0; i < fruit.length; i++) {
   document.writeln('<b>' + fruit[i] + '</b>' + ' is a Fruit', '<br/>');
}

