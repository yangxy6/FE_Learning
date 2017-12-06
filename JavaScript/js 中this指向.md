### js中this指向问题

**this的指向在函数定义的时候是无法确定的，只有函数执行的时候才能确定this到底指向谁，实际this指向是调用他的对象。**

 1.栗子1
```javascript
function a(){
    var user = "小莹莹";
    console.log(this.user);//undefined
    console.log(this);//window
}
a();
// 等同于windiw.a()实际为window调用，还有alert()方法也是window对象
```
2.栗子2
```javascript
var obj = {
    user:"小莹莹",
    fn:function(){
        console.log(this.user);//小莹莹this指向是obj
    }
}
obj.fn();
```
3.栗子3
```javascript
var obj = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a);//12
        }
    }
}
o.b.fn();
```
4.栗子4
```javascript
var obj = {
    a:10,
    b:{
        //a:12,
        fn:function(){
            console.log(this.a);//undefined
        }
    }
}
o.b.fn
```
**当函数中包含多个对象时，this指向上一级的对象**
5.栗子5
```javascript
var obj = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a);//undefined
            console.log(this);//window
        }
    }
}
var j = o.b.fn;//o.b.fn赋给j时没有执行，只有方法，这时this已经指向window
j();
```
#### 总结：
1. 当使用fn()或者定义新对象赋给fn方法 var j =o.fn，this指向是window,alert()方法调用时window
2. 当对象直接调用方法时，obj.fn(),this指向当前调用的对象
3. 当函数调用时包含多个对象的时候，this指向上一级的对象，没有上一级对象为undefined