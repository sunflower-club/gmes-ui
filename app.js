'use strict'
import express      from 'express';
import path         from 'path';
//var favicon = require('serve-favicon');
import logger       from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser   from 'body-parser';
import http         from 'http';
import router       from './routers';
import routerPages  from './routerPages';
import exphbs       from 'express-handlebars';
import responseTime from 'response-time';
import multer       from 'multer';
import history      from 'connect-history-api-fallback';

let fs = require('fs');
let upload = multer({ dest: 'uploads/' })

let app = express();

//app.set('views', path.join(__dirname, './views')); 经过webpack打包后 路径出错
app.engine('hbs', exphbs({
    layoutsDir: 'views',
    defaultLayout: 'layout',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

let options = {
  setHeaders: function (res, path, stat) {
    res.set('Access-Control-Allow-Origin', '*')
  },
  maxAge:300000,
}
console.log(path.join('./log','/experess.log'))
const accessLogStream = fs.createWriteStream(path.join('./log/experess.log'), {flags: 'a'});
app.use(logger('short', {stream: accessLogStream}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join('./public'),options));
app.use(responseTime());


/*app.use(async (req, res, next) => {
    const time1 = Date.now();
    function calResponseTime(){
        var now = new Date(); //获取时间 t2
        var deltaTime = now - req._startTime;
    }
    res.once('header', calResponseTime);
    next()
});*/

app.use('/page', routerPages);
app.use('/api',upload.array('img',5),router);
app.use(history())
// catch 404 and forward to error handler
app.use((req, res, next) => {
    'use strict';
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    'use strict';
  // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
    res.status(err.status || 500);
    res.render('error');
});
const port = process.env.PORT || '3003';
app.set('port', port);
const server = http.createServer(app);

/*const io = require('socket.io')(server);

let preson = new Array();
let num = 0;
io.on('connection', (socket) => {
    socket.emit('news', { my: 'hello world',name:'admin'});
    socket.on('my other event', (data) => {
        io.sockets.emit('news', data)
        console.log(data)
       // socket.broadcast.emit('news', data);
    });
    socket.on('login',(data) =>{
        preson.push(data.name);
        ++num;
        io.sockets.emit('preson', {num:num,name:preson.join(',')})
    })
    socket.on('out', (data) =>{
        if(num) --num;
        preson = preson.filter((item)=>{
            console.log(item)
            console.log(data.name)
            return item != data.name
        })
       // console.log(preson)
        io.sockets.emit('preson', {num:num,name:preson.join(',')})
    });
    socket.on('group1', (data) =>{
        console.log(data)
        socket.join('group1');
    });
    socket.on('disconnect', (data) =>{
        console.log(data);
    })
});*/

server.listen(port);
console.log('Listen on localhost:' + port);
