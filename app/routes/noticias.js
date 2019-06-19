const dbConnection = require('../../config/dbConnection.js');

module.exports = (app)=>{
    app.get('/noticias', (req,res)=>{
//        res.render("noticias/noticias");
    
        connection = dbConnection();
        // connection.query(<sql>,<callback>);
        connection.query('select * from noticias', function(err,result){
           // res.send(result);
           res.render("noticias/noticias",{ noticias : result });
        });

    });
};