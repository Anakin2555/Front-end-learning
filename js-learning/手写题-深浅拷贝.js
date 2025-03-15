
// 浅拷贝
function shallowCopy(obj) {
    if(typeof obj !=='object' ||typeof obj ===null) return obj
    return Array.isArray(obj)?[...obj]:{...obj}
}


// 深拷贝
function deepCopy(obj) {

    const result=Array.isArray(obj)?[]:{}
    for(const key in obj){
        const item=obj[key]
        result[key]=typeof item==='object'?deepCopy(item):item
    }
    return result
}

// 深拷贝的 weakmap写法，解决循环引用，跟踪已拷贝的对象，避免无限递归
function deepCopy(obj,map=new WeakMap()){
    if(typeof obj !=='object' ||typeof obj ===null) return obj
    if(map.has(obj)) return map.get(obj)
    const result=Array.isArray(obj)?[]:{}
    map.set(obj,result)
    for(const key in obj){
        const item=obj[key]
        result[key]=typeof item==='object'?deepCopy(item,map):item
    }
    return result   
}


