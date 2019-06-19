module.exports = (app)=>{
    app.get('/formulario-inclusao-noticia', (req,res)=>{
        res.render("admin/form-add-noticia");
    });
};