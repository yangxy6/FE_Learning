# Set,Map,WeakSet,WeakMap

## 集合(Set)

1. ES6 新增的一种新的数据结构，类似于数组，但成员是唯一且无序的，没有重复的值。
2. **Set 本身是一种构造函数，用来生成 Set 数据结构。** `new Set([iterable])`
3. Set 对象允许你储存任何类型的唯一值，无论是原始值或者是对象引用。
4. 向 Set 加入值的时候，不会发生类型转换，所以 5 和"5"是两个不同的值。Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===），主要的区别是**NaN 等于自身，而精确相等运算符认为 NaN 不等于自身。**另外，两个对象是不相等的。
5. Set 实例属性和方法

   - 属性
     - constructor： 构造函数
     - size：元素数量
   - 方法
     - add(value)：新增，返回 Set 结构本身
     - delete(value)：删除，返回布尔值，表示是否删除成功
     - has(value)：返回布尔值，表示参数是否是 Set 成员
     - clear()：清空集合，没有返回值
   - 遍历（keys，values，entries 都是返回遍历器对象，Set 结构没有键名，只有键值（或者说键名和键值是同一个值））
     - keys()：返回一个包含集合中所有键的迭代器
     - values()：返回一个包含集合中所有值得迭代器，同 keys()，**默认遍历器生成函数，意味着可以省略 values()直接用 for...of 循环遍历**
       `for (let x of Set){console.log(x)}`
     - entries()：返回一个包含 Set 对象中所有元素得键值对迭代器
     - forEach(callbackFn, thisArg)：用于对集合成员执行 callbackFn 操作，如果提供了 thisArg 参数，回调中的 this 会是这个参数，没有返回值
   - 应用
     - for...of
     - 扩展运算符(...)内部使用 for...of，也可以用于 Set 结构
     - 数组的 map 和 filter
     ```
        let set = new Set([1, 2, 3])
        set = new Set([...set].map(item => item \* 2))
        console.log([...set]) // [2, 4, 6]
        set = new Set([...set].filter(item => (item >= 4)))
        console.log([...set]) //[4, 6]
     ```

## WeakSet

1. WeakSet 对象允许你将**弱引用对象**储存在一个集合中
2. WeakSet 与 Set 的区别：
   - WeakSet 只能储存对象引用，不能存放值，而 Set 对象都可以
   - WeakSet 对象中储存的对象值都是被弱引用的，即垃圾回收机制不考虑 WeakSet 对该对象的应用，如果没有其他的变量或属性引用这个对象值，则这个对象将会被垃圾回收掉（不考虑该对象还存在于 WeakSet 中），所以，WeakSet 对象里有多少个成员元素，取决于垃圾回收机制有没有运行，运行前后成员个数可能不一致，遍历结束之后，有的成员可能取不到了（被垃圾回收了），WeakSet 对象是无法被遍历的（ES6 规定 WeakSet 不可遍历），也没有办法拿到它包含的所有元素。
3. 属性与方法
   - 属性
     - constructor：构造函数，任何一个具有 Iterable 接口的对象，都可以作参数
   - 方法
     - add(value)：在 WeakSet 对象中添加一个元素 value
     - has(value)：判断 WeakSet 对象中是否包含 value
     - delete(value)：删除元素 value
4. 应用
   - 存储 DOM 节点，不用担心节点从文档中移除时引发内存泄露（是指程序中己动态分配的堆内存由于某种原因程序未释放或无法释放，造成系统内存的浪费，导致程序运行速度减慢甚至系统崩溃等严重后果。）

# Map （字典）

1. Map 数据结构，类似对象也是键值对的集合，但是各种类型（包括对象）都可以作为“键”。Map 结构是“值-值”，一种更完善的 Hash 结构实现。（对象本质上是键值对的集合（Hash 结构），但是只能用字符串作为键，带来了很大的限制）
2. 不只是数组，**任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构**都可以当作 Map 构造函数的参数。Set 和 Map 都可以用来生成新的 Map。

```
const set = new Set([
  ['foo', 1],
  ['bar', 2]
]);
const m1 = new Map(set);
m1.get('foo') // 1

const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
m3.get('baz') // 3
```

3. 注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。

```
const map = new Map();

map.set(['a'], 555);
map.get(['a']) // undefined
```

上面代码的 set 和 get 方法，表面是针对同一个键，但实际上这是两个值，内存地址是不一样的，因此 get 方法无法读取该键，返回 undefined。

