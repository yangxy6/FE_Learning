// var anotherObject = {
//   a: 2
// };

// var myObject = Object.create(anotherObject);

// console.log(anotherObject.a)
// console.log(myObject.a)
// console.log(anotherObject.hasOwnProperty('a'))
// console.log(myObject.hasOwnProperty('a')) // 不是myObject自己的属性

// myObject.a++

// console.log(anotherObject.a)
// console.log(myObject.a)
// console.log(anotherObject.hasOwnProperty('a'))
// console.log(myObject.hasOwnProperty('a'))

// 你不知道的JavaScript 第五章
function Foo() {}
// Foo.prototype = {};
let a1 = new Foo();
console.log(a1.constructor === Foo); // false
console.log(a1.constructor === Object); // true

this.setState({ a: 1 }, () => {
  console.log(a);
});
