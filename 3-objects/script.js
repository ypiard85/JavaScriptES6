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

for (const [key, value] of Object.entries(bus)) {
    console.log(`${key}: ${value}`);
}

console.log(Object.entries(bus))

//3.2 Object.values
Object.values(data).forEach( el => {
    console.log(el.texte)
} )
