const functionA = (obj: { firstName: string; lastName: string }) => {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
  };
};

// const f1=functionA({firstName:'a',lastName:'b',age:30}) // cannot

const functionB = <T extends { firstName: string; lastName: string }>(obj: T) => {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
  };
};
const f2 = functionB({ firstName: 'a', lastName: 'b', age: 30 });
console.log(f2);

///////
const functionC = (employee: object) => {
  const uid = Math.floor(Math.random() * 1000);
  return {
    ...employee,
    uid,
  };
};

const employee1 = functionC({ name: 'a', age: 30 });
// console.log(employee1.name) //cannot
const functionD = <T extends object>(employee: T) => {
  const uid = Math.floor(Math.random() * 1000);
  return {
    ...employee,
    uid,
  };
};
const employee2 = functionD({ name: 'a', age: 30 }); // not required field name
console.log(employee2.name);

const functionE = <T extends { name: string }>(employee: T) => {
  const uid = Math.floor(Math.random() * 1000);
  return {
    ...employee,
    uid,
  };
};
const employee3 = functionE({ name: 'a', age: 30 }); // required field name
console.log(employee3.name);
