// 示例
const now = new Date(); // 当前时间
const timestampDate = new Date(1633046400000); // 2021-10-01
const strDate = new Date('2023-10-01T08:00:00'); 
const paramDate = new Date(2023, 9, 1); // 2023年10月1日（月份9表示十月）




const date = new Date();

date.getFullYear()  // 2023（年）
date.getMonth()     // 9（十月，0-11）
date.getDate()      // 1（日）
date.getHours()     // 14（时）
date.getMinutes()   // 30（分）
date.getSeconds()   // 45（秒）
date.getMilliseconds() // 123（毫秒）
date.getDay()       // 0（周日）-6（周六）

date.getTime()      // 返回时间戳（毫秒）
Date.now()          // 当前时间戳（性能更好）