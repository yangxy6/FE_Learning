
// Object.freeze()
const obj = {
  props: 43,
};
Object.freeze(obj);
obj.props = 55;
console.log(obj.props); // 43
