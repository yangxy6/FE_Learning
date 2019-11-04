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
