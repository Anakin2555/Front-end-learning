// 1. 默认绑定（非严格模式下是window，严格模式下是undefined）
function showThis() {
    console.log('默认绑定:', this);
}
showThis(); // window/undefined

// 2. 隐式绑定（谁调用指向谁）
const person = {
    name: 'John',
    show() {
        console.log('隐式绑定:', this.name);
    },
    // 多层嵌套
    child: {
        name: 'child',
        show() {
            console.log('隐式绑定-嵌套:', this.name);
        }
    }
};
person.show();           // "John"
person.child.show();     // "child"

// 3. 隐式丢失（常见坑点）
// 3.1 赋值给变量
const show = person.show;
show();  // undefined (this指向window)

// 3.2 回调函数
setTimeout(person.show, 100); // undefined (this指向window)

// 3.3 参数传递
function execute(fn) {
    fn();
}
execute(person.show); // undefined (this指向window)

// 4. 显式绑定（call、apply、bind）
function greet() {
    console.log('显式绑定:', this.name);
}

const person1 = { name: 'Tom' };
const person2 = { name: 'Jerry' };

// 4.1 call
greet.call(person1);     // "Tom"

// 4.2 apply
greet.apply(person2);    // "Jerry"

// 区别：call和apply都可以改变函数的this指向，但它们传递参数的方式不同。
// call方法接受一个或多个参数，第一个参数是this指向的对象，后续参数是函数的参数。
// apply方法接受两个参数，第一个参数是this指向的对象，第二个参数是一个数组，数组中的元素作为函数的参数。
// 例如：greet.call(person1, 'arg1', 'arg2'); 和 greet.apply(person2, ['arg1', 'arg2']);

// 4.3 bind（返回新函数，this永久绑定）
const greetTom = greet.bind(person1);
greetTom();             // "Tom"
greetTom.call(person2); // 仍然是 "Tom"（bind不可被覆盖）

// 5. new绑定
function Person(name) {
    this.name = name;
    console.log('new绑定:', this);
}
const person3 = new Person('Jack'); // this指向新创建的对象

// 6. 箭头函数（this由定义时的位置决定，而不是调用时）
const obj = {
    name: 'obj',
    // 普通函数
    sayHi() {
        setTimeout(function() {
            console.log('普通函数:', this.name); // undefined
        }, 100);
    },
    // 箭头函数
    sayHello() {
        setTimeout(() => {
            console.log('箭头函数:', this.name); // "obj"
        }, 100);
    }
};

obj.sayHi();
obj.sayHello();

// 7. 综合案例
const complex = {
    name: 'complex',
    // 箭头函数作为对象方法
    arrowMethod: () => {
        console.log('箭头函数作为方法:', this.name); // undefined
    },
    // 普通函数作为对象方法
    regularMethod() {
        // 这里的this指向complex对象
        const arrow = () => {
            console.log('嵌套箭头函数:', this.name); // "complex"
        };
        arrow();
    },
    // 混合使用
    mixed() {
        const self = this; // 保存this引用
        setTimeout(function() {
            console.log('保存this引用:', self.name); // "complex"
        }, 100);
    }
};

complex.arrowMethod();
complex.regularMethod();
complex.mixed();

// 8. 优先级
// new绑定 > 显式绑定 > 隐式绑定 > 默认绑定
function test(name) {
    this.name = name;
}

const bound = test.bind({ name: 'bind' });
const newBound = new bound('new'); // new优先级高于bind
console.log(newBound.name); // "new"
