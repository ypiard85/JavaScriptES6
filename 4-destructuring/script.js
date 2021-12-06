//4.1 Découverte

const [a, b] = [1, 2, 3, 4] //le 'a' et 'b' correspond au valeur du tableau a = 1, b = 2
console.log(a)
console.log(b)

const {first, age, last} = {first: 'Paul', last: 'Henta', age: 35}
console.log(first)
console.log(last)
console.log(age + ' ans')

const [,,c,] = [1, 2, 3, 4]
console.log(c)

const {age} = {first: 'Paul', last: 'Henta', age: 35}
console.log(age)

//4.2 Application

const clef = Object.values(data)

clef.forEach(c => {
    const {texte, dateDebut, dateFin} = c
    console.log(texte, dateDebut + ' :::: ' + dateFin)
});
