1. `bind`函数的实现

```js
Function.prototype.bind = function(thisArg){ //简易
    if(typeof this !== 'function'){
        throw new TypeError(this+"must be a function");
    }
	var _this = this; //存储调用bind的函数本身
	var args = [].slice.call(arguments, 1);
	var bound = function(){
		var arg = [].slice.call(arguments);
        var finalArg = args.concat(arg);
        if(this instanceof bound){ //是否是bound的一个实例，对于new的处理
            if(_this.prototype){ //有可能_this是个箭头函数
                function Empty() {}
                Empty.prototype = _this.prototype;
                bound.prototype = new Empty(); //new一个实例，防止bound的原型链修改影响到_this
            }
            var result = _this.apply(this, finalArg); //this指向new的实例
            var isObject = typeof result === 'object' && result !== null;
            var isFunction = typeof result === 'function';
            if(isObject || isFunction){
                return result;
            }
            return this;
        }else{
            return _this.apply(thisArg, finalArg);
        }       
 		return bound;
	}
};
```