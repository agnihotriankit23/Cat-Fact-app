import { useEffect, useState } from 'react'

import './App.css'
import Axios from "axios"

// fetch("https://catfact.ninja/fact")
// .then((res)=> res.json())
// .then((data)=>{
//   console.log(data.fact);
// })

function App() { 
  //const [fact,setFact] = useState(false)
  const [catfact,setcatFact] = useState("");
  const generateFact = ()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
      setcatFact(res.data.fact)
    })
  }

  useEffect(()=>{
    generateFact()
  },[])
  return (
    <div className="App">
      <button onClick={generateFact}> Generate Cat Fact</button>
      <h1>{catfact}</h1>
      
    </div>
  )
}

export default App
