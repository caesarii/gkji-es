let log = (...args) => console.log.apply(console, args);

// 默认参数
// es5 默认参数
function makeRequest(url, timeout, callback) {
    // 进行类型检查以防止传入的参数假值，而被默认参数覆盖
    timeout = (typeof timeout !== "undefined" ? timeout : 2000);
    callback = (typeof callback !== "undefined") ? callback : function() {};
    //
}

// es6 默认参数
function makeRequest(url, timeout = 2000, callback = function() {}) {
    //
}

// 默认参数可以在无默认值的参数前
function makeRequest(url, timeout = 2000, callback) {
    //
}
// 以下两种调用方式将使用默认值
makeRequest("/repos");
// 显式的传入undefined, 其他假值不行
makeRequest("/repos", undefined, function() {});

// arguments 对象
// es5 非严格模式 arguments 实时反映命名参数
function mixArgs(one, two) {
    log(arguments[0] === one);
    log(arguments[1] === two);
    one = "c";
    two = "d";
    log(arguments[0] === one);
    log(arguments[1] === two);
}
mixArgs("a", "b");

// es5 严格模式 arguments 不会实时更新
function mixArgs(one, two) {
    "use strict"
    log(arguments[0] === one);
    log(arguments[1] === two);
    one = "c";
    two = "d";
    log(arguments[0]);
    log(arguments[1]);
}
mixArgs("a", "b");

// 使用 默认参数之后，即使在非严格模式下，arguments也不再实时更新
function mixArgs(one, two = "b") {
    // 实际传入的参数个数，不包括默认参数
    log(arguments.length);
    log(arguments[0] === one);
    // false, arguments[1] 是 undefined
    log(arguments[1] === two);
    one = "c";
    two = "d";
    log(arguments[0]);
    log(arguments[1]);
}
mixArgs("a");

http://www.examle.com:8080/api/department?token=<token>&domainid=<domainid>&params={pageNow:1}