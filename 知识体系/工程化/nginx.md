#### nginx
##### 一、Nginx介绍
Nginx是一款高性能的http 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器。由俄罗斯的程序设计师Igor Sysoev所开发，官方测试nginx能够支支撑5万并发链接，并且cpu、内存等资源消耗却非常低，运行非常稳定。
##### 二、使用场景
* http服务器。Nginx是一个http服务可以独立提供http服务。可以做网页静态服务器。
* 虚拟主机。可以实现在一台服务器虚拟出多个网站。例如个人网站使用的虚拟主机。
* 反向代理，负载均衡。当网站的访问量达到一定程度后，单台服务器不能满足用户的请求时，需要用多台服务器集群可以使用nginx做反向代理。并且多台服务器可以平均分担负载，不会因为某台服务器负载高宕机而某台服务器闲置的情况。
#### 三、大概原理

![原理图](http://upload-images.jianshu.io/upload_images/4952742-b6431e30e48ca762.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![图1](http://upload-images.jianshu.io/upload_images/4952742-80d84b5c7a22da62.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![图2](http://upload-images.jianshu.io/upload_images/4952742-e639484b550c93eb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



##### 四、前端为什么使用Nginx
[前端为什么使用nginx][1]
前端使用场景是为了使用反向代理解决跨域问题。
正向代理：客户端到服务端。
反向代理：服务端到服务端。（本地工程化，访问localhost:3000，代理到最终服务器上。localhost已经是本地客户端调的服务。）


  [1]: http://imweb.io/topic/56386972d12b230c26e1a17d