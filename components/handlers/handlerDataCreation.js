const data = require('../services/serviceDataCreation.js')
const print = require('../../utlils/util')
const fs = require('fs')
const path = require('path')

let datos = JSON.stringify(data(),null, 2)

class ProductHandler{

    async dataStore (req, res, next){
        try {
            
            await fs.promises.writeFile(path.join(__dirname, '../../data/productTable.json'), datos, 'utf-8')
            let datosArr = JSON.parse(datos)
            res.render(path.join(__dirname, '../../views/layouts/general.ejs'), {responseObject: datosArr})
            
        } catch (error) {
            console.log('error al escribir en el Handler ' + error) 
        }

}}

module.exports = new ProductHandler()
