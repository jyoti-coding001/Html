// Arithmetic Operators + - * /
// Comparison Operators == === < > <= >= != !==

// Global Variable
// var a = 10;
// let b = 20;
// const c = 30;

function firstFunction() {
    var a = 10;
    let b = 20;
    const c = 30; // Ye dubara asssign nai ho sakta
    // Plus 5 in var a
    // var a = 5;

    a = a + 5; // 10 + 5 = 15
    a = a + 5; // 15 + 5 = 20
    a = a + a; // 20 + 20 = 40


    b = b + 5;

    // Const value can not be changed once it is defined
    // c = b + 5;

    console.log("a first:", a);
    console.log("b first:", b);
    console.log("c first:", c);
}

function secondFunction() {
    var a = 60;
    let b = 70;
    const c = 80;
    console.log("a second:", a);
    console.log("b second:", b);
    console.log("c second:", c);
}

function thirdFunction() {
    var a = 1;
    var b = '1';
    var c = a + b;
    console.log(c); // 11

    var d = '1';
    var e = '1';
    var f = d + e;
    console.log(f); // 11

}

function fourthFunction() {
    // Boolean true false
    var a = true;
    var b = false;
    console.log(a);
    console.log(b);

}

function fifthFunction() {
    var a = 10;
    var b = 20;
    var c = '10';
    
    console.log("a = 10", "b = 20", "c = '10'");
    console.log("a == b", a == b);
    console.log("a == c", a == c); // Value type check nai hota hai
    console.log("a === c", a === c); // Value ka type check hota hai

    console.log("a < b", a < b); // a is less then b
    console.log("a > b", a > b); // a is greather then b

    console.log("a != b", a != b); // a not equal to b
    console.log("a != c", a != c); // a not equal to c
    console.log("a !== c", a !== c); // a not equal to c

    if(a == c) {
        console.log("DEVENDER")
        alert("RAJU")
    }
}
// firstFunction();
// secondFunction();
fifthFunction();