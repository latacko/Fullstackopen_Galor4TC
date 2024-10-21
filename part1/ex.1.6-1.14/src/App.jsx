import { useState } from 'react'

const Statistics = (props)=>{
  return (
    <div>
      <h1>statistics</h1>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>
      <div>all {props.all}</div>
      <div>average {(props.good+props.bad*-1)/props.all || 0}</div>
      <div>positive {props.good*100/props.all || 0}%</div>
    </div>
  )
}

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
      <Statistics good={good} neutral={neutral} bad={bad} all={all}></Statistics>
    </div>
  )
}

export default App