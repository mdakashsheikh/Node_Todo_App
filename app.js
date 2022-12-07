const express = require('express');
const mongoose= require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

mongoose.set("debug", true);
mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}))

const TodoItemRoute = require('./routes/todoItems')


mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log('Database Connected...'))
.catch(err => console.log(err))


app.use('/', TodoItemRoute)

app.get('/', async(req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(PORT, ()=> console.log(`Listing on PORT ${PORT}`));