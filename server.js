const express = require('express');


const app = express();

app.use(express.static("public"));



app.get('/chat', (req, res) => {
    res.send('Start chatting now');
});


app.listen(3000, ()=>{
    console.log('Running on port 3000')
})