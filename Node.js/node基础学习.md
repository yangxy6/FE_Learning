## Node.js

npx: 先寻找全局 node_modules，没有再从网络中寻找

### 特性

1. http
   http/https 模块
2. 文件读写
   fs 模块
3. 进程
   process

### nvm

安装命令：mac：`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash`

其中安装时 `0curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused`

[nvm 安装报错解决](https://github.com/hawtim/blog/issues/10)

nvm 命令

- nvm list 查看所有版本
- nvm use 版本
- nvm alias default 版本：设置默认版本

默认版本：控制所有进程，在当前 bash 中使用 nvm use 后当前 bash 版本会更改，在新进程中默认版本依旧是之前版本

### 安装依赖

查看依赖所有版本：npm view react versions

安装某个版本：npm i react@17.0.1

某个大版本：npm i react@17

### 版本号

17.0.2
major(主版本):17 minor(次版本):0 patch(更新):2

- ^:锁定主版本号
- ～:锁定主版本号和次版本号 \
- 空：锁定 patch
- \*：最新版本

npm outdated: 查看包过期
npm update:升级包（^2.0.0 实际 update 后 ）

### 自定义包

1. 初始化包描述文件
   npm init -y （-y,全 yes）

2. 新增 index.js 开发自己的模块

3. modules.exports 导出自己的模块

4. https://www.npmjs.com 注册账号

坑：403
一定要验证邮箱，npmjs 没有任何提示，验证邮件在注册后会收到，需要到邮箱中找到邮件手动验证！验证不通过 publish 会失败，还没有任何提示！！！

5. npm adduser

6. npm publish
