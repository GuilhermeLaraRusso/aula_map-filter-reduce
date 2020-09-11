const pets = [
    {
        type: 'dog',
        name: 'bolinha',
        age: 15,
        weight: 30
    },
    {
        type: 'cat',
        name: 'mingau',
        age: 6,
        weight: 2
    },
    {
        type: 'dog',
        name: 'rex',
        age: 4,
        weight: 5
    },
    {
        type: 'cat',
        name: 'marrom',
        age: 2,
        weight: 1
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        weight: 0.01
    },
    {
        type: 'horse',
        name: 'pé de pano',
        age: 1,
        weight: 0.01
    },
]

/**
 * Estrutura do reduce
 * Array.reduce(callback, initialValue);
 */

// Exemplo 1 - retornando o valor total de todos os pesos

// const totalWeight = pets.reduce((total, pet) => {
//     console.log(`Total: ${total}`)
//     console.log(`Pet: ${pet.name}`)

//     return total + pet.weight
// }, 0)

// Exemplo 2 - pode utilizar mais de um parâmetro ao mesmo tempo

const totalWeight = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }

}, {totalAge: 0, totalWeight: 0})

console.log(totalWeight)
