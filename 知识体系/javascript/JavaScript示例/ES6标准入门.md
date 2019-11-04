# 第十二章 —— Proxy

Proxy 用于修改某些操作的默认行为，即对编程语言进行编程。可以任意拦截目标对象的任意属性。
举栗子：重写了属性的读取 get 和设置 set 方法

```
let obj = new Proxy(
  {},
  {
    get: function(target, key, recever) {
      console.log(`getting ${key}`);
      return Reflect.get(target, key, recever);
    },
    set: function(target, key, recever) {
      console.log(`setting ${key}`);
      return Reflect.set(target, key, recever);
    }
  }
);
obj.count = 1; // setting count
++obj.count; //setting count getting count setting count
console.log(obj.count);// setting count getting count setting count getting count 2
```

### 形式

let proxy = new Proxy (target, handler)
target：表示拦截的对象
handler：表示一个对象，用来定制拦截行为。

### 方法

proxy 实例方法有很多

- get(target,propKey,receiver)
- set(target,propKey,value,receiver)
  等等
  **注意：如果目标对象自身的某个属性不可写也不可配置，proxy 将会报错**

# 第 13 章 —— reflect

reflect 对象，是为了操作对象而提供新的 API。
设计目的：

- 将 Object 对象上明显属于语言内部的方法（Object.defineProperty）放到 reflect 上。同时在 Object 和 reflect 对象上获取语言内部的方法。
- 修改某些 Object 方法返回的结果，使其更加合理。（Object.defineProperty 无法定义属性时会抛出错误，reflect.defineProperty 返回 false）
  **未来 Object 上语言方法将会被废除，以后要开始使用 Reflect 上语言方法。**
