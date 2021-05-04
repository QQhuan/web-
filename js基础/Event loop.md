1. 事件轮询与DOM渲染

![image-20210504174448806](../imgs/eventloop.png)

> - 每次call stack清空之后，及同步任务执行完都是DOM重新渲染的机会，DOM结构如果有改变则会重新渲染
> - 之后再去出发下一次Event Loop

2. 