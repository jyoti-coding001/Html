var a = undefined;
// alert(a)
const agreeMessage = 'I agree to receive recurring marketing messages from {Brand Name}. I understand I can opt-out at any time by replying STOP.';
let confirmData = confirm(agreeMessage) // It will return boolean

console.log(confirmData);

if (confirmData == true) {
    alert("Welcome");
    let userAge = prompt("What is your age", "60"); // 60 is optional for default value in input // Return data which we are inserting
    document.write('Your age is ', userAge, ' buddy!', '<br/>')
} else {
    alert("Go to hell");
}



let weekDay = prompt("Enter week day", 1)
console.log(weekDay, "weekDay")
console.log(typeof weekDay, "weekDay")

// if (weekDay === '1') {
//     alert("Sunday")
// }
// if (weekDay === '2') {
//     alert("Monday")
// }
// if (weekDay === '3') {
//     alert("Tuesday")
// }
// if (weekDay === '4') {
//     alert("Wednesday")
// }
// if (weekDay === '5') {
//     alert("Thursday")
// }
// if (weekDay === '6') {
//     alert("Friday")
// }
// if (weekDay === '7') {
//     alert("Saturday")
// }

if (weekDay === '1') {
   document.write('Your selected week day is Sunday')
} else if (weekDay === '2') {
   document.write('Your selected week day is Monday')
} else if (weekDay === '3') {
   document.write('Your selected week day is Tuesday')
} else if (weekDay === '4') {
   document.write('Your selected week day is Wednesday')
} else if (weekDay === '5') {
   document.write('Your selected week day is Thursday')
} else if (weekDay === '6') {
   document.write('Your selected week day is Friday')
} else if (weekDay === '7') {
   document.write('Your selected week day is Saturday')
} else {
   document.write('Your can`t even think week day you Dumb')

    // We can added as many as if in single if
    //    if(1 === 1){
    //     alert("HEY")
    //    }
}

