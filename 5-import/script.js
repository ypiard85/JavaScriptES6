//5-1 Import

import {hello} from './functions.js' //on importe la fonction hello depuis functions.js
import {showError} from './functions.js'
import anonyme from './functions.js'

hello()                //on l'appelle
showError('erreur')
// anonyme()

// 5-2 Export

import * as Math from './math.js'
const [a, b] = [7, 9]
console.log(Math.sum(a,b))