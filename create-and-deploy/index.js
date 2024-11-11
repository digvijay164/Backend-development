require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const api_data_json =  
        {
          "id": 29167,
          "date": "2024-09-13T09:50:18",
          "date_gmt": "2024-09-13T04:20:18",
          "guid": {
            "rendered": "https://littlebigworld.in/?p=29167"
          },
        }


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/gmail', (req, res)=>{
    res.send('<h1>digvijaydesai164@gmail.com</h1>')
})
app.get('/instagram', (req, res)=>{
    res.send('</h1>__this_is_digvijay__</h1>')
})
app.get('/github', (req, res)=>{
    res.send('digvijay@164')
})

app.get('/college', (req, res)=>{
    res.send('Dr. J.J Magdum College of Engineering Jaysingpur')
})

app.get('/work', (req, res)=>{
    res.send('WPGENIUS Soluations LLP')
})

app.get('/position', (req, res)=>{
    res.send('Intern Web Developer')
})

app.get('/apidata', (req, res)=>{
    res.send(api_data_json)
})

app.listen(process.env.PORT, () => {
  console.log(`PORT calling from .env file ${process.env.PORT}`)
})