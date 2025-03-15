

// Promise

// ALL 所有成功返回结果数组，任一一个失败就reject
function PromiseAll(promises){
    return new Promise((resolve,reject)=>{
        let count=0
        let res=[]
        promises.forEach((item,index)=>{
            Promise.resolve(item).then((result)=>{
                res[index]=result
                count++
                if(count===promises.length){
                    resolve(res)
                }
            }).catch(reject)
        })
    })
}



// AllSettled 所有完成返回状态对象
function PromiseAllsettled(promises){

    return new Promise((resolve,reject)=>{
        let completedCount=0
        let res=[]
        promises.forEach((item,index)=>{
            Promise.resolve(item).then(value=>{
                res[index]={status:'fullfilled',value}
            }).catch(error=>{
                res[index]={status:'rejected',error}
            }).finally(()=>{
                completedCount++
                if(completedCount===promises.length){
                    resolve(res)
                }
            })
        })
    })
}



// 返回第一个完成的结果
function PromiseRace(promises){
    return new Promise((resolve,reject)=>{
        promises.forEach((item,index)=>{
            Promise.resolve(item).then(resolve).catch(reject)
        })
    })
}


// 返回第一个成功的结果,否则所有失败返回
function PromiseAny(promises){
    let errors=[]
    let rejectCount=0
    return new Promise((resolve,reject)=>{
        promises.forEach((item,index)=>{
            Promise.resolve(item).then(resolve).catch((error)=>{
                errors[index]=error
                rejectCount++
                if(rejectCount===promises.length) reject('All rejected')
            })
        })
    })
}

// 手写Promise重试函数
function retry(fn, times, delay) {
    return new Promise((resolve, reject) => {
        function attempt() {
            fn().then(resolve).catch(err => {
                if (times-- > 0) {
                    setTimeout(attempt, delay)
                } else {
                    reject(err)
                }
            })
        }
        attempt()
    })
}

// 测试重试函数
let attempt = 1
retry(() => {
    console.log(`第${attempt}次尝试`)
    attempt++
    return attempt > 3 ? Promise.resolve('成功') : Promise.reject('失败')
}, 3, 1000).then(console.log).catch(console.error)


// promise 实现sleep
function delay(ms,value,shouldReject=false){
    return new Promise((resolve,reject)=>setTimeout(()=>{
        if(shouldReject) reject(value)
        else resolve(value)
    },ms))
}

let p1=delay(1000,'success',false)
let p2=delay(5000,'failed',true)
PromiseRace([p1,p2]).then(console.log).catch(console.log)




// promise 封装ajax
function ajax(method, url, data) {
    var request = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(request.status);
                }
            }
        };
        request.open(method, url);
        request.send(data);
    });
}

ajax("GET","https://www.baidu.com",[]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})




// 原型链
