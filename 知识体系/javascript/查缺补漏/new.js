function New(func) {
  var res = {};
  if (func.prototype !== null) {
    res._proto_ = func.prototype;
  }
  var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
  if ((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
    return ret;
  }
  return res;
}
