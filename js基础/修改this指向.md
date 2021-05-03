

```js
function bindThis(f, oTarget) {
    //方法一
    //return f.bind(oTarget);
    //方法二
    //return function(){
      //  return f.apply(oTarget, arguments);
    //}
    //方法三
    return function(...arguments){
        return f.call(oTarget, ...arguments);
    }
}
```

