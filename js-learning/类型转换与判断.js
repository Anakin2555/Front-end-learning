// 1. typeof 操作符
console.log(typeof 42);           // "number"
console.log(typeof 'hello');      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (历史遗留问题)
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"

// 2. instanceof 操作符
console.log([] instanceof Array);      // true
console.log({} instanceof Object);     // true
console.log(new Date() instanceof Date); // true

// 3. Object.prototype.toString
console.log(Object.prototype.toString.call(42));        // [object Number]
console.log(Object.prototype.toString.call('hello'));   // [object String]
console.log(Object.prototype.toString.call(true));      // [object Boolean]
console.log(Object.prototype.toString.call(null));      // [object Null]
console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
console.log(Object.prototype.toString.call([]));        // [object Array]
console.log(Object.prototype.toString.call({}));        // [object Object]

// 4. Array.isArray
console.log(Array.isArray([]));  // true
console.log(Array.isArray({}));  // false

// 5. 其他类型检查 isNaN
console.log('isNaN');         
console.log(isNaN('NaN'));         // true
console.log(Number.isNaN(+'2'));    // true
console.log(isNaN(NaN));         // true (注意isNaN会先尝试转换为数字)
console.log(Number.isNaN(NaN));  // true (ES6更安全的方法)
console.log(isFinite(Infinity));  // false



// 类型转换
// 1. 显式转换
// 转换为数字
console.log(Number('123'));      // 123
console.log(parseInt('123px'));  // 123
console.log(parseFloat('12.3')); // 12.3
console.log(+'123');             // 123

// 转换为字符串
console.log(String(123));        // "123"
console.log((123).toString());  // "123"
console.log('' + 123);           // "123"

// 转换为布尔值
console.log(Boolean(0));         // false
console.log(!!0);               // false
console.log(Boolean('hello'));  // true


// 2. 隐式转换
// 字符串拼接
console.log(1 + '2');           // "12"
console.log('3' + 4 + 5);       // "345"

// 数学运算
console.log('5' - 2);           // 3
console.log('5' * '2');         // 10
console.log('10' / '2');        // 5

// 比较运算
console.log('5' == 5);          // true
console.log('5' === 5);         // false
console.log(0 == false);        // true
console.log(0 === false);       // false





// 3. 特殊转换案例
console.log(+'');               // 0
console.log(+'  123  ');        // 123
console.log(+'123a');           // NaN
console.log(!!'');              // false
console.log(!!'0');             // true
console.log(!!{});              // true
console.log(!![]);              // true




// 4. 对象转换
const obj = {
    valueOf: () => 123,
    toString: () => 'object'
};

console.log(obj + 1);           // 124 (优先调用valueOf)
console.log(String(obj));        // "object" (优先调用toString)

