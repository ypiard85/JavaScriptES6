//4.1 Découverte

const [a, b] = [1, 2, 3, 4]        //on associe a à la première valeur du tableau et b à la 2ème
console.log(a)                      
console.log(b)

//on associe les attributs first et last d'un objet existant à un nouvel objet
const {first, last} = {first: 'Paul', last: 'Henta', age: 35} 
console.log(first)
console.log(last)

const [,,c,] = [1, 2, 3, 4] 
console.log(c)

const {age} = {first: 'Paul', last: 'Henta', age: 35}
console.log(age)

//4.2 Application

//afficher texte, date de début et date de fin


Object.values(data).forEach(function (element)
{   
    var {dateDebut, dateFin, texte} = element;
    console.log(dateDebut, dateFin, texte);
});