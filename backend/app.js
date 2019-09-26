const express = require('express');
const mongoose = require('mongoose');
const bodyparser =  require('body-parser');
require('dotenv/config');
const app = express();

app.use(bodyparser.json());

// Imports routes
const postRoute = require('./routes/posts');
app.use('/posts',postRoute);

const regRoute = require('./routes/registerRoute');
app.use('/registerDetails',regRoute);


// Middleware
// app.use('/posts',()=>{
//     console.log('This is a middleware running'); 
// })

app.get('/',(req,res) => {
    res.send('we are on home');
});
// app.get('/posts',(req,res) => {
//     res.send('we are on posts section');
// });


// connect to db here
mongoose.connect(process.env.DB_CONNECTION,
{useNewUrlParser: true,
useUnifiedTopology: true,},()=>
console.log('DB Connected!!!!!!!!!')
);

// how to start to listening to the server
app.listen(3003, function(){
    console.log('server started !!!!');
});

//module.exports = app;