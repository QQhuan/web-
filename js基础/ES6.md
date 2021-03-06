`const`实际上保证的，并不是变量的值不得改动，而是变量指向的那个**内存地址所保存的数据**不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，`const`只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

```javascript

Object.assign(Point.prototype, {
  toString(){},
  toValue(){}
});//Object.assign()方法可以很方便地一次向类添加多个方法。
Object.keys(obj)//得到键名的数组
Object.values(obj)//得到键值的数组
Object.entries(obj)//得到两个数组
```

