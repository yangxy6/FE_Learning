# React 源码解析 16.6

## commitRoot

commitRoot 不可以被中断，要尽可能少的进行 commit。三个流程：

1. 准备工作

- 全局变量 isWorking=true,isCommiting=true
- 标记优先级
- finishedWork 上自己如果也有副作用，要更新 effectlist

2. 三个循环

- commitBeforeMutationLifecycles
- commitAllLifeCycles
- commitAllLifeCycles

3. 善后工作

- 全局变量：finishedWork=null,expirationTime=较小的 expirationTime
- 再次循环->因为执行生命周期中可能会出现新的更新，所以要等到最后判断 legacyErrorBoundariesThatAlreadyFailed

## commitAllHostEffects

### commitResetTextContent（文字重置）

### commitDetachRef（Ref）

### commitPlacement（新增节点）

- getHostParentFiber（找到父节点）
- getHostSibling（获取要插入节点的前一个 dom 节点 before，fiber 节点不是每个都有 dom 节点，插入只能插在 dom 节点前面）
- 判断插入方式
- 一直循环直到返回 finishedWork 节点跳出循环

### commitWork（更新节点）

- ClassComponent（return，更新 dom 不涉及 react 节点）

      	- commitUpdate

      		- updateFiberProps

      			- instance[internalEventHandlersKey]

      		- updateProperties

      			- updateChecked（radio）
      			- updateDOMProperties（自定义元素）

      				- setValueForStyles（样式）
      				- setTextContent
      				- setValueForProperty

      			- updateWrapper（input、textarea、select）

- HostComponent

      	- commitTextUpdate

- return

      	- HostRoot
      	- Profiler
      	- SuspenseComponent

### commitDeletion（删除节点）

- unmountHostComponents（深度优先遍历）

      	- removeChildFromContainer（从container中，react节点中删除）
      	- removeChild（从父节点删除）

## commitAllLifeCycles

### ClassComponent

- componentDidMount（第一次渲染）
- componentDidUpdate（第一个循环中拿到\_\_reactInternalSnapshotBeforeUpdate 快照）
- commitUpdateQueue

      	- commitUpdateEffects（setState执行回调）

### HostRoot

- commitUpdateQueue

      	- commitUpdateEffects（render回调）

### HostComponent

- commitMount

      	- 处理input的focus

## commitBeforeMutationLifecycles

### commitBeforeMutationLifeCycles

- ClassComponent（只有 class 有生命周期）

  根据（finishedWork.effectTag & Snapshot）上有 Snapshot 这个副作用调用实例上 getSnapshotBeforeUpdate 声明周期

      	- getSnapshotBeforeUpdate

- HostRoot
- HostComponent
- HostText

## 结束
