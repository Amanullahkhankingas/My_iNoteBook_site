const connectToMongo = require('./db');
const express = require('express');


connectToMongo();


const app = express()
const port = 5000

app.get('/',(req,res) => {
    res.send('HELLO WORLD')
})

app.use(express.json());  // middle wayer

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'))


app.listen(port, ()=>{
    console.log(`Example app listening at http:localhost:${port}`)
})