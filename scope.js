// console.log(a); // undefined (due to hoisting)
// var a = 5;
// console.log(a); // 5

// function test() {
//   var b = 10;
//   console.log(b); // 10
// }
// console.log(a); // ReferenceError: b is not defined


//---------------*let*-----------------

// console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
console.log(x); // 10

if (true) {
  let y = 20;
  console.log(y); // 20
}
//console.log(y); // ReferenceError: y is not defined

let z = 30;
z = 40; // Allowed
// let z = 50; // SyntaxError: Identifier 'z' has already been declared

//---------------*const*-----------------

// console.log(p); // ReferenceError: Cannot access 'p' before initialization
const p = 50;
console.log(p); // 50

if (true) {
  const q = 60;
  console.log(q); // 60
}
console.log(q); // ReferenceError: q is not defined

const r = 70;
r = 80; // TypeError: Assignment to constant variable.

const obj = { key: 'value' };
obj.key = 'newValue'; // Allowed
obj = { newKey: 'newValue' }; // TypeError: Assignment to constant variable.
