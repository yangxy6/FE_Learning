#第 9 题：Async/Await 如何通过同步的方式实现异步

# 第 26 题：介绍模块化发展历程

## IIFE：使用自执行函数编写

特点：**在一个单独的函数作用域中执行代码，避免变量冲突**

```
(function(){
  return {
	data:[]
  }
})()
```

## AMD： 使用 requireJS 编写

特点：**依赖必须提前声明好**

```
define('./index.js',function(code){
	// code 就是index.js 返回的内容
})
```

## CMD：使用 seaJS 编写，模块使用时在声明

特点：**支持动态引入依赖文件**

```
define(function(require, exports, module) {
  var indexCode = require('./index.js');
});
```

## CommonJS：nodejs 中自带的模块

```
var fs = require('fs');
```

## UMD：兼容 AMD，CommonJS 模块化语法

## webpack(require.ensure)：webpack2.x 版本中的代码分割

## ES Modules：ES6 引入的模块化，支持 import 引入另一个 js

引入 import，暴露 export

```
import a from 'a';
```

# 第 27 题：全局作用域中，用 const 和 let 声明的变量不在 window 上，那到底在哪里？如何去获取？

1. ES5 中，顶层对象的属性和全局变量是等价的，var 和 function 声明的全局变量，自然也是顶层对象。

```
var a = 12;
function f(){};

console.log(window.a); // 12
console.log(window.f); // f(){}
```

2. ES6 规定，var 命令和 function 命令声明的全局变量，依旧是顶层对象的属性，但 let 命令、const 命令、class 命令声明的全局变量，不属于顶层对象的属性。

```
let aa = 1;

console.log(window.aa); // undefined
```

3. 在全局作用域中，用 let 和 const 声明的全局变量并没有在全局对象中，只是一个块级作用域（Script）中。怎么获取？在定义变量的块级作用域中就能获取啊，既然不属于顶层对象，那就不加 window（global）呗。

```
let aa = 1;
const bb = 2;

console.log(aa); // 1
console.log(bb); // 2
```

4. ES5 没有块级作用域的概念，只有函数作用域，可以近似理解成这样。 所以外层 window 必然无法访问。

```
let a = 10;
const b = 20;
相当于：
(function(){
         var  a = 10;
         var b = 20;
})()
```

# 第 43 题：使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果

原题目：使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果
答案：[102, 15, 22, 29, 3, 8]
解析：根据 MDN 上对 Array.sort()的解释，默认的排序方法会将数组元素转换为字符串，然后比较字符串中字符的 UTF-16 编码顺序来进行排序。所以'102' 会排在 '15' 前面。sort()可以接收一个函数，返回值时比较两个数的相对顺序。

```
 [3, 15, 8, 29, 102, 22].sort((a,b) => {return a - b});
```

# 第 65 题： a.b.c.d 和 a['b']['c']['d']，哪个性能更高？

a.b.c.d 性能更高

- a['b']['c']['d']变量需要计算
- AST 结构不同，a['b']['c']['d']多了"type": "Literal"
