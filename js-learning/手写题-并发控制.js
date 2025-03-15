// https://www.cnblogs.com/echolun/p/15906939.html
// 并发控制
class Scheduler {
    constructor() {
      this._max = 2;
      this.working=[]
      this.waiting=[]
    }

    add(task){
        return new Promise((resolve)=>{
            task.resolve=resolve
            if(this.working.length<this._max){
                this.run(task)
            }else{
                this.waiting.push(task)
            }
        })
    }


    run(task){
        this.working.push(task)
        task().then(()=>{
            task.resolve()
            let index=this.working.indexOf(task)
            this.working.splice(index,1)
            if(this.waiting.length>0){
                this.run(this.waiting.shift())
            }
        })
    }
  }

  const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve,time);
  })
  
  const scheduler = new Scheduler();
  const addTask = (time,order) => {
    scheduler
    .add(() => timeout(time))
    .then(()=>console.log(order))
  }
  


  
  addTask(4000,4);
  addTask(2000,2);
  addTask(3000,3);
  addTask(900,1);
//   2000ms:2, 3开始
//   4000ms:4，1开始
//   4900ms:1
//   5000ms:3







// ajax并发控制，promise.all
// 假设现在有这么一种场景：现有 30 个异步请求需要发送，但由于某些原因，我们必须将同一时刻并发请求数量控制在 5 个以内，同时还要尽可能快速的拿到响应结果。
function multiRequest(urls=[],maxNum){
    const len=urls.length
    const result=new Array(len).fill(false)

    let finished=0

    return new Promise((resolve,reject)=>{
        while(finished<maxNum){
            next()
        }
        function next(){
            let cur=finished
            finished++
            if(cur>=len){
                if(!result.includes(false)){
                    resolve(result)
                }else{
                    reject('some url missed')
                }
                return
            }
            const url=urls[cur]
            fetch(url).then((res)=>{
                result[cur]=res
                console.log(`完成 ${cur}`, new Date().toLocaleString());
                if(cur<len) next()
            }).catch((err)=>{
                console.log(`结束 ${cur}`, new Date().toLocaleString());
                result[cur]=err
                if(cur<len) next()

            })

        }
    })

}   

// 模拟异步请求函数
function mockFetch(url) {
    return new Promise((resolve, reject) => {
        // 随机延迟 1-3 秒
        const delay = Math.floor(Math.random() * 2000) + 1000;
        setTimeout(() => {
            // 90% 的概率成功
            if (Math.random() < 0.9) {
                resolve(`响应内容: ${url}`);
            } else {
                reject(`请求失败: ${url}`);
            }
        }, delay);
    });
}

// 替换原有的 fetch
global.fetch = mockFetch; // Node环境
// window.fetch = mockFetch; // 浏览器环境

// 生成测试 URL 数组
const urls = Array.from({ length: 10 }, (_, i) => `https://api.example.com/endpoint${i + 1}`);

// 测试并发控制
console.log('开始测试:', new Date().toLocaleString());

multiRequest(urls, 3)
    .then(results => {
        console.log('所有请求完成:', new Date().toLocaleString());
        console.log('结果:', results);
    })
    .catch(error => {
        console.log('部分请求失败:', error);
    });

