


//柯里化（Currying） 是一种将接受多个参数的函数转化为一系列接受单一参数的函数的技术。简单来说，柯里化将一个多参数函数拆解成一系列嵌套的函数，每个函数只接受一个参数。
// 
// 柯里化的基本思想
// 柯里化将一个函数的多个参数转化为一系列接收一个参数的函数，每次传入一个参数，返回一个新函数，直到所有参数都传入后才执行最终的函数逻辑。
// function curring(fn,...args1){
//     if(args1.length>=fn.length){
//         return fn(...args1)  
//     }else{
//         return (...args2)=>curring(fn,...args1,...args2)
//     }
// }

function curring(fn,...args1){
    if(fn.length<=args1.length){
        return fn(...args1)
    }else{
        
        return (...args2)=>curring(fn,...args1,...args2)
        
    }
}

const add = (a, b, c) => a + b + c;

console.log(curring(add)(1)(2)(3)) //6
console.log(curring(add)(1,2)(3))