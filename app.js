var app = require('./config/server');


app.get('/', (req,res)=>{
    res.render("home/index");
    
});

app.get('/formulario-inclusao-noticia', (req,res)=>{
    res.render("admin/form-add-noticia");
});


app.get('/noticias', (req,res)=>{
    res.render("noticias/noticias");
});


// express abstrai o servidor web e começa "ouvir na porta 3000"
app.listen(3000, ()=>{
    console.log("SERVER ON");
});