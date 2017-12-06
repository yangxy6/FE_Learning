### 一、深拷贝与浅拷贝
深拷贝和浅拷贝只针对Object,Array这些复杂的引用对象。
浅拷贝，只复制对象的引用的地址，不会再内存中开辟新的栈内存，当改变原来obj的属性时，newObj的属性也会发生改变。
### 二、浅拷贝实现
```javascript
function shallowCopy (obj) {
            var newObj = {}
            for (var item in obj) {
                if (obj.hasOwnProperty(item)){
                    newObj[item] = obj[item]
                }
            }
            return newObj
        }
        var obj = {
            a:1,
            arr:[2,3]
        }
        var shallowObj = shallowCopy(obj)
        console.log(shallowObj)
        shallowObj.arr[1] = 10
        console.log(obj.arr[1])//同为10
```
### 三、深拷贝的实现
深拷贝是将原对象递归复制，在内存中开辟新的栈内存，原对象和深拷贝对象不再指向同一个地址。
两种办法，一是递归进行浅拷贝，二是JSON解析
**JSON复制：**优点简单，缺点无法复制函数，原型链没有了
```javascript
function deepCopy (obj) {
            var newObj = JSON.parse(JSON.stringify(obj))
            return newObj
        }
        var obj = {
            a:'1',
            test:{
                old:'小涛涛',
                new:'小莹莹'
            }
        }
        var deepObj = deepCopy(obj)
        console.log(deepObj)
        deepObj.test.old = '小二货'
        console.log(obj.test.old)//小涛涛
        console.log(deepObj.test.old)//小莹莹
```
```javascript
function deepCopy2 (obj) {
            var newObj2 = {}
            for (var i in obj) {
                if (typeof(obj[i]) === 'object' && obj[i].constructor === Object) {
                    newObj2[i] = {}
                    deepCopy2(obj[i])
                } else {
                    newObj2[i] = obj[i]
                }
            }
            return newObj2
        }
        function deepCopy2(p, c) {
    　　　　var c = c || {};
    　　　　for (var i in p) {
    　　　　　　if (typeof p[i] === 'object') {
    　　　　　　　　c[i] = (p[i].constructor === Array) ? [] : {};
    　　　　　　　　deepCopy2(p[i], c[i]);
    　　　　　　} else {
    　　　　　　　　　c[i] = p[i];
    　　　　　　}
    　　　　}
    　　　　return c;
    　　}
        var obj2 = {
            a:'1',
            test:{
                old:'小涛涛',
                new:'小莹莹'
            }
        }
        var deepObj2 = deepCopy2(obj2)
        console.log(deepObj2)
```