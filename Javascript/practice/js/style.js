// Global Variable
var boxElement = document.getElementById('boxstyle').classList;

function addStyle(styleClass) {
    boxElement.remove('style-1', 'style-2', 'style-3', 'style-4', 'style-5','style-6','style-7','style-8','style-9','style-10');
    boxElement.add(styleClass);
}

// function round() {
//     boxElement.add('style-1');
//     boxElement.remove('style-2', 'style-3', 'style-4', 'style-5','style-6','style-7','style-8','style-9','style-10');
// }

// function dashed() {
//     boxElement.add('style-2');
//     boxElement.remove('style-1','style-3','style-4','style-5','style-6','style-7','style-8','style-9','style-10');
    
// }
// function dotted() {
//     boxElement.add('style-3');
//     boxElement.remove('style-1','style-2','style-4','style-5','style-6','style-7','style-8','style-9','style-10');
// }

// function semiround() {
//     boxElement.add('style-4');
//     boxElement.remove('style-1','style-2','style-3','style-5','style-6','style-7','style-8','style-9','style-10');    
// }

// function bgaqua() {
//     boxElement.add('style-5');
//     boxElement.remove('style-1','style-2','style-3','style-4','style-6','style-7','style-8','style-9','style-10');
// }

// function rotate() {
//     boxElement.add('style-6');
//     boxElement.remove('style-1','style-2','style-3','style-4','style-5','style-7','style-8','style-9','style-10');
// }
    
// function shadow() {
//     boxElement.add('style-7');
//     boxElement.remove('style-1','style-2','style-3','style-4','style-5','style-6','style-8','style-9','style-10');
// }

// function bgpurple() {
//     boxElement.add('style-8');
//     boxElement.remove('style-1','style-2','style-3','style-4','style-5','style-6','style-7','style-9','style-10');
   
// }
// function bglightpurple() {
//     boxElement.add('style-9');
//     boxElement.remove('style-1','style-2','style-3','style-4','style-5','style-6','style-7','style-8','style-10');
// }

// function bgpink() {
//     boxElement.add('style-10');
//     boxElement.remove('style-1','style-2','style-3','style-4','style-5','style-6','style-7','style-8','style-9');
// }