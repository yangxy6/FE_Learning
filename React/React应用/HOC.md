## 高阶组件

高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性二形成的设计模式
**高阶组件是参数为组件，返回为新组件的函数。**

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

组件是将 props 转换为 UI，高阶组件是将组件转换为另一个组件。

## redux 的 connect

```js
// React Redux 的 `connect` 函数
const ConnectedComment = connect(
  commentSelector,
  commentActions
)(CommentList);

// 将函数分开后
// connect 是一个函数，它的返回值为另外一个函数。
const enhance = connect(
  commentListSelector,
  commentListActions
);
// 返回值为 HOC，它会返回已经连接 Redux store 的组件
const ConnectedComment = enhance(CommentList);
```

实际上，`connect`是一个返回高阶组件的高阶函数
**加强 compose:`compose(f, g, h) 等同于 (...args) => f(g(h(...args)))`**

```js
// 而不是这样...
const EnhancedComponent = withRouter(connect(commentSelector)(WrappedComponent));

// ... 你可以编写组合工具函数
// compose(f, g, h) 等同于 (...args) => f(g(h(...args)))
const enhance = compose(
  // 这些都是单参数的 HOC
  withRouter,
  connect(commentSelector)
);
const EnhancedComponent = enhance(WrappedComponent);
```

## 注意事项

### 1. 不要在 render 方法中使用 HOC

### 2. 需要复制静态方法（static）

### 3. Refs 不会被传递

高阶组件约定是将所有 props 传递给包装组件，但是 refs 不适用
因为 refs 不是 props，而是 react 单独处理的，将 ref 添加到 HOC 返回组件中，则 ref 是指向容器组件。
解决方案：React.forwardRef(16.3)

## 学习文章

- [x] [高阶组件](https://react.docschina.org/docs/higher-order-components.html#%E4%BD%BF%E7%94%A8%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6%EF%BC%88hoc%EF%BC%89%E8%A7%A3%E5%86%B3%E6%A8%AA%E5%88%87%E5%85%B3%E6%B3%A8%E7%82%B9)
- [x] [从 Mixin 到 HOC 再到 Hook](https://segmentfault.com/a/1190000018811476)
