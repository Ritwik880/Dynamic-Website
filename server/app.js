const express = require('express');
const app = express();
const fs = require('fs');
app.get('/', (req, res) =>{
    res.send(`Hii ritwik this side`);
});
app.get('/about', (req, res)=>{
    const a = fs.readFileSync('about.html')
    res.send(a.toString());
})
app.listen(3000, ()=>{
    console.log(`Server is running at port 3000`);
});