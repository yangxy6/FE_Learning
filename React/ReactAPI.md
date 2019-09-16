# React.Component 类组件

- 必须有 render()函数
- 生命周期
  - 挂载
    - constructor()
    - getDerivedStateFromProps()
    - render()
    - componentDidJMount()
    - componentWillMount()——即将废弃
  - 更新
    - getDerivedStateFormProps()
    - shouldComponentUpdate()：返回 false，不会调用 render()
    - render()
    - getSnapshotBeforeUpdate()
    - componentDidUpdate()
    - componentWillUpdate()——即将废弃
    - componentWillREceiveProps()——即将废弃
  - 卸载
  - componentWillUnmount()
  - 错误处理
  - getDerivedStateFromError()
  - componentDidCatch()
- render()
  - React 元素：<div>
  - 数组或者 fragments
  - Portals：可以渲染子节点到不同的 DOM 子树上
  - ReactDOM.createPortal( child,container)
    - 典型用例：当父组件 overflow:hidden 或 z-index 样式，需要子组件在视觉上跳出容器，例如对话框，悬浮框，提示框
  - 字符串或者数值：在 DOM 中被渲染为文本节点
  - 布尔或者 null：什么都不渲染，用于判断
- constructor()
  如果不初始化 state 或者方法绑定，则不需要为组件实现构造函数
  注意：避免 props 值赋值 state `this.state={color:props.color}`错误写法
- React.lazy
  lazy 函数能让你像渲染常规组件一样处理动态引入（的组件）
  `const OtherComponent = React.lazy(() => import('./OtherComponent'));` 渲染时才引入组件
  -Suspense（优先级）
  使用加载指示器为此组件做优雅降级
  接受 callback：组件加载中展示的元素'
- React.memo
  - 适用于函数组件，默认情况下只进行浅比较
  - 用于提高性能，当函数组件在相同 props 情况下渲染相同的结果时使用，也就是 React 将跳过渲染组件直接复用最近一次渲染的结果
  - React.memo(MyComponent,isEqual)其中 isEqual()可以控制对比过程
- React.StrictMode
  开启严格检查模式,任何部分都可以，例如`<React.StrictMode><ComponentOne /></React.StrictMode>`
- 副作用(side effect)：函数式编程中，与函数外部环境发生的交互都是副作用
  - 纯函数返回值由参数决定，多次调用返回结果一致，这种就没有副作 用，例如 map 函数
  - 改变全局变量或者变量
  - 发送一个 http 请求
  - console
  - DOM 查询
