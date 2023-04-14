require('dotenv').config();
require('@babel/register');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const cors = require('cors');

const {sequelize} = require('./models')

const {SESSION_SECRET} = "secret"

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//импорт роутов
const NewsRoute = require('./routes/NewsRoute');
const GalleryRoute = require('./routes/GalleryRoute');
const AuthRoute = require('./routes/AuthRoute');
const TeachersRoute = require('./routes/TeachersRoute');
const LogoutRoute = require('./routes/LogoutRoute')

const sessionConfig = {
    name: 'Session',
    store: new FileStore(),
    secret: SESSION_SECRET ?? '123',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 10,
      httpOnly: true,
    },
  };

  
  const corsOptions = {
      credentials: true,
      origin: 'http://localhost:3000',
    };
    app.use(cors(corsOptions));
    
    app.use(session(sessionConfig));


  //роутинг
  app.use('/news', NewsRoute)
  app.use("/teachers", TeachersRoute)
  app.use('/img', GalleryRoute)
  app.use('/', AuthRoute)
  app.use("/logout", LogoutRoute)


  const PORT = 3001;

  app.listen(PORT, async () => {

    try {
        await sequelize.authenticate();
        console.log('Соединение с базой установлено!');
    } catch (error) {
        console.log(error, 'Error!');
    }
    console.log(`Сервер поднят на ${PORT} порту!`);
  })