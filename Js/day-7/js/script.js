// let fruit = [
//    "apple", 
//    "mangoe", 
//    "orange"
// ];

// Object
// REF - https://www.w3schools.com/js/js_objects.asp

let mobile = {
   "company": "Samsung",
   "model": 'Galaxy s7',
   "color": 'Black',
   camera: "100mp",
   "sepaker out": 45, // Never do this type of name
   "sepakerOut": 45,
   hasInternet: true,
   fruits: ["apple", "mangoe", "orange"]
}

mobile.fm = false // Fm value added in fm
mobile.company = "" // empty value
console.log(mobile);
mobile.company = "Nokia" // empty value

console.log(mobile);
console.log(mobile.company);
console.log(mobile['sepaker out']);

//Delete property from object
delete mobile.color;


// Empty Object
const box = {};
box.pen = 5;
box.bread = 2;
box.books = "English";
box.mobile = "Nokia";

console.log(box, "box");

const person = {
   name: 'Raju',
   age: '25',
   profession: "Developer"
}

document.writeln("My name is " + person.name + " and i'm " + person.age + " year old. My profession is "+ person.profession +"", '<br/>');

// String Templates, Template Strings, Template Literals
// Ref - https://www.w3schools.com/js/js_string_templates.asp

let message =  ` This is dummy message `
document.writeln(`My name is ${person.name} and i'm "${person.age}" year old. My profession is ${person.profession}`);


// Object in array example

let demo = [
   "Apple",
   100,
   true,
   null,
   undefined,
   {
      name: 'Raju',
      age: '25',
      profession: "Developer",
      fruits: [
         "apple", 
         "mangoe", 
         "orange"
      ]
   }
]

console.log(demo)

   