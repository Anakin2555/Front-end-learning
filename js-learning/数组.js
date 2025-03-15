// 示例数组
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange'];







// 1. 数组操作方法（改变原数组）
// push: 末尾添加元素，返回新长度
console.log(numbers.push(6));          // 6
console.log(numbers);                  // [1,2,3,4,5,6]

// pop: 删除末尾元素，返回删除的元素
console.log(numbers.pop());            // 6
console.log(numbers);                  // [1,2,3,4,5]

// unshift: 开头添加元素，返回新长度
console.log(numbers.unshift(0));       // 6
console.log(numbers);                  // [0,1,2,3,4,5]

// shift: 删除开头元素，返回删除的元素
console.log(numbers.shift());          // 0
console.log(numbers);                  // [1,2,3,4,5]

// splice: 任意位置增删改，返回删除的元素数组
console.log(numbers.splice(1, 2, 'a', 'b')); // [2,3]
console.log(numbers);                  // [1,'a','b',4,5]









// 2. 数组查找方法
// indexOf: 查找元素索引，未找到返回-1
console.log(fruits.indexOf('banana')); // 1

// includes: 检查是否包含元素，返回布尔值
console.log(fruits.includes('apple')); // true

// find: 查找符合条件的第一个元素
console.log(numbers.find(x => x > 3)); // 4

// findIndex: 查找符合条件的第一个元素的索引
console.log(numbers.findIndex(x => x > 3)); // 3






// 3. 数组转换方法
// join: 将数组转为字符串
console.log(fruits.join(', '));        // "apple, banana, orange"

// split: 将字符串转为数组（字符串方法）
const str = "a,b,c";
console.log(str.split(','));           // ['a','b','c']








// 4. 数组遍历方法

// forEach: 遍历数组
// 参数说明：
// callback: (currentValue, index, array) => void
//   - currentValue: 当前元素的值
//   - index: 当前元素的索引
//   - array: 原数组
// thisArg: 可选，callback 中 this 的指向
fruits.forEach((fruit, index, array) => {
    console.log(`${index}: ${fruit}`);
});

// 在数组原型上实现 forEach 方法
// 参数说明：
// callback: 回调函数，接收三个参数 (currentValue, index, array)
// thisArg: 可选，指定回调函数的 this 值
Array.prototype.myForEach = function(callback, thisArg) { 
    const array = this;
    const length = array.length;
    let index = 0;
    
    while (index < length) {
        if (index in array) {
            callback.call(thisArg, array[index], index, array);
        }
        index++;
    }
};

// map: 映射数组，返回新数组
// 参数说明：
// callback: (currentValue, index, array) => newValue
//   - currentValue: 当前元素的值
//   - index: 当前元素的索引
//   - array: 原数组
//   - 返回值: 映射后的新值
// thisArg: 可选，callback 中 this 的指向
// 返回值: 返回一个新数组，每个元素都是回调函数的返回值
const doubled = numbers.map((num, index, array) => num * 2);
console.log(doubled);                  // [2,4,6,8,10]

// filter: 过滤数组，返回新数组
// 参数说明：
// callback: (currentValue, index, array) => boolean
//   - currentValue: 当前元素的值
//   - index: 当前元素的索引
//   - array: 原数组
//   - 返回值: true 表示保留该元素，false 则过滤掉
// thisArg: 可选，callback 中 this 的指向
// 返回值: 返回一个新数组，包含所有回调函数返回 true 的元素
const filtered = numbers.filter((num, index, array) => num > 3);
console.log(filtered);                 // [4,5]

// reduce: 累加器
// 参数说明：
// callback: (accumulator, currentValue, index, array) => newAccumulator
//   - accumulator: 累加器，上一次调用回调函数的返回值
//   - currentValue: 当前元素的值
//   - index: 当前元素的索引
//   - array: 原数组
//   - 返回值: 新的累加器值
// initialValue: 可选，累加器的初始值
//   - 如果没有提供初始值，则使用数组的第一个元素
// 返回值: 最后一次调用回调函数的返回值
const sum = numbers.reduce((acc, cur, index, array) => acc + cur, 0);
console.log(sum);                      // 15






// 5. 数组排序方法
// sort: 排序数组（改变原数组）
const sorted = [3,1,4,1,5].sort((a,b) => a - b);
console.log(sorted);                   // [1,1,3,4,5]

// reverse: 反转数组（改变原数组）
console.log(numbers.reverse());        // [5,4,'b','a',1]






// 6. 数组复制和合并
// slice: 复制数组片段
console.log(fruits.slice(1, 2));       // ['banana']

// concat: 合并数组
const combined = fruits.concat(['grape', 'pear']);
console.log(combined);                 // ['apple','banana','orange','grape','pear']

// 扩展运算符
const combined2 = [...fruits, 'grape', 'pear'];
console.log(combined2);                // ['apple','banana','orange','grape','pear']





// 7. ES6+ 新增方法
// Array.from: 类数组转数组
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
console.log(Array.from(arrayLike));    // ['a','b']

// Array.isArray: 检查是否为数组
console.log(Array.isArray(fruits));    // true

// fill: 填充数组
const filled = new Array(3).fill(0);
console.log(filled);                   // [0,0,0]

// some: 检查是否有元素满足条件
console.log(numbers.some(x => x > 4)); // true

// every: 检查是否所有元素满足条件
console.log(numbers.every(x => x > 0)); // true

// flat: 数组扁平化
const nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat(2));           // [1,2,3,4,5,6]

// flatMap: 先map后flat
const sentences = ['Hello World', 'Good Morning'];
console.log(sentences.flatMap(x => x.split(' '))); 
// ['Hello','World','Good','Morning']







//数组去重几种方法

// set法最快
function removeDuplicate1(arr){
    const set=new Set()
    for(let x of arr){
        set.add(x)
    }
    return [...set]

}
// const newArr=[...new Set(arr)]

// map 法 第二快
function removeDuplicate2(arr){
    const map=new Map()
    return arr.filter((item,index)=>{
        if(map.has(item)) return false
        else map.set(item,1) 
        return true
    })
}

// reduce法 慢
function removeDuplicate3(arr){
    const newarr=arr.reduce((acc,cur)=>{
        return acc.includes(cur)?acc:[...acc,cur]
    },[])
    return newarr
}

// indexOf 法 慢
function removeDuplicate4(arr){
    return arr.filter((item,index)=>{
        return arr.indexOf(item)===index
    })
}
console.log(removeDuplicate1([1,2,1,2,3]))



// 数组filter实战
const arr=[{name:3,id:3},{name:2,id:2},{name:1,id:1},{name:'a',id:4}]
const newArr=arr.filter((item,index,array)=>{
    return typeof item.name==='number'
})
newArr.sort((a,b)=>a.id-b.id)
console.log(newArr)


// 数组最大深度 
function maxDepth(arr){
    let max=0
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            max=Math.max(max,maxDepth(arr[i]))
        }
    }
    return max+1
}

// 数组展平flat
function flat(arr){
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i] instanceof Array){
            result.push(...flat(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result
}   
console.log(flat([1,2,3,8,8,9,[4,5,[6,7]]]));







