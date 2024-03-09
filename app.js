//import dependencies
import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import morgan from 'morgan';
import indexRouter from './routes/index.js';
//import dbRouter from './routes/db.js';
import path from 'path';
import { fileURLToPath } from 'url';


//create expres app
const app= express();

// view engine setup
const __filename = fileURLToPath(import.meta.url);
const __dirname =path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));


// add routes
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next)=> {
    next(createError(404));
  });
  
  // error handler
  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });


//export
export default app;