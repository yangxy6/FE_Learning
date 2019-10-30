# stack

1. 更新节点时相关信息入栈
2. 完成节点时相关信息出栈
3. 用不同的 cursor 记录不同的信息

## 源码

入口：ReactFiberStack.js

# 老的 Api——LegacyContext

会影响整个子树
嵌套的 context 数据需要合并（相同 key 需要会覆盖）beginWork中有hasLegacyContextChanged判断
对性能影响比较大

beginWork->updateClassComponent

updateClassInstance

completeWork->popLegacyContext
