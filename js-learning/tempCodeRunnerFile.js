// call
// Function.prototype.mycall=function(context,...args){
//     context=context||window
//     context.fn=this
//     var res=context.fn(...args)
//     delete context.fn
//     return res
// }
// say.mycall(obj,'bob',24)



// // apply
// Function.prototype.myapply=function(context,...args){
//     context=context||window
//     context.fn=this
//     // console.log(args)
//     let res
//     if(args.length){
//         res=context.fn(...args[0])
//     }else{
//         res=context.fn()
//     }
//     delete context.fn
//     return res
// }
// say.myapply(obj,['bob',24])

// // bind
// Function.prototype.mybind=function(context,...args1){
//     if(typeof this!=='function') throw new TypeError('not a function!')
//     let self=this
//     return function boundFn(...args2){
//         console.log(args2)
//         if(this instanceof boundFn){
//             return self(...args1,...args2)
//         }
//         return self.apply(context,[...args1,...args2])
//     }
// }
// const showName=say.bind(obj)
// showName('hello',34)

