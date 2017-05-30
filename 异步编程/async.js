
// 声明 async 函数

// async 总是返回 promise
async function asyncNum() {
    return 123
}

asyncNum().then(x => console.log(x))

