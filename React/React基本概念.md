### React基础概念

#### 一、React特点
* 声明式设计：采用声明范式
* 高效：React通过对DOM模拟，最大限度的减少与DOM交互。
* 灵活：React与其他框架良好配合。
* JSX：对JavaScript语法的扩展。
* 组件：组件复用化
* 单向响应的数据流

#### 二、React State（状态）
React把组件看成一个状态机。通过与用户的交互，实现不同的状态，然后渲染UI。

#### 三、React Props
父组件用来传递数据给子组件。
*Props验证*：验证使用propTypes,React.PropTypes提供很多验证器来验证传入数据是否生效，当向props传入无效数据时，JavaScript控制台会抛出警告。
`PropTypes:{title:React.PropTypes.string.isRequired}`

#### 四、React组件API
* 设置状态：setState
* 替换状态：replceState
* 设置属性：setProps
* 替换属性：replaceProps
* 强制更新：forceUpdate
* 获取DOM节点：findDOMNode
* 判断组件挂载状态：isMounted

1. setState(nextState,callback)
可以传入方法，当this.state更新后，总会触发一次组件的重绘。
2. replaceState(nextState,callback)
3. setProps(nextProps,callback)
4. replaceProps(nextProps,callback)
5. forceUpdate()
尽量避免使用
6. findDOMNode()
返回值：DOM元素Element
获取表单字段的值和一些DOM操作时很有用。
7. isMounted
返回值：true或者false，表示组件是否已经挂载DOM中。该方法保证了setState()和forceUpdate()在异步场景下调用不会出错。

#### 五、React组件生命周期
主要是三个状态：

* 已经插入真实DOM
* 正在被重新渲染
* 已经移出真实DOM

*生命周期方法*：

* componentWillMount:在渲染前调用，在客户端也在服务端。
* componentDidMount:在第一次渲染后调用，只在客户端，之后组件已经生成对应的DOM结构，可以通过this.getDomNode()进行访问。可以在这个方法中调用setTimeOut,setInterval，或者发送AJAX请求（防止异步操作阻塞UI）
* componentWillReceiveProps:在组件接收到一个新的props时被调用。在初始化render时不会被调用。
* shouldComponentUpdate:返回一个布尔值，在接收到新的props或者state时被调用。在初始化时使用forceUpdate时不会被调用。
* componentWillUpdate:在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
* componentWDidUpdate:在组件完成更新后立即调用，在初始化时不用被调用。
* componentWillUnmount:在组件从DOM中移除的时候立刻被调用。









```javascript
function Button (props) {//Button组件
    return <button type="submit">{props.label}</button>;
}
ReactDOM.render(<Button label="Save" />,mountNode)
```