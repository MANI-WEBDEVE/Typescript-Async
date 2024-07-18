"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let value;
value = true; // OK
value = 42; // OK
value = "Hello"; // OK
// Operations karne se pehle type check karna parta hai
if (typeof value === "string") {
    //* console.log(value ); // OK
}
else {
    console.log("error");
}
//? Symbol primitive Data Type In Typescript;
let symbol = Symbol("mySymbol");
let symbol2 = Symbol("mySymbol");
const student = ["Muhammad", "GenAI", 19, 86021];
const student1 = [6, 6, 5, 6];
//* const st3:boolean = student1.every((curElem) => {
//*    const stud:boolean = curElem > 5
//*    return stud
//* })
//* console.log(st3)
//* const st4:number = student.findIndex((curElem) => {
//*   const std:boolean = curElem === "GenAI";
//*   return std
//* });
//* console.log(st4)
const st5 = student1.reduce((accm, curElem) => {
    const stud = accm * curElem;
    return stud;
});
console.log(st5);
