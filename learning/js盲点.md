# js 盲点 
## NaN
- NaN 是number类型
- NaN不等于NaN
- 可以用isNaN()方法判断
```
typeof NaN // "number"
NaN===NaN // false
isNaN(NaN) // true
```
## null
- null 是js语言设计缺陷，是object类型
- null 不是Object实例
```
typeof null // "object"
null instanceof Object // false
```
## Math.max()<Math.min()
当没有参数传给max()会返回-Infinity，min()同理
```
Math.max() // -Infinity
Math.min() // Infinity
Math.max()>Math.min() // false
```
## 018-045 = -19
- js数值遇到0开头会转换为八进制，遇到0X开头会转换为十六进制
- 八进制没有8,018会转换为十进制18（这有个疑问，为什么不会转换十六进制，console就是18）
所以 018-045 = 18（十进制）-045（八进制）= 18（十进制）-37（十进制）= -19（十进制）
