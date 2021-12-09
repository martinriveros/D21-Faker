const util = require('util')
module.exports = function print(objeto){
    console.log(util.inspect(objeto, false, 12, true))
}

