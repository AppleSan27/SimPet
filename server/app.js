/**
 * Project: "SimPet"
 * Path: "server"
 */
 
const RELEASE = 13;
const DATE = '29.12.2021';


const express = require('express');
const session = require('express-session');
const createError = require('http-errors');
const FileStore = require('session-file-store')(session);
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
require('dotenv').config();


const authRouter = require('./src/routes/auth.router');
const userRouter = require('./src/routes/users.router');
const categoryRouter = require('./src/routes/category.router');
const periodRouter = require('./src/routes/period.router');
const animalRouter = require('./src/routes/animal.router');
const todoRouter = require('./src/routes/todos.router');


const app = express();
const PORT = process.env.PORT || 3001;
const { COOKIE_SECRET, COOKIE_NAME } = process.env;


/* SERVER'S SETTINGS */
app.set('cookieName', COOKIE_NAME);


/* APP'S MIDDLEWARES */
app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(express.json());
app.use(fileUpload());
app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(session({
  name: app.get('cookieName'),
  secret: COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1e3 * 86400, // COOKIE'S LIFETIME — 1 DAY
    // expires: 24 * 60 * 60e3
  },
}));


/* APP'S ROUTES */
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/period', periodRouter);
app.use('/api/v1/animals', animalRouter);
app.use('/api/v1/todos', todoRouter);


app.use((req, res, next) => {
  const error = createError(404, 'Запрашиваемой страницы не существует на сервере.');
  next(error);
});

app.use((err, req, res, next) => {
  const appMode = req.app.get('env');
  let error;

  if (appMode === 'development') {
    error = err;
  }
  else {
    error = {};
  }
  
  res.locals.message = err.message;
  res.locals.error = error;
  res.status(err.status || 500);
});


app.listen(PORT, () => {
  console.log(`Server has been started on PORT: ${PORT}\n build: ${RELEASE},  date: ${DATE} `);
});
