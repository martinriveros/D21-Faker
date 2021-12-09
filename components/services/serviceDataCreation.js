const faker = require('faker')

module.exports = function generateData(){
    
    let data = []

    for(let i=0; i<5; i++){
    data.push({
            nombre: faker.commerce.productName(),
            precio: faker.commerce.price(),
            foto: faker.image.image() 
        })
    }
    return data
}

