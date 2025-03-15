var person = {
    name: '写',
    age: 23,
};
var a;
var b;
var c;
var d;
var e;
a = 9;
console.log(person.name);
// 函数返回值也可以限制类型
function fn(a, b) {
    return a + b;
}
function fn2() {
    console.log('caonima');
    return 'a';
}
// 声明对象
var person1;
person1 = { name: 'anakin', gender: 23 };
// 声明函数
var count;
count = function (a, b) {
    return a + b;
};
// 声明数组
var arr;
var arr2;
arr = ['a', 'b'];
arr2 = [100, 200];
// 声明元组
var arr3;
var arr4;
var arr5; // 任意个
arr4 = ['hello'];
arr5 = ['he', 'ef', 'ef'];
arr3 = ['hello', 12];
// 枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction[0]);
