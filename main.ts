let value: unknown;

value = true; // OK
value = 42; // OK
value = "Hello"; // OK

// Operations karne se pehle type check karna parta hai
if (typeof value === "string") {
  //* console.log(value ); // OK
} else {
  console.log("error");
}

//? Symbol primitive Data Type In Typescript;

let symbol: symbol = Symbol("mySymbol");
let symbol2: symbol = Symbol("mySymbol");
//* console.log(symbol == symbol2);

//? Map Method

type StudentName = [string, string, number, number];

const student: StudentName = ["Muhammad", "GenAI", 19, 86021];

//* console.log(student.at(1));
//* console.log(student.pop());
//* console.log(student);
//* console.log(student.push(3));
//* console.log(student);
//* console.log(student.shift());
//* console.log(student);
//* console.log(student.reverse())
//* console.log(student.unshift("Inam"))
//* console.log(student)
//* console.log(student.includes("Inam"));

//* const st:StudentName[] = student.map((curElem, index)=> {
//*     let name = curElem.toString()
//*     console.log(name)
//* })
//* console.log()

//* const st1:StudentName = student.find((curElem) => {
//*   let stud:StudentName = curElem >= 19;
//*   console.log(stud)
//* })

//* const st2: StudentName = student.filter((curElem, Index) => {
//*   const stud: StudentNam = curElem >= 19
//*   console.log(stud);
//*   return stud
//* * console.log(st2);

type StudentNumber = readonly [number, number, number, number];

const student1: StudentNumber = [6, 6, 5, 6];

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
