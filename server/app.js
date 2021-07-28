const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});

require('./db/conn');
// const User = require('./model/user');

app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;



// app.get('/', (req, res) => {
//     res.send(`Hii app this side`);
// });

// app.get('/about', (req, res) => {
//     const a = fs.readFileSync('about.html')
//     res.send(a.toString());
// })

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});