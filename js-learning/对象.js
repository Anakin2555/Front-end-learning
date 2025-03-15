
// 1. 属性简写
const nam = 'Tom';
const age = 18;

const person = {
    nam, // 等同于 name: name
    age, // 等同于 age: age

    // 方法简写
    sayHi() { // 等同于 sayHi: function() 
        console.log(`Hi, I'm ${this.name}`);
    }
};

// 2. 计算属性名
const key = 'dynamic_key';
const o = {
    [key]: 'value', // 动态属性名
    [`computed_${key}`]: 123 // 可以使用表达式
};

// 3. Object.assign() 对象合并
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

const result = Object.assign(target, source1, source2);
console.log(result); // { a: 1, b: 2, c: 3 }
console.log(target); // { a: 1, b: 2, c: 3 } target被修改

// 4. 对象解构
const user = {
    name: 'Alice',
    old: 20,
    address: {
        city: 'Beijing',
        street: 'Main St'
    }
};

// 基础解构
const { name: userName, old } = user;
console.log(userName); // 'Alice'
console.log(old); // 20

// 嵌套解构
const { address: { city } } = user;
console.log(city); // 'Beijing'

// 设置默认值
const { country = 'China' } = user;
console.log(country); // 'China'

// 5. 对象方法的 super 关键字
const pa = {
    sayHello() {
        return 'Hello from parent';
    }
};

const ch = {
    sayHello() {
        return super.sayHello() + ' and child';
    }
};

Object.setPrototypeOf(ch, pa);   
console.log(ch.sayHello()); // "Hello from parent and child"

// 6. Object.is() 比较
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false
console.log(Object.is(5, 5)); // true
console.log(Object.is({}, {})); // false

// 7. 对象的扩展运算符
const obj1 = { foo: 'bar', x: 42 };
const { foo, ...rest } = obj1;
console.log(foo); // 'bar'
console.log(rest); // { x: 42 }

// 对象合并
const merged = {...obj1, y: 123 };
console.log(merged); // { foo: 'bar', x: 42, y: 123 }

// 8. Object.entries() 和 Object.values()
const obj2 = { a: 1, b: 2, c: 3 };

// Object.values()
console.log(Object.values(obj2)); // [1, 2, 3]

// Object.entries()
console.log(Object.entries(obj2)); // [['a', 1], ['b', 2], ['c', 3]]

// 9. Object.fromEntries() (ES2019)
const entries = [
    ['name', 'Tom'],
    ['age', 18]
];
const objFromEntries = Object.fromEntries(entries);
console.log(objFromEntries); // { name: 'Tom', age: 18 }


// 11. 空值合并操作符 ?? (ES2020)
const value = null;
const defaultValue = value ?? 'default';
console.log(defaultValue); // 'default'

// 12. Object.getOwnPropertyDescriptors()
const obj3 = {
    get foo() { return 'foo' }
};

console.log(Object.getOwnPropertyDescriptor(obj3, 'foo'));
// {
//   get: [Function: get foo],
//   set: undefined,
//   enumerable: true,
//   configurable: true
// }



// 13. 对象的扁平化
var entry = {
    'a.b.c.dd': 'abcdd',
    'a.b.xx': 'abxx',
    'a.e': 'ae',
};

// 要求转换成如下对象
var output = {
    a: {
        b: {
            c: {
                dd: 'abcdd',
            },
        },
        d: {
            xx: 'adxx',
        },
        e: 'ae',
    },
};

function flatObject(obj){
    const result={}
    Object.keys(obj).forEach(key=>{

        let keys=key.split('.')
        let cur=result
        keys.forEach((item,index)=>{
            if(index===keys.length-1){
                cur[item]=obj[key]
            }else{
                cur[item]=cur[item]||{}
                cur=cur[item]
            }
        })
    })
    
    return result
}

console.log(flatObject(entry));
