var http = require ('http')

 var server = http.createServer((req,res) => {
     if (req.url ==='/'){
         res.end('welcome to my home page')
     }
     if (req.url ==='/about'){
         res.end('Just a girl learning node.js')
     }
      res.end(' <h1> OOPS </h1> <a href ="/">  BACK TO HOME </a> ')
    } )
 server.listen(8080)