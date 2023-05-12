const express = require('express');
const session = require('express-session'); 
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const passport = require('./middlewares/passport-config');
const flash = require('express-flash');


const userRoutes = require('./routes/user-routes');
var assetsDir = require('path').join(__dirname, '/assets');
var stylesDir = require('path').join(__dirname, '/styles');
var scriptsDir = require('path').join(__dirname, '/scripts');

if (process.env.NODE_ENV !== 'production' ){
    require('dotenv').config()
}

function setupApp(){

    app.set('view-engine', 'ejs');
    express.urlencoded({extended: false});
    app.use(bodyParser.urlencoded({extended: false}));
    
    const sessionConfig = {secret: process.env.SESSION, resave: false, saveUninitialized: true};
    
    app.use(session(sessionConfig)); 
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session()); 
    app.use('/assets', express.static(assetsDir));
    app.use('/styles', express.static(stylesDir));
    app.use('/scripts', express.static(scriptsDir));
    
    app.use('/', userRoutes);
}

setupApp ();
app.listen(port, () => console.log(`listening on... ${port}`));