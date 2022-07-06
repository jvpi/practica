const express = require('express')
const app = express()
const port = 3000
const path = require('path')
app.get('/prueba',function(req,res) {
	res.send('<p>prueba html</p>')
})

app.get('/',function(req,res) {
	res.sendFile(path.join(__dirname,'prueba.html'))
})
app.use(express.static(path.join(__dirname)))


app.listen(port)
