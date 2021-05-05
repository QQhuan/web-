1. 对 BFC 规范（块级格式化上下文：block formatting context）的理解？
> - BFC是一个独立的布局环境，可以理解为一个容器，在这个容器中按照一定规则进行物品摆放，并且不会影响其它环境中的物品。
> - 如果一个元素符合触发BFC的条件，则BFC中的元素布局不受外部影响。

2. 如何创建`BFC`？
> - 根元素或包含根元素的元素
> - 浮动元素float＝left|right或inherit（≠none）
> - 绝对定位元素position＝absolute或fixed
> - display＝inline-block|flex|inline-flex|table-cell或table-caption
> - overflow＝hidden|auto或scroll(≠visible)

3. 简略回答
> BFC指的是块级格式化上下文，一个元素形成了BFC之后，那么它内部元素产生的布局不会影响到外部元素，外部元素的布局也不会影响到BFC中的内部元素。一个BFC就像是一个隔离区域，和其他区域互不影响。
>
> 一般来说根元素是一个BFC区域，浮动和绝对定位的元素也会形成BFC，display属性的值为inline-block、flex这些属性时也会创建BFC。还有就是元素的overflow的值不为visible时都会创建BFC。
