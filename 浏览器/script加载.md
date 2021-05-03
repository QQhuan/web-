1. script文件之间的加载是串行还是并行？

   并行下载，如下图（各个script文件之间没有设置什么属性），可以看出谷歌下载各个文件时并行下载的，另外，script文件的执行是顺序执行，而且是边编译边执行的，以上两点在谷歌和Edge上都是一样的。

![image-202104231024334、35](C:\Users\88\AppData\Roaming\Typora\typora-user-images\image-20210423102433435.png)

![image-20210423102953325](C:\Users\88\AppData\Roaming\Typora\typora-user-images\image-20210423102953325.png)

2. script文件的defer和async属性

   defer、async都是并行下载文件，设置defer属性的脚本会在下载完文件间顺序执行，设置async属性的脚本会在各个脚本下载完之后立即执行（即：各个脚本执行顺序随机，只要下载完了就可以先执行），至于两个属性一起写的情况，跟async没什么区别（我自己没测，来自网上博客）