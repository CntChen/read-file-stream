/*
 * 数据处理函数
 * @Author: CntChen
 * @Date: 2020-05-15
 */

// 统计数据定义在函数外部
// 数据行数
let lineCount = 0;

/**
 * 单行数据的处理
 *
 * @param {string} oneLine 一行数据
 * @param {boolean} [ignoreEmptyLine=true] 是否忽略空行
 */
function dealOneLine(oneLine, ignoreEmptyLine = true) {
    // 忽略空行
    if (ignoreEmptyLine && (oneLine.length === 0)) {
        return;
    }
    lineCount++;

    // 这里开始处理一行数据
    // console.log(oneLine);
}

/**
 * 处理结果输出
 */
function logResult() {
    console.log('统计完毕, 开始输出结果:');
    console.log('数据行数:', lineCount);
}


module.exports = {
    dealOneLine,
    logResult,
}
