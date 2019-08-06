const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const IP = 'localhost';
const PORT = 3333;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const serveStatic = require('serve-static');
app.use(serveStatic(path.join(__dirname, 'public')));

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/grid', (req, res) => {
    res.render('keyboard')
})

app.get('/touchscreen', (req, res) => {
    res.render('touchScreen')
})

app.get('/favicon.ico', (req, res) => {
    res.end('favicon')
})

app.get('/test', (req, res) => {
    res.render('test')
})



app.listen(PORT, IP, console.log(`localhost:${PORT}`));
