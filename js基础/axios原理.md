1. axios特性
- 从浏览器中创建 XMLHttpRequests
- 从node.js创建 http 请求
- 支持 Promise API
- 拦截请求和响应转换请求数据和响应数据
- 取消请求
- 自动转换JSON 数据
- 客户端支持防御 XSRF
2. axios原理
axios还是属于 XMLHttpRequest，因此需要实现一个ajax。或者基于http 。
还需要一个promise对象来对结果进行处理。
3. axios核心
> 其核心只有两点：
> - request方法，Axios外部方法其实都是在调用这一个方法
> - 方法内部创建一个Promise链式调用，常用的功能，拦截器，数据修改器，http请求，就是在这个Promise链式调用中逐步被执行。request方法返回Promise链。我们用的就是这个返回的Promise，执行结果就在这个Promise中的状态值中。
