require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

app.post('/token', (req, res) => {
  const refreshToken = req.body.token
})

app.post('/login', (req, res) => {
  //Authenticate User

  const username = req.body.username
  const user = { name: username}
  
 const accessToken = generateAccessToken(user)
 const refreshToken  = jwt.sign(user, process.env.REFRESH_TOKEN_sECRET)
 res.json({ accessToken: accessToken, refreshToken: refreshToken})
})


  function generateAccessToken(user) {
   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15s'}) 
  }

app.listen(4000, () => {
  console.log('Server is running on port 4000')
})
