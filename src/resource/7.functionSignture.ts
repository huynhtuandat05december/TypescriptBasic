/* ============================ FUNCTION SIGNATURES =============== */
let greeting72: Function;

// Example 1
let greeting7: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

// Example 2
let calculation: (a: number, b: number, c: string) => number;

calculation = (numOne: number, numTwo: number, action: string) =>
  action === 'add' ? numOne + numTwo : numOne - numTwo;

// Example 3
let logDetails7: (someObj: { name: string; age: number }) => void;

type Person = { name: string; age: number };

logDetails7 = (ninja: Person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};

const henry = {
  name: 'henry',
  age: 30,
};

logDetails7(henry);
