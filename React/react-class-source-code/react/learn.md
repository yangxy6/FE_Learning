# 源码解读顺序
React.js入口-> ReactElement.js
createElement->ReactElement
# 涉及知识点
### 1、Object.freeze()
Object.freeze()可以冻结一个对象，被冻结的对象不能再被做任何的修改，不能添加删除修改属性，原型也不能被修改。
```
const obj = {
  props: 43,
};
Object.freeze(obj);
obj.props = 55;
console.log(obj.props); // 43
```
参考链接：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

# 2.4 Component
React.js入口-> ReactBaseClasses.js
## 解析
Component就是一个壳子，prototype上主要方法setState实现在react-dom中
PureComponent继承Component，唯一标识是否是纯组件isPureReactComponent为true

# 2.5 react-ref：获取真实dom
## 三种使用方式
```
export default class RefDemo extends React.Component {
  constructor() {
    super();
    this.objRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.refs.stringRef.textContent = 'string ref got';
      this.methodRef.textContent = 'method ref got';
      this.objRef.current.textContent = 'obj ref got';
    }, 1000);
  }

  render() {
    return (
      <>
        {/* 第一种 即将废弃 react16前使用最多的*/}
        <p ref='stringRef'>span1</p>
        {/* 第二种 传入一个方法*/}
        <p ref={ele => (this.methodRef = ele)}>span3</p>
        {/* 第三种方法调用创建React.createRef() */}
        <p ref={this.objRef}>span3</p>
      </>
    );
  }
}
```
### 顺序
React.js入口-> ReactCreateRef.js
### Object.seal()
Object.seal()密封一个对象，不能添加和删除属性，但是可以修改属性值。
```
const object1 = {
  property1: 42
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// expected output: 33

delete object1.property1; // cannot delete when sealed
console.log(object1.property1);
// expected output: 33
```
参考链接：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)

# 2.6 forwardRef
### 使用
```
const TargetComponent = React.forwardRef((props, ref) => <input type='text' ref={ref} />);
// functionComponet上不能实例，例如redux中高阶组件，为了获取自己写的实例可以使用React.forwardRef
// React.forwardRef给包装组件使用的
// const TargetComponent = props => <input type='text' />;
export default class Comp extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.ref.current.value = 'ref get input';
  }

  render() {
    return <TargetComponent ref={this.ref} />;
  }
}
```
### 顺序
React.js入口-> forwardRef.js

# 2.7 context
两种方式：
- childContextType(React17即将废弃)
- createContext
为什么会出现新的API，因为老的对下层所有组件影响比较大，性能损耗多
```
// 老的方式-需要声明
Child2.contextTypes = {
  value: PropTypes.string,
  a: PropTypes.string
};

Parent.childContextTypes = {
  value: PropTypes.string,
  a: PropTypes.string
};
// 新的方式
const { Provider, Consumer } = React.createContext('defaultValue')

const ProviderComp = (props) => (
  <Provider value={'realValue'}>
    {props.children}
  </Provider>
)

const ConsumerComp = () => (
  <Consumer>
    {(value) => <p>{value}</p>}
  </Consumber>
)
```
### 顺序
React.js入口-> ReactContext.js

# 2.8 ConcurrentMode(React16)
渲染优先级，一个优先级调度
```
// demo
// 强制执行使用优先级最高方式进行更新，因为this.setState和渲染都是低优先级渲染
import { flushSync } from 'react-dom'
if (this.state.async) {
  // 优先级低，更新慢
  this.setState({
    num: newNum,
  })
} else {
  // 优先级高，立马更新
  flushSync(() => {
    this.setState({
      num: newNum,
    })
  })
}
 <ConcurrentMode>
    <Parent />
  </ConcurrentMode>
```
### 顺序
React.js入口->shared/ReactSymbols
### 解析
实际源码中主要是一个symbol！！！
```
// ??? ConcurrentMode组件是一个symbol标志位，有点懵
React.ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
export const REACT_CONCURRENT_MODE_TYPE = hasSymbol
  ? Symbol.for('react.concurrent_mode')
  : 0xeacf;
```

# 2.9 Suspense and lazy 
Suspense：处理异步数据加载
lazy：加载异步组件
#### 顺序
react.js入口->ReactLazy.js和shared/ReactSymbols
### 解析
Suspense和ConcurrentMode一样源码是一个symbol
lazy是一个方法，参数是一个拥有promise的，返回一个LazyComponent，其中status记录Thenable状态，有0,1,2三个标志位，1->pending，result记录promise结果

# 2.10 Hooks 
```
 const [name, setName] = useState('jokcy');

<>
  <p>My Name is: {name}</p>
  <input type='text' value={name} onChange={e => setName(e.target.value)} />
</>
```
useState：模拟使用状态
useEffect：模拟使用生命周期
hooks出现原因：funtional Compoent中既没有this，也没有生命周期

# Children
  Children: {
    map, // 返回一个新数组，map方法将数组拍平->[child1,1,1,2,2,2]
    forEach,
    count,
    toArray,
    only,
  }

# others
## momo
为了实现跟pureComponent一样
## Fragment
当返回单个节点时不用增加一层dom节点，Fragment节点没有任何意义，用于渲染
## StrictMode
所有节点按照某种模式，例如API过时提醒


