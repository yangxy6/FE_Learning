## 第 20 章——JSON

JSON 是一种数据格式。

### 语法

1. 简单值：必须使用双引号——"hello world"
2. 对象：

- 没有声明变量（没有变量概念）
- 没有末尾分号
- 必须加双引号

### 序列化

**在序列化对象时，所有函数及原型成员都会被有意的忽略，不会体现在结果中。另外值为 undefined 的任何属性也会跳过，结果中最终值都是有效 JSON 数据类型的实例属性。
JavaScript 对象和被序列化后的对象具有相同的属性，但是是两个独立的没有任何关系的对象。**

1. JSON.stringify 可以接收两个参数，能够更好控制 JSON 的序列化。

- 第一个参数：过滤器，可以是数组，也可以是函数
  - 数组：代表结果只过滤出数组中包含的属性
  - 函数：function(key,value){} 可以控制不同 key 返回的结果，**通过返回 undefined 删除属性**
- 第二个参数：字符串缩进
  - 数字：表示缩进空格数，最大是 10，大于 10 会转换为 10
  - 字符串：可以制表符（——）
- toJson（）方法：满足对自定义序列化需求。

```js
const book = {
  title: 'javascript',
  year: 2011
};
const JsonText = JSON.stringify(book, ['title']); //过滤器

const JsonText = JSON.stringify(book, function(key, value) {
  //过滤函数
  switch (key) {
    case 'title':
      return '红宝书';
    case 'year':
      return undefined; //删除year属性
    default:
      return value;
  }
});
```

2.  序列化对象的顺序

    1. 如果存在 toJson()方法并且能取得有效值，则调用次方法。否则，返回对象本身。
    2. 如果提供第二个参数过滤器，应用这个过滤器，传入函数过滤器的值是（1）返回的值
    3. 对（2）返回的每个值进行相应的序列化。
    4. 如果提供了第三个参数，执行相应的格式化。

### 解析选项

JSON.parse()：接收一个参数，是一个函数，将在每个键值对上调用，被称为还原函数。

```js
const bookCopy = function(key, value) {
  if (key === 'release') {
    return new Date(value);
  } else {
    return value;
  }
};
```
