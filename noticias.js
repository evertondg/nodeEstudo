var http = require('http');

var server = http.createServer((req,res)=>{

    var categoria = req.url;
    
    if (categoria == '/tecnologia'){  
        res.end("<html><body><h1>Portal de notícias de  tecnologia</h1></body></html>");
    }else if (categoria == '/moda'){
        res.end("<html><body><h1>Portal de notícias de moda</h1></body></html>");
    }
    ;


 //   res.end("<html><body><h1>Portal de notícias</h1></body></html>");

}).listen(3000);

// console.log('Notícia 1');