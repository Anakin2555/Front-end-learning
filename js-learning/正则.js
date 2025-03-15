// 1. 创建正则表达式
const regex1 = /pattern/flags;  // 字面量形式
const regex2 = new RegExp('pattern', 'flags');  // 构造函数形式

// 2. 常用方法
// test() 方法
console.log(/hello/.test('hello world'));  // true

// exec() 方法
const match = /world/.exec('hello world');
console.log(match[0]);  // "world"
console.log(match.index);  // 6

// 字符串方法 match()
console.log('hello world'.match(/o/g));  // ["o", "o"]

// 字符串方法 replace()
console.log('hello'.replace(/l/g, 'L'));  // "heLLo"

// 字符串方法 split()
console.log('a,b,c'.split(/,/));  // ["a", "b", "c"]

// 3. 常用修饰符
// g - 全局匹配
// i - 忽略大小写
// m - 多行模式
// s - dotAll 模式（ES2018）
// u - Unicode 模式

// 4. 常见元字符
// \d - 数字 [0-9]
// \D - 非数字 [^0-9]
// \w - 单词字符 [A-Za-z0-9_]
// \W - 非单词字符
// \s - 空白符
// \S - 非空白符
// .  - 任意字符（除换行符）
// \b - 单词边界

// 5. 量词
// *  - 0次或多次
// +  - 1次或多次
// ?  - 0次或1次
// {n} - 正好n次
// {n,} - 至少n次
// {n,m} - n到m次
