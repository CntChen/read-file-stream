/*
 * 大文件流式分行处理
 * @Author: CntChen
 * @Date: 2020-05-15
 */

const fs = require('fs');
const path = require('path');
const { dealOneLine, logResult } = require('./analyze');

console.log('开始文件处理.\n');
const fileName = path.join(__dirname, './test.txt');

// 创建读取文件流
const readStream = fs.createReadStream(fileName);

// 流分片数统计
let streamDataCount = 0;
// 上一次流尾部数据, 累计到下一个流头部, 避免一行数据不完整
let lastLine = '';

readStream.on('data', (data) => {
    streamDataCount++;
    console.log('当前处理的 block:', streamDataCount);

    const dataStr = data.toString();
    const lines = dataStr.split('\n');

    // 有上一次流外部数据, 则累计
    if (lastLine.length) {
        lines[0] = `${lastLine}${lines[0]}`;
    }
    // 获取这次流尾部数据
    lastLine = lines.pop();

    // 单次一行处理
    lines.forEach(oneLine => {
        dealOneLine(oneLine);
    });
});

readStream.on('end', () => {
    // 继续处理最后一行
    dealOneLine(lastLine);

    // 开始输出结果
    logResult();

    console.log('\n结束文件处理.');
});
