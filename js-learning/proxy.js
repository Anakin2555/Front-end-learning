var star={
    name:'Billie Eilish',
    age:20,
    getAge:function(){
        return this.age
    }
}

var proxy=new Proxy(star,{
    get:function(target,prop){
        console.log('get '+prop)
        return target[prop]
    },
    set:function(target,prop,value){
        console.log('set '+prop)
        target[prop]=value
        return true
    }
})

proxy.age=21
proxy.hobby='sing'

console.log('--------------------------------')

var arr=[1,2,3,4,5]

// 使用Object.defineProperties来定义数组的迭代器,数组元素通过索引修改无法监听，且push等方法无法监听
var arr_object_define=Object.defineProperties(arr,{
    [Symbol.iterator]:{
        value:function(){
            console.log('iterator')
            return arr.values()
        }
    }
})

// 使用Proxy来监听数组元素的修改，能监听到数组元素的修改(通过索引修改,splice修改),可以监听到push等方法
var arr_proxy=new Proxy(arr,{
    get:function(target,prop){
        console.log('get '+prop)
        return target[prop]
    },
    set:function(target,prop,value){
        console.log('set '+prop)
        target[prop]=value
        return true
    }
})
arr_proxy[0]=100
console.log(arr)

console.log('--------------------------------')
const ref=function(target){
    let _value=target
    return{
        get value(){
            return _value
        },
        set value(value){
            _value=value
            console.log('set value')
        }
    }
}
const count=ref(100)
count.value=200
console.log(count.value)

console.log('--------------------------------')

