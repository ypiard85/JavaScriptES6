//1.1 Types simples

const name = 'Jacques'
let age = 80
let useless = 'something'

console.log(name, age, useless)

age += 1
useless = 14

console.log(name, age, useless)

//Nous avons une erreur sur les variables const car on essai de les modifiers alors que ces variables sont non modifiable.

//----------------------//
//1.2 Tableaux

const fruits = ['apple', 'pear', 'cherry']
const vegetables = ['potato', 'curlyflower', 'tomato']

console.log(fruits, vegetables)

//Une constante rattacher à un array ou objet peut être modifier mais ne peut pas être déclarée à nouveau.

fruits.push('banana')
vegetables.pop()

console.log(fruits, vegetables)

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

savedGame = {} //ERREUR, Une constante ne peut pas être déclarée à nouveau.
settings.music = true
settings.resolution = [3840, 2160]

console.log(settings, savedGame)