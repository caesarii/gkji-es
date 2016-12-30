
// es5 类
function PersonType(name) {
    this.name = name;
}

PersonType.prototype.sayName = function() {
    console.log(this.name);
}

let person = new PersonType("Nicholas");
person.sayName();
// "nicholas"

console.log(person instanceof PersonType);
// true
console.log(person instanceof Object);
// true

// es6 类
class PersonClass {
    // 构造函数
    constructor(name) {
        // 实例属性应在此定义
        this.name = name;
    }

    // 实例方法
    sayName() {
        console.log(this.name)
    }
}

let person1 = new PersonClass("Nicholas");
person.sayName();
// "Nicholas"

console.log(person1 instanceof PersonClass);
// true
console.log(person1 instanceof Object);
// true

console.log(typeof PersonClass);
// function
console.log(typeof PersonClass.prototype.sayName);
// function

// es5 继承
// 父类
function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function() {
    return this.length * this.width;
};

// 子类
function Square(length) {
    Rectangle.call(this, length, length);
}

Square.prototype = Object.create(Rectangle.prototype);
let square = new Square(3);

console.log(square.getArea());
// 9
console.log(square instanceof Square);
// true
console.log(square instanceof Rectangle);
// true

// es6 继承

// 父类
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.length;
    }
}

// inheritance
class Square extends Rectangle {
    constructor(length) {
        // Rectangle.call(this, length, length)
        super(length, length);
    }
}

let square2 = new Square(3);
console.log(square.getArea());
// 9
console.log(square instanceof Square);
// true
console.log(square instanceof );

// 派生类必须在constructor中调用super()
// 如果省略constructor 将自动调用
class Square extends Rectangle {
    // no constructor
}

// equal to
class Square extends Rectangle {
    constructor (...args) {
        super(...args);
    }
}









