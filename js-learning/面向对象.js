// 类的写法


// es6 之前的写法
// function Point(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   Point.prototype.toString = function () {
//     return '(' + this.x + ', ' + this.y + ')'
//   }


// es6 的写法
// class Point {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }

//     toString() {
//       return '(' + this.x + ', ' + this.y + ')';
//     }
// }



// 静态属性和方法
class Calculator {
    // 静态属性（ES2022+）
    static PI = 3.14159;
    static version = '1.0';

    // 普通实例属性
    result = 0;

    // 静态方法
    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }

    // 静态方法可以访问静态属性
    static getCircleArea(radius) {
        return this.PI * radius * radius;
    }

    // 静态方法不能直接访问实例属性和方法
    static invalidMethod() {
        // 错误：this.result 是实例属性，静态方法中无法直接访问
        // return this.result;
    }

    // 实例方法可以通过类名访问静态成员
    instanceMethod() {
        // 通过类名访问静态属性和方法
        console.log(Calculator.PI);
        console.log(Calculator.add(5, 3));
    }
}

// 使用静态成员
console.log(Calculator.PI); // 3.14159
console.log(Calculator.version); // "1.0"
console.log(Calculator.add(5, 3)); // 8
console.log(Calculator.getCircleArea(2)); // 12.56636


// 私有属性和方法
// class Person {
//     // 公共属性
//     name
//     age
//     #weight

//     constructor(name, age, weight) {
//         this.name = name
//         this.age = age
//         this.#weight = weight
//     }

//     getWeight() {
//         return this.#weight
//     }

//     setWeight(value) {
//         this.#weight = value
//     }
// }

// const person = new Person('张三', 20, 70)
// console.log(person.getWeight())
// person.setWeight(80)
// console.log(person.getWeight())



// 封装：数据和方法
class phone {
    // 公共属性
    brand
    price
    color
    battery

    constructor(brand, price, color) {
        this.brand = brand
        this.price = price
        this.color = color
        this.battery = 100 // 初始电量设为100
    }

    // 获取电量的公共方法
    getBattery() {
        return this.battery
    }

    // 设置电量的公共方法
    setBattery(value) {
        if (value >= 0 && value <= 100) {
            this.battery = value
        }
    }

    call() {
        console.log('打电话')
        this.battery -= 2
    }

    sendMessage() {
        console.log('发短信')
        this.battery -= 1
    }
}

// 继承(继承了父类的所有属性和方法 还可以添加自己的属性和方法)   
class smartPhone extends phone {

    constructor(brand, price, color) {
        super(brand, price, color)
    }

    // 重写父类的方法(多态)
    sendMessage() {
        console.log('发微信信息')
        this.setBattery(this.getBattery() - 2)
    }

    playGame() {
        console.log('玩游戏')
        this.setBattery(this.getBattery() - 10)
    }
}



const phone1 = new smartPhone('小米', 1999, '黑色')
phone1.call()
phone1.sendMessage()
phone1.playGame()
console.log(phone1.getBattery())

// 简单理解就是原型组成的链，对象的__proto__它的是原型，而原型也是一个对象，也有__proto__属性，原型的__proto__又是原型的原型，就这样可以一直通过__proto__想上找，这就是原型链，当向上找找到Object的原型的时候，这条原型链就算到头了
// 只有函数有prototype,对象是没有的。

// 原型与原型链
console.log(phone1.__proto__)
console.log(phone.prototype === smartPhone.prototype.__proto__)
console.log(smartPhone.prototype.__proto__ === phone.prototype)


// 原型链的终点
console.log(phone1.__proto__.__proto__.__proto__)


// new 运算符的执行过程
// 1. 创建一个空对象
// 2. 将空对象的__proto__指向构造函数的prototype
// 3. 将空对象作为构造函数的上下文(this)
// 4. 执行构造函数
// 5. 返回这个对象

// function myNew(fn,...args){
//     const obj = {}
//     obj.__proto__=fn.prototype
//     const res=fn.apply(obj,args)
//     return res instanceof Object?res:obj
// }
//
// const obj=myNew(phone,'小米',1999,'黑色')
// console.log(obj)



// instanceof 运算符的执行过程
// 1. 获取构造函数的prototype
// 2. 获取对象的__proto__
// 3. 比较__proto__和prototype
// 4. 如果相等，返回true
// 5. 如果不相等，将__proto__指向__proto__.__proto__，重复第3步
// 6. 如果找到Object的原型，返回false
function myInstanceof(obj,fn){
    let prototype=obj.__proto__
    while(prototype!==fn.prototype){
        if(prototype!==null){
            prototype=prototype.__proto__
        }else{
            return false
        }
    }
    return true
}

console.log(myInstanceof([1,2,3],Array))



