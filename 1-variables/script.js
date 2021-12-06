//1.1 Types simples

const name = 'Jacques'
let age = 80
let useless = 'something'

console.log(name, age, useless)

age += 1 //Une constante ne peut pas être déclarée à nouveau, donc une erreur est afficher pour la variable age
useless = 14

console.log(name, age, useless)

<<<<<<< HEAD
//Nous avons une erreur sur les variables const car on essai de les modifiers alors que ces variables sont non modifiable.
=======
//4) On obtient l'erreur suivante TypeError: invalid assignment to const `age'. 
//Elle signifie que l'âge ne peut être une constante, puisqu'il va être modifié juste après (age+=1).

>>>>>>> 71bf7f65d7b6445c1c37747821eef35b6e639b25

//----------------------//
//1.2 Tableaux

const fruits = ['apple', 'pear', 'cherry']
const vegetables = ['potato', 'curlyflower', 'tomato']

console.log(fruits, vegetables)

//Une constante rattacher à un array ou objet peut être modifier mais ne peut pas être déclarée à nouveau.

fruits.push('banana')
vegetables.pop()

console.log(fruits, vegetables)

<<<<<<< HEAD
//pas d'erreur en changeant let par const const car les arrays peuvent changé mais pas le type de variable.
//par exemple, la variable fruit, ne peut pas devenir un string.
=======
//2)Il n'y a pas d'erreur car les constantes ne sont pas modifiées (on ajoute juste un élément au tableau).
>>>>>>> 22ff013e367ec359594ef0139b658cb8e6f6eeaa

//----------------------//
//1.3 Objets

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

<<<<<<< HEAD
savedGame = {} //Une constante ne peut pas être déclarée à nouveau
=======
savedGame = {} //ERREUR, Une constante ne peut pas être déclarée à nouveau.
>>>>>>> 22ff013e367ec359594ef0139b658cb8e6f6eeaa
settings.music = true
settings.resolution = [3840, 2160]

console.log(settings, savedGame)

//2) Erreur : TypeError: invalid assignment to const `savedGame'. 
//savedGame ne peut pas être une constante car il va être modifié.

