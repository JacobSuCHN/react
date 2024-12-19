// import swc from '@swc/core'

// const result = swc.transformFileSync('./test.js', {
//    jsc: {
//        target: "es5", //代码转换es5
//        parser: {
//            syntax: 'ecmascript'
//        }
//    }
// })
// console.log(result.code)
import swc from '@swc/core'
console.time()
const result = swc.transformFileSync('./test.jsx', {
    jsc: {
        target: "es5", //代码转换es5
        parser: {
            syntax: 'ecmascript',
            jsx: true
        },
        transform:{
            react: {
                runtime: 'automatic'
            }
        }
    }
})
console.log(result.code)
console.timeEnd()