const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors')


connectToMongo();



const app = express()
const port = 5000
app.use(express.json());  // middle wayer
app.use(cors())

app.get('/',(req,res) => {
    res.send('HELLO WORLD')
})


// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'))

// let userData = User.findOne({"name":"killer3"})
//     res.json(userData)


app.listen(port, ()=>{
    // console.log(`Example app listening at http:localhost:${port}`)
    console.log(`iNoteBook backend listening at http:localhost:${port}`)
})