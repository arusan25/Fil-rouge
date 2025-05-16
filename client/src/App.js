import React, { useState } from 'react'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const register = async () => {
    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      const data = await res.json()
      setMessage(data.message || data.error)
    } catch (err) {
      setMessage("Erreur lors de l'inscription")
    }
  }

  const login = async () => {
    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      const data = await res.json()
      setMessage(data.token ? "Connexion réussie" : data.error)
    } catch (err) {
      setMessage("Erreur lors de la connexion")
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Connexion / Inscription</h1>
      <input placeholder="Nom d'utilisateur" value={username} onChange={e => setUsername(e.target.value)} /><br/>
      <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} /><br/>
      <button onClick={register}>S'inscrire</button>
      <button onClick={login}>Se connecter</button>
      <p>{message}</p>
    </div>
  )
}

export default App