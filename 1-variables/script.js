//1.1 Types simples

const name = 'Jacques'
let age = 80
let useless = 'something'

console.log(name, age, useless)

age += 1 //Une constante ne peut pas être déclarée à nouveau, donc une erreur est afficher pour la variable age
useless = 14

console.log(name, age, useless)

//----------------------//
//1.2 Tableaux

const fruits = ['apple', 'pear', 'cherry']
const vegetables = ['potato', 'curlyflower', 'tomato']

console.log(fruits, vegetables)

fruits.push('banana')
vegetables.pop()

console.log(fruits, vegetables)

//pas d'erreur en changeant let par const const car les arrays peuvent changé mais pas le type de variable.
//par exemple, la variable fruit, ne peut pas devenir un string.

//----------------------//
//1.2 Objets

const settings = {
    sound: true,
    music: false,
    graphics: 'high',
    resolution: [1920, 1080]
}

let savedGame = {
    time: 384,
    score: 47,
    opponent: 'Lolo'
}

console.log(settings, savedGame)

savedGame = {} //Une constante ne peut pas être déclarée à nouveau
settings.music = true
settings.resolution = [3840, 2160]

console.log(settings, savedGame)