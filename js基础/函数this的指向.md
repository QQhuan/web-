1. 介绍一下`js`中的`this`？

   函数调用方式决定了`this`的值, 并在运行时绑定（大多数时候），并不能在执行期间被赋值

![this指向流程](../imgs/this指向.png)

> `this`无法指向类的静态方法，static只是类本身的属性

2. 派生类 中的`this`（来自`MDN`）

   不像基类的构造函数，派生类的构造函数没有初始的 `this` 绑定。在构造函数中调用 [`super()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super) 会生成一个 `this` 绑定，相当于：

   ```js
   this = new base();
   ```

   派生类不能在调用 `super()` 之前返回，除非其构造函数返回的是一个对象，或者根本没有构造函数。

   ```js
   class Base {} 
   class Good extends Base {}
   class AlsoGood extends Base {
     constructor() {
       return {a: 5};
     }
   }
   class Bad extends Base {
     constructor() {}
   }
   
   new Good();
   new AlsoGood();
   new Bad(); // ReferenceError
   ```

3. 原型链中的`this`

> 只受最接近的成员引用的影响

   例如：`a.b.c.f()` 方法中的`this`指向会指向`c`

4. `getter`和`setter`中的`this`

> 用作 getter 或 setter 的函数都会把 this 绑定到设置或获取属性的对象

```js
function sum() {
  return this.a + this.b + this.c;
}

var o = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3;
  }
};

Object.defineProperty(o, 'sum', {
    get: sum,  //用了get、set方法，value、writable不允许使用
    enumerable: true,   //枚举 
    configurable: true  //参数设置修改
});

console.log(o.average, o.sum); // logs 2, 6
```



5. 说说`call`与`apply`与`bind`的区别

- `apply`接受两个参数，第一个为对象（会有自动转化），第二个接受一个数组。`apply`调用后会立即执行一次，并且修改的`this`只能临时绑定一次
- `call`和`apply`相似，不同之处在于接收多个参数，除了第一个参数作为this指向的对象外，其余参数序列作为函数参数传入（同样立即执行仅临时绑定一次）
- `bind`和`call`相似，但参数列表可多次传入，改变`this`指向不会立即执行，返回一个永久改变`this`指向的函数
- 三者都可以改变函数的this对象指向。
- 三者第一个参数都是this要指向的对象，如果如果没有这个参数或参数为undefined或null，则默认指向全局window。
- 三者都可以传参，但是apply是数组，而call是参数列表，且apply和call是一次性传入参数，而bind可以分为多次传入。
- bind 是返回绑定this之后的函数，便于稍后调用；apply 、call 则是立即执行 

6. DOM里面的`this`

   指向触发事件的元素，当不使用`addEventListener`动态添加的时候不遵守这个约定

