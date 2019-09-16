Scheduler 整体流程
入口
ReactFiberScheduler.js

#SchedulerWork

- 找到更新对应的 FiberRoot 节点：
  render 时传入是 fiberRoot 节点，setState 时传入是组件的节点，需要找到 fiberroot 节点。
- 如果符合条件重置 stack
- 如果符合条件进行工作调度

每一次进入调度都是 rootFiber 从根节点开始更新。

# requestWork

- 加入到 root 调度队列
- 判断是否是批量更新
- 根据 expirationTime 判断调度类型

# batchedUpdates 批量更新

# reactSchedule

- 维护时间片
- 模拟 requestidleCallback：执行回调时，等浏览器有空闲时在调用，优先级比 requestAnimationFrame 低
- 调度列表和超时判断

## 时间片

一秒 30 帧，达到页面流畅，平均每 33 毫秒渲染一次
