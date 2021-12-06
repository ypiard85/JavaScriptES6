//5-1 Import

import {hello} from './functions.js'
import {showError} from './functions.js'
import {anonyme} from './functions.js'
import {sum, sub, multiply, divide, pow} from './math.js'

hello()
showError('message')
//anonyme()

// 5-2 Export
const [a, b] = [7, 9]

console.log(a,b)

console.log(sum(4,5))
console.log(sub(4,5))
console.log(multiply(4,5))
console.log(divide(4,5))
console.log(pow(4,5))
