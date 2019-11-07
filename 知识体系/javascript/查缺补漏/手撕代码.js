/**
 * 实现new
 * @param {*} ctor
 * @param  {...any} arg
 * 1. 实例可以访问私有属性
 * 2. 实例可以访问构造函数原型（constructor.prototype）所在原型上的属性
 */
function newOperator(ctor, ...arg) {
  if (typeof ctor !== 'function') {
    throw '必须是函数！';
  }
  let obj = Object.create(ctor.prototype);
  let res = ctor.apply(obj, args);

  let isObject = typeof res === 'object' && typeof res !== null;
  let isFunction = typeof res === 'function';
  return isObject || isFunction ? res : obj;
}

// 参考文章 - [ ] [各种源码实现，你想要的这里都有](https://juejin.im/post/5dc3894051882517a652dbd7)
// [20道JS原理题助你面试一臂之力！](https://juejin.im/post/5d2ee123e51d4577614761f8?utm_source=gold_browser_extension#heading-6)
