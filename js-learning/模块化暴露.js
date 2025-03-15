// 分别暴露
/*export let personName='anakin'
export let personEmail='anakin@gmail.com'
export function speak(){
    console.log('hello')
}*/


// 默认暴露
export default {
    name:'anakin',
    age:24,
    job:'software engineer',
    
    fun(){
        console.log('我在打游戏')
    }
}
