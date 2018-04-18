// 1. 回调函数在函数的最后一个参数
// 2. 错误优先
function isEvenOrOdd(num, callback) {
    if (typeof num === 'number') {
        if (num % 2) {
            callback(null, 'Odd');
        } else {
            callback(null, 'Even');
        }
    } else {
        // throw new Error ('Type Error!');
        callback(new Error('Type Error!'));
    }
}

// Test @isEvenOrOdd()
// 约定将错误信息作为回调的第一个函数
isEvenOrOdd(10, (err, result) => {
    if (err) {
        throw err;
    }
    console.log(result);
});

isEvenOrOdd(1, (err, result) => {
    if (err) {
        throw err;
    }
    console.log(result);
});

isEvenOrOdd('10', (err, result) => {
    if (err) {
        throw err;
    }
    console.log(result);
});