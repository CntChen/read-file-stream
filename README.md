# read-file-stream
> 大文件流式分行处理

## 背景
做数据(日志)统计的时候, 需要读入日志文件, 有时文件会很大(几个G), 导致全部读入 node 爆内存.

我们注意到, 日志其实是分行分割的, 所以只要使用流读取和逐行处理. 处理完后只存储统计结果, 就可以完成统计.

## 用法

* 读取文件

在 `index.js` 中修改要读取的文件名称.
```js
const fileName = path.join(__dirname, './test.txt');
```

* 逐行处理

在 `analyze.js` 中完善你需要的逐行统计函数和输出函数.
```js
function dealOneLine(oneLine) {
    ...
    // 这里开始处理一行数据
    // console.log(oneLine);
}

function logResult() {
    console.log('统计完毕, 开始输出结果:');
    ...
}
```

## EOF
