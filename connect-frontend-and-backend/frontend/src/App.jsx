import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((Response)=>{
      setJokes(Response.data)
    })
    .catch((error)=>{
      console.log(error);
      
    })
  })
  return (
    <>
      <h1>chai aur fullstack</h1>
      <p>jokes: {jokes.length}</p>
      {
        jokes.map( (joke, index)=>(
          <div key={joke.id}>
            <h1> {joke.title} </h1>
            <p> {joke.content} </p>
          </div>
         ) )
      }
    </>
  )
}

export default App
