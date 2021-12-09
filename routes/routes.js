const { Router } = require('express');
const router = Router();
const path = require('path')
const productHandler = require('../components/handlers/handlerDataCreation')

console.log('esta es toda la clase', productHandler)


module.exports = (app)=> {

  app.use("/api", router);

    // router.get('/', (req, res)=>{
    //    res.render('layouts/chat') 
    //  })
     router.get('/productos-test', productHandler.dataStore)
      
     
    // router.get('/updatedTable', (req, res)=>{
    //    res.sendFile(path.join(__dirname, '../views/templates/table.ejs'))        
    // })
    // router.get('/updatedMessage', (req, res)=>{
    //    res.sendFile(path.join(__dirname, '../views/templates/messageCenter.ejs'))        
    // })
}