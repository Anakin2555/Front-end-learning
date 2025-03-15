

const person={
    name:'写',
    age:23,
    
}


let a:number
let b:boolean
let c:string
let d:symbol
let e:object
a=9
console.log(person.name)


// 函数返回值也可以限制类型
function fn(a:number,b:number):number{
    return a+b
}

function fn2(){
    console.log('caonima')
    return 'a'
}

// 声明对象
let person1:{
    name:string,age?:number,[key:string]:any
}
person1={name:'anakin',gender:23}


// 声明函数
let count:(a:number,b:number)=>number
count=function(a,b){
    return a+b
}

// 声明数组
let arr:string[]
let arr2:Array<number>

arr=['a','b']
arr2=[100,200]

// 声明元组
let arr3:[string, number]
let arr4:[string, boolean?]
let arr5:[string, ...string[]] // 任意个


arr4=['hello']
arr5=['he','ef','ef']
arr3=['hello',12]


// 枚举
enum Direction{
    Up,
    Down,
    Left,
    Right
}

console.log(Direction.Up)

// type

type Area={
    height:number
    width:number
}
type Address={
    num:number
    cell:number
    room:string
}

// type House=Area|Address // 联合是指满足任意一个
type House=Area&Address // 交叉是指新增并集

const house:House={
    height:19,
    width:19,
    num:3,
    cell:4,
    room:'304'
}




type LogFunc=()=>void

const f1:LogFunc=function (){
    return 66
}

const f2:LogFunc=()=>55

// let x=f2()  // 虽然上面的函数不提示，但是返回的结果仍然不可用，

// 如果是undefined就可以发现错误
type LogFunc1=()=>undefined
// const f3:LogFunc1=()=>56



// 类与继承

class Person{
    name:String
    age:number
    constructor(name:String,age:number) {
        this.name=name
        this.age=age
    }
    protected getDetails(){
        return `我是${this.name}`
    }
    speak(){
        console.log(`我是${this.name},今年${this.age})`)
    }
}
  
class Student extends Person{
    grade:string
    constructor(name:String,age:number,grade:string) {
        super(name,age);
        this.grade=grade
    }

    // protected 修饰的属性可以在子类中访问
    protected getDetails(): string {
        return super.getDetails();
    }
}


// 属性修饰符 public protected 

let person_case=new Person('anakin',23)
// console.log(person_case.getDetails) protected 不能在类外访问


// 简写形式
/*
class Person1{
    constructor(public name:String,public age:number){}
}*/


// 接口

interface PersonInterface{
    name:string
    age:number
    speak(n:number):void
    run:(n:number) => void
}


class Person4 implements PersonInterface2{
    age: number=0
    name: string='anakin'
    speak(n: number): void {
        console.log(`我是${this.name}`)
    }
    run(n:number){
        console.log(n)
    }

    job: string='engineer';
    
}

// 接口之间还可以继承
interface PersonInterface2 extends PersonInterface{
    job:string
}



// 泛型，动态绑定类型

function logData<T,U>(data:T,data2:U){
    console.log(data)
}

logData<number,string>(23,'hello')
logData<string,boolean>('caonima',false)


