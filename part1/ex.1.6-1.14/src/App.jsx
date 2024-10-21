import { useState } from 'react'

const Button = props=>{
  return (
    <button onClick={props.function}>{props.text}</button>
  )
}

const StatisticLine = props =>{
  return (
    <div>{props.text} {props.value}</div>
  )
}

const Statistics = (props)=>{
  if (props.all == 0){
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={props.good}></StatisticLine>
      <StatisticLine text="neutral" value={props.neutral}></StatisticLine>
      <StatisticLine text="bad" value={props.bad}></StatisticLine>
      <StatisticLine text="average" value={(props.good+props.bad*-1)/props.all || 0}></StatisticLine>
      <StatisticLine text="positive" value={props.good*100/props.all || 0}></StatisticLine>
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
      <Button function={()=>{setGood(good+1); setAll(all+1)}} text="Good"></Button>
      <Button function={()=>{setNeutral(neutral+1); setAll(all+1)}} text="Neutral"></Button>
      <Button function={()=>{setBad(bad+1); setAll(all+1)}} text="Bad"></Button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}></Statistics>
    </div>
  )
}

export default App