```
let obj = {
  a: '1',
  b: '444',
  c: 'ggg'
};

function newObj() {
  this.color = 'red';
  this.hh = 'hello';
}
newObj.prototype = obj;

let obj2 = new newObj();
// for in
for (let o in obj2) {
  console.log(o); // color,hh,a,b,c
}
// Object.keys
console.log(Object.keys(obj2)); // ['color','hh']
// Object.values
console.log(Object.values(obj2)); // ['red','hello']
// Object.entries
console.log(Object.entries(obj2)); // [ [ 'color', 'red' ], [ 'hh', 'hello' ] ]
let map = new Map(Object.entries(obj2)); // Map { 'color' => 'red', 'hh' => 'hello' }
console.log(map);
```

- for in —— 循环遍历可枚举的属性（包括原型上的属性）

- Object.keys() —— 循环遍历可枚举的属性（不包括原型属性）

- Object.values() —— 循环返回属性值（不包括原型属性值）

- Object.entries() —— 返回可枚举属性的键值对数组（不包括原型属性）

当对象需要转换为 Map 时特别适用，同样是键值对格式
