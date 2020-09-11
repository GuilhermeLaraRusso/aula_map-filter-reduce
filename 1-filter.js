const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1
    }
];

const newPets = pets.filter((pet) => {
    return pet.age < 5
})

console.log(pets);
console.log(newPets);

// a função anterior também pode ser escrita conforme abaixo 

// const eMenorQueCinco = (numero) => {
//     return numero < 5
// }

// const newPets = pets.filter(({ age }) => eMenorQueCinco(age))