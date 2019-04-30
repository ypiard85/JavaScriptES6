//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
}

console.log(Object.entries(bus));


//3.2 Object.values

Object.values(data).forEach(function(element)
{
    console.log(element.texte)
})

