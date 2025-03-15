

// 生成器函数
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// 使用生成器 .next() 方法输出{value: 1, done: false}
// 生成器对象本身就是迭代器
const gen = numberGenerator();
console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().done);   // true

// 迭代器
// 自定义可迭代对象
const myIterable = {
    [Symbol.iterator]: function* () {
        yield 'a';
        yield 'b';
        yield 'c';
    }
};

// 使用for...of遍历
for (const item of myIterable) {
    console.log(item); // 依次输出 a, b, c
}


// 迭代器转换为生成器
const customIterator = {
    data: [1, 2, 3],
    next() {
        return {
            value: this.data.shift(),
            done: this.data.length === 0
        };
    }
};

function* iteratorToGenerator(iterator) {
    let result;
    while (!(result = iterator.next()).done) {
        yield result.value;
    }
}

const gen1 = iteratorToGenerator(customIterator);
console.log([...gen1]); // [1, 2, 3]



