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

    threeDimensions: false,
    showThis: () => { //la fonction devien une un objet window avec beaucoup d'informations

        console.log(this)
    }
}


object.showThis() //Permet d'afficher la fonction showThis



//----------------------//
//2.3 Application

const odile = {
    name: {
        first: 'Odile',
        last: 'Crok'
    },
    age: 23,
    sayHello: () => {
        console.log('Hello')
    },
    sayMyName: () => {
        console.log(odile.name.first, odile.name.last)},
    sayMyAge: (age) => {
        console.log('You are ' + odile.age + ' years old')}

}

odile.sayHello()
odile.sayMyName('Yoann', 'Piard')
odile.sayMyAge(25)
