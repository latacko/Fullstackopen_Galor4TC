import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={()=>{setGood(good+1); setAll(all+1)}}>Good</button>
      <button onClick={()=>{setNeutral(neutral+1); setAll(all+1)}}>Neutral</button>
      <button onClick={()=>{setBad(bad+1); setAll(all+1)}}>Bad</button>
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {(good+bad*-1)/all || 0}</div>
      <div>positive {good*100/all || 0}%</div>
    </div>
  )
}

export default App