4. 由上可知，Map 的键实际上是跟内存地址绑定的，**只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞（clash）的问题**，我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。

如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，比如 0 和-0 就是一个键，布尔值 true 和字符串 true 则是两个不同的键。另外，undefined 和 null 也是两个不同的键。虽然 NaN 不严格相等于自身，但 Map 将其视为同一个键。

5. 属性和方法

- 属性
  - constructor：构造函数
  - size：返回字典中所包含的元素个数
- 方法
  - set(key, value)：向字典中添加新元素
  - get(key)：通过键查找特定的数值并返回
  - has(key)：判断字典中是否存在键 key
  - delete(key)：通过键 key 从字典中移除对应的数据
  - clear()：将这个字典中的所有元素删除
- 遍历
  - Keys()：将字典中包含的所有键名以迭代器形式返回
  - values()：将字典中包含的所有数值以迭代器形式返回
  - entries()：返回所有成员的迭代器，**默认遍历器接口**
  - forEach()：遍历字典的所有成员

6. 数据转换

   1. Map 转 Array

   ```
   const map = new Map([[1, 1], [2, 2], [3, 3]])
   console.log([...map]) // [[1, 1], [2, 2], [3, 3]]
   ```

   2. Array 转 Map

   ```
   const map = new Map([[1, 1], [2, 2], [3, 3]])
   console.log(map) // Map {1 => 1, 2 => 2, 3 => 3}
   ```

   3. Map 转 Object

   因为 Object 的键名都为字符串，而 Map 的键名为对象，所以转换的时候会把非字符串键名转换为字符串键名。

   ```
   function mapToObj(map) {
       let obj = Object.create(null)
       for (let [key, value] of map) {
           obj[key] = value
       }
       return obj
   }
   const map = new Map().set('name', 'An').set('des', 'JS')
   mapToObj(map) // {name: "An", des: "JS"}
   ```

   4. Object 转 Map

   ```
   function objToMap(obj) {
       let map = new Map()
       for (let key of Object.keys(obj)) {
            map.set(key, obj[key])
       }
       return map
   }

   objToMap({'name': 'An', 'des': 'JS'}) // Map {"name" => "An", "des" => "JS"}
   ```

   5. Map 转 JSON

   ```
   function mapToJson(map) {
       return JSON.stringify([...map])
   }

   let map = new Map().set('name', 'An').set('des', 'JS')
   mapToJson(map) // [["name","An"],["des","JS"]]
   ```

   6. JSON 转 Map

   ```
   function jsonToStrMap(jsonStr) {
    return objToMap(JSON.parse(jsonStr));
   }

   jsonToStrMap('{"name": "An", "des": "JS"}') // Map {"name" => "An", "des" => "JS"}
   ```

## WeakMap

1. WeakMap 对象是一组键值对的集合，其中的键是弱引用对象，而值可以是任意。
2. Map 与 WeakMap 区别

- WeakMap 只接受对象作为键名（null 除外），不接受其他类型的值作为键名。
- 键名所指向的对象不介入垃圾回收机制。WeakMap 设计目的在于，有时候我们想在某个对象上存放一些数据，但是会形成对某个对象的引用。容易造成内存泄露。可以应用于 DOM 元素添加数据

3. **注意，WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。**
4. 属性和方法

- 属性
  - constructor：构造函数
- 方法
  - has(key)：判断是否有 key 关联对象
  - get(key)：返回 key 关联对象（没有则则返回 undefined）
  - set(key)：设置一组 key 关联对象
  - delete(key)：移除 key 的关联对象

5. 应用

- DOM 节点作为键名的场景
- 部署私有属性

## 总结

- Set
  - 成员唯一、无序且不重复
  - [value, value]，键值与键名是一致的（或者说只有键值，没有键名）
  - 可以遍历，方法有：add、delete、has
- WeakSet
  - 成员都是对象
  - 成员都是弱引用，可以被垃圾回收机制回收，可以用来保存 DOM 节点，不容易造成内存泄漏
  - 不能遍历，方法有 add、delete、has
- Map
  - 本质上是键值对的集合，类似集合
  - 可以遍历，方法很多可以跟各种数据格式转换
- WeakMap
  - 只接受对象作为键名（null 除外），不接受其他类型的值作为键名
  - 键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的
  - 不能遍历，方法有 get、set、has、delete
