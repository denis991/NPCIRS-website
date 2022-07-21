const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
require('dotenv').config();

const app = express();
/**
 *основной файл для базы данных
 *тут лишнее может показаться сесии
 * но сайт будет делаться регистрация если хватит время
 * на данный момент тут одна ручка
 */
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
const PORT = process.env.DB_PORT;
const territoryRouter = require('./routes/territory');

const sessionConfig = {
  name: 'wannalaunch',
  store: new FileStore(),
  secret: 'thisissecured',
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  },
  resave: true,
  saveUninitialized: false,
};

app.use(session(sessionConfig));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/territory', territoryRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
