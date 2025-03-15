// 接收主线程消息
self.onmessage = function(e) {
    const number = e.data;

    // 执行耗时计算
    let sum = 0;
    for (let i = 0; i < number; i++) {
        sum += i;
    }

    // 将结果发送回主线程
    self.postMessage(sum);
};