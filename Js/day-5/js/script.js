let userName = prompt("What is your name?")
document.writeln(userName, '<br/>');


let country = 'India';
let age = 17;

// And Or

// Apple And Mnago = &&
// Apple Or Mango = ||


// if (country === 'India') {
//    if (age >= 18) {
//       document.write("Your can Vote!")
//    } else {
//       document.write("Your can not Vote!")
//    }
// }

if (country === 'India' && age >= 18) {
   document.write("Your can Vote!", '<br/>')
} else {
   document.write("Your can not Vote!", '<br/>')
}

if (country === 'India' || age >= 18) {
   document.write("Your can Vote!", '<br/>')
} else {
   document.write("Your can not Vote!", '<br/>')
}


// Ternary Operator
// Condition ? True : False
country === 'India' && age >= 18 ? document.write("Your can Vote!", '<br/>') : document.write("Your can not Vote!", '<br/>');

let weekDay = prompt("Enter week day", 1)

// if (weekDay === '1') {
//    document.write('Your selected week day is Sunday')
//    document.write('Good')
// } else if (weekDay === '2') {
//    document.write('Your selected week day is Monday')
// } else if (weekDay === '3') {
//    document.write('Your selected week day is Tuesday')
// } else if (weekDay === '4') {
//    document.write('Your selected week day is Wednesday')
// } else if (weekDay === '5') {
//    document.write('Your selected week day is Thursday')
// } else if (weekDay === '6') {
//    document.write('Your selected week day is Friday')
// } else if (weekDay === '7') {
//    document.write('Your selected week day is Saturday')
// } else {
//    document.write('Your can`t even think week day you Dumb')
// }

// Switch Operator

// switch(condition) {
//    case condition :
//       break;
//    default:
//       ''
// }

switch(weekDay) {
   case '1':
      document.writeln('Your selected week day is Sunday');
   break;

   case '2':
      document.writeln('Your selected week day is Monday');
   break;

   case '3':
      document.write('Your selected week day is Tuesday')
   break;

   default :
   document.write('Your can`t even think week day you Dumb')
}

for (var a = 10; a <=15; a++) {
	document.writeln(a '<br/>');
}
	