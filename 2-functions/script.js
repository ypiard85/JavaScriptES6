//2.1 Fonctions simples
const sayHello = () => {
    console.log('Hello')
}

const sayMyName = (first, last) => {
    console.log(first, last)
}

const sayMyAge = (age) => {
    console.log('You are ' + age + ' years old')
}

sayHello()
sayMyName('Odile', 'Crok')
sayMyAge(23)

//----------------------//
//2.2 this

const object = {                     //on déclare un objet
    color: 'red',                    //et ses attributs
    shape: 'circle',
<<<<<<< HEAD
    threeDimensions: false,
    showThis: () => {
=======
    threeDimensions: false,          //dont un booléen
    showThis: () => {                //il contient une fonction qui permet de l'afficher
>>>>>>> a52b3fe7731bc69279ab5ccd332b3abed8b6057b
        console.log(this)
    }
}

<<<<<<< HEAD
object.showThis() //Permet d'afficher la fonction showThis
=======
object.showThis()                   //on affiche l'objet en appelant la fonction

//3) On obtient des erreurs, avec notamment le message "L’attribut « content » des objets Window est obsolète."
// Quand on remplace "this" par du texte, cela fonctionne.
// => Le this utilisé dans une fonction fléchée a une portée limitée à cette fonction.
//  => Ici, this ne fait donc pas référence à l'objet qui englobe la fonction.
//     => faut donc remettre la syntaxe classique function(){} pour pourvoir afficher l'objet.


>>>>>>> a52b3fe7731bc69279ab5ccd332b3abed8b6057b

//----------------------//
//2.3 Application

const odile = {
    name: {
        first: 'Odile',
        last: 'Crok'
    },
    age: 23,
    sayHello: () => {
<<<<<<< HEAD
        console.log('Hello')
    },
    sayMyName: (first, last) => {
        console.log(first, last)
    },
    sayMyAge: (age) => {
        console.log('You are ' + age + ' years old')
    }
}

odile.sayHello()
odile.sayMyName('yoann', 'piard')
odile.sayMyAge(25)
=======
        console.log('Hello')},
    sayMyName: () => {
        console.log(odile.name.first, odile.name.last)},
    sayMyAge: (age) => {
        console.log('You are ' + odile.age + ' years old')}
}

odile.sayHello()
odile.sayMyName()
odile.sayMyAge()
>>>>>>> a52b3fe7731bc69279ab5ccd332b3abed8b6057b
