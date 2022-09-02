const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/v1/user.route.js');


const PORT = 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use('/user',userRoutes)



app.all('*',(req,res)=>{
    res.send({error:"Route Not FOUND"})
})
app.listen(PORT,()=>console.log(`Server running port: ${PORT}`))