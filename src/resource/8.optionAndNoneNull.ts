const test8 = (a: number, b?: number) => {
  return a + b!;
};
console.log(test8(1, 2));
console.log(test8(1));
