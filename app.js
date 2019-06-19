var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias')(app);
//rotaNoticias(app);

var rotaHome = require('./app/routes/home')(app);
//rotaHome(app);


var rotaFormularioInclusaoNoticias = require('./app/routes/formulario-inclusao-noticia')(app);
//rotaFormularioInclusaoNoticias(app);



// express abstrai o servidor web e começa "ouvir na porta 3000"
app.listen(3000, ()=>{
    console.log("SERVER ON");
});