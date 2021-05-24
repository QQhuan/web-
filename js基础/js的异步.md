1. `js`的异步
> - 回调函数
> - 事件监听
> - 发布/订阅
> - Promise对象

- 回调函数

  > ```js
  > function a(callback){
  >     setTimeout(function(){
  >         callback();
  >     }, 1000);
  >     console.log("a");
  > }
  > function b(){
  >     console.log("b");
  > }
  > a(b); //a b
  > ```
  >
  > 简答、容易理解实现，但是不利于阅读代码。

- 事件监听

  > ```js
  > document.getElementById("myBtn").addEventListner("click", function(){}); //不会覆盖，而是多个添加
  > removeEventListner()
  > ```

- 发布订阅

  > 我们假定，存在一个"信号中心"，某个任务执行完成，就向信号中心"发布"（publish）一个信号，其他任务可以向信号中心"订阅"（subscribe）这个信号，从而知道什么时候自己可以开始执行。这就叫做"发布/订阅模式"（publish-subscribe pattern），又称"观察者模式"（observer pattern）

  Promise/A+

  > 