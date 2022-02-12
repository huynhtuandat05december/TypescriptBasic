type array = Array<number>;

const last = (arr: Array<number>) => arr[arr.length - 1];

const last2 = <T>(arr: Array<T>) => arr[arr.length - 1];
const l2 = last2<string>(['a', 'b']);

console.log(l2);

const makeArrayXY = <X, Y>(x: X, y: Y) => [x, y]; // return array
const makeTupleXY = <X, Y>(x: X, y: Y): [X, Y] => [x, y]; //return tuple
