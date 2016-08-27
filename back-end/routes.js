module.exports = function(app){
    app.use('/user', require('./users'));
    
    app.use('/', require('./users/Services/authorize'));
    app.use('/expense', require('./expenses'));
};