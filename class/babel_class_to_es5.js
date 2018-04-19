// class Base {
//     constructor () {
//         this.instanceProp = 'instanceProp'
//     }
//
//     static staticProp = 'staticProp'
//
//     instanceProp2 = 'instanceProp2'
//
//     static staticMethod () {
//         return 'staticMethod'
//     }
//
//     method () {
//         return 'method'
//     }
// }
//
// const b = new Base()
// console.log('instanceProp', b.instanceProp)
// console.log('staticProp', Base.staticProp)
// console.log('instanceProp2', b.instanceProp2)
// console.log('staticMethod', Base.staticMethod())
// console.log('method', b.method())

// babel 结果

'use strict'
const log = console.log
var _createClass = function () {
    function defineProperties (target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]
            descriptor.enumerable = descriptor.enumerable || false
            descriptor.configurable = true
            if ('value' in descriptor) {
                descriptor.writable = true
            }
            Object.defineProperty(target, descriptor.key, descriptor)
        }
    }
    
    // 定义 constructor
    const constructor = function (Constructor, protoProps, staticProps) {
        if (protoProps) {
            defineProperties(Constructor.prototype, protoProps)
        }
        if (staticProps) {
            defineProperties(Constructor, staticProps)
        }
        return Constructor
    }
    
    return constructor
}()

function _classCallCheck (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function')
    }
}

// klass
/* {
  className: 'Base",
  protoProps: {},
  proroMethods: {},
  staticProps: {},
  staticMethods: {}
}*/

// const createKlass = function (option) {
//
//     const createConstructorBody = function (option) {
//         const name = option.className
//         const props = options.protoProps
//         let body = `_classCallCheck(this, ${name}) \r\n`
//         for (prop in props) {
//             body += `this.${prop} = ${props[prop]} \r\n`
//         }
//
//         return body
//
//     }
//
//     const body = createConstructorBody(option.protoProps)
//     const constructor = new Function(option.className, body)
//
//     function Base () {
//         _classCallCheck(this, Base)
//
//         this.instanceProp2 = 'instanceProp2'
//
//         this.instanceProp = 'instanceProp'
//     }
//
//     _createClass(Base, [{
//         key: 'method',
//         value: function method () {
//             return 'method'
//         }
//     }], [{
//         key: 'staticMethod',
//         value: function staticMethod () {
//             return 'staticMethod'
//         }
//     }])
//
//     return Base
// }
//
// var Base = createBase()
//
// Base.staticProp = 'staticProp'
//
// var b = new Base()
// console.log('instanceProp', b.instanceProp)
// console.log('staticProp', Base.staticProp)
// console.log('instanceProp2', b.instanceProp2)
// console.log('staticMethod', Base.staticMethod())
// console.log('method', b.method())

if (require.main === module) {
    const option = {
        className: "Base",
        protoProps: {name: 'qinghe', age: 14},
        proroMethods: {},
        staticProps: {},
        staticMethods: {}
    }
    
    const createConstructorBody = function (option) {
        const name = option.className
        const props = option.protoProps
        let body = `_classCallCheck(this, ${name}) \r\n`
        for (let prop in props) {
            body += `this.${prop} = ${props[prop]} \r\n`
        }
        
        return body
        
    }
    
    log(createConstructorBody(option))
    
}