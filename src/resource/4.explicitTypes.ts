/* ===================== EXPLICIT TYPES =============== */
// EXPLICIT TYPES
let character4: string;
let age4: number;
let isLoggedIn: boolean;

// age = 'luigi'
age = 30;

// isLoggedIn = 23
isLoggedIn = true;

// ARRAYS
let ninjas: string[] = [];
let test4: [string] = ['a'];

// ninjas = ['yoshi', 'mario']
ninjas.push('abc');

// UNION TYPES
let mixed4: (string | number | boolean)[] = [];
// mixed = ['hello', 'goodbye']
mixed.push('hello');
mixed.push(3);
mixed.push(false);
console.log(mixed);

let uid: string | number;
uid = '123';
uid = 123;

let medium: 'book' | 'movie';
// medium = 'song'
medium = 'book';

// OBJECTS
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = [];

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

ninjaTwo = {
  name: 'mario',
  age: 20,
  beltColour: 'black',
};
