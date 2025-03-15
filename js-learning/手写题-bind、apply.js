


const obj={
    name:'anakin',
    age:12,
    sayHello(){
        console.log('name:'+this.name+' age:'+this.age)
    }
}

const obj2={name:'cc',age:15}

function say(name,age){
    this.name=name?name:this.name
    this.age=age?age:this.age
    console.log('name:'+this.name+' age:'+this.age)
}

// call
Function.prototype.mycall=function(context,...args){
    context=context||window
    context.fn=this
    var res=context.fn(...args)
    delete context.fn
    return res
}
say.mycall(obj,'bob',24)



// apply
Function.prototype.myapply=function(context,...args){
    context=context||window
    context.fn=this
    // console.log(args)
    let res
    if(args.length){
        res=context.fn(...args[0])
    }else{
        res=context.fn()
    }
    delete context.fn
    return res
}
say.myapply(obj,['bob',24])

// bind
Function.prototype.mybind=function(context,...args1){
    if(typeof this!=='function') throw new TypeError('not a function!')
    let self=this
    context = context || global; 
    return function boundFn(...args2){
        if(this instanceof boundFn){
            return new self(...args1,...args2)
        }
        return self.apply(context,[...args1,...args2])
    }
}

// 定义一个简单的函数用于测试
function greet(greeting, punctuation) {
    return `${greeting}, my name is ${this.name}${punctuation}`;
}

// 测试对象
const person = {
    name: 'Alice'
};

// 1. 测试普通绑定
const greetAlice = greet.mybind(person, 'Hello');
console.log(greetAlice('!')); // 输出: "Hello, my name is Alice!"

// 2. 测试绑定多个参数
const greetAliceWithExclamation = greet.mybind(person, 'Hi', '!');
console.log(greetAliceWithExclamation()); // 输出: "Hi, my name is Alice!"

// 3. 测试构造函数调用
class Person {
    constructor(name,age) {
        this.name=name
        this.age=age
    }
    introduce() {
        return `My name is ${this.name} and I am ${this.age} years old.`
    }
}


const BoundPerson = Person.mybind(null, 'Bob');
const bob = new BoundPerson(25);
console.log(bob.introduce()); // 输出: "My name is Bob and I am 25 years old."




