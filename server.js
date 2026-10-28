const express = require('express')
const app= express();
const mongoose = require('mongoose')


const PORT = process.env.PORT || 3000;
mongoose.connect("mongodb://localhost:27017/books",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log("mongodb connceted successfully"))
.catch((err)=> console.log(err));

app.listen(PORT,()=> console.log(`server running on port ${PORT}`));










