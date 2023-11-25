const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.post('/createData',async (req,res)=>{
    try{
        let postStudent = await prisma.student.create({
            data : {
                firstName  : "Nitish",
                lastName : "Pratap Yadav",
                email : "nitish@itinker.io"
            }
        })
        res.json(postStudent);
    }catch (err){
        console.log(err)
        res.json(err)
    }
    
})
// error handler

module.exports = app;
