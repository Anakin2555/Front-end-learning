
// 通用导入
/*import * as exp from './模块化暴露.js'

let person={
    name:exp.personName,
    email:exp.personEmail,
    fn:exp.speak
}
console.log(person)*

// 解构导入
/*
import {personName,personEmail,speak} from "./模块化暴露.js";
let person={
    name:personName,
    email:personEmail,
    fn:speak
}

person.fn()*/



// 简便形式 (只适用于默认暴露)
/*
import exp from './模块化暴露.js'

let person = {
    name: exp.name,
    age: exp.age
}
console.log(person)*/
