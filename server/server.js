const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const app = express()
const PORT = 5000
const JWT_SECRET = "secret" // à ne pas utiliser en production

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/filrouge')
  .then(() => console.log('MongoDB connecté'))
  .catch((err) => console.log('Erreur MongoDB', err))

const userSchema = new mongoose.Schema({
  username: String,
  password: String
})

const User = mongoose.model('User', userSchema)

app.post('/register', async (req, res) => {
  const { username, password } = req.body
  const hash = await bcrypt.hash(password, 10)
  const newUser = new User({ username, password: hash })
  await newUser.save()
  res.json({ message: 'Utilisateur enregistré' })
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })
  if (!user) return res.status(400).json({ error: 'Utilisateur inconnu' })
  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) return res.status(400).json({ error: 'Mot de passe incorrect' })
  const token = jwt.sign({ id: user._id }, JWT_SECRET)
  res.json({ token })
})

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`)
})