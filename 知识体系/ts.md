
## 一、基础类型
#### 布尔值(boolean)
`let isDone:boolean=false`
#### 数字(number)
支持十进制、十六进制、二进制和八进制字面量都是属于数字。
`let nun:number=6`
#### 字符串(string)
`let name:string='bb'`
还支持模板字符串（`）和`${name}`
```
  let name:string='bb';
  let str:string=`hello,${name}`
```
#### 数组
- []
- 数组泛型`Array<元素类型>`
`let list:number[]=[1,2,3]`
`let list:Array<number>=[1,2,3]`
#### 元祖Tuple
元祖类型允许表示一个已知元素和类型的数组，各元素类型不必相同。
```
    let x:[string,number];
    x=['hello',10] //ok
    x=[1-,'hello'] //error
```
```
    // 联合类型
    x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
    console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
    x[6] = true; // Error, 布尔不是(string | number)类型
```
#### 枚举(enum)
` enum Color{Red,Green,Blue}; let c:Color=Color.Green`\
#### any

