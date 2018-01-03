var express = require('express')

module.exports = function(){
   var app = express();
   // env var
   app.set('port', 3001)
   // middleware
   app.use(express.static('./public'))
   return app
}
