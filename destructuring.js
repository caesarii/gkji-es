
// es5 从对象获取数据
let options = {
    repeat: true,
    save: false
};
let repeat = options.repeat;
let save = options.save;

// destructuring

// 解构初始化
// 左侧是 属性初始化简写形式，对象中是局部变量，并从node对象获取值
let node = {
    type: "identifier",
    name: "foo"
};
let { type, name } = node;
console.log(type);
console.log(name);

// 使用解构时，无论是 var, let, const 都必须提供初始值
// Error
// let { type, name };

// 也可以在变量声明之后进行解构赋值

let obj1 = {
    width: ""
}

