const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

const Header = (params)=>{
  return (
    <h1>{params.course}</h1>
  )
}

const Content = (params)=>{
  return (
    <p>
      <p>
        {params.part1} {params.exercises1}
      </p>
      <p>
        {params.part2} {params.exercises2}
      </p>
      <p>
        {params.part3} {params.exercises3}
      </p>
    </p>
  )
}

const Total = (params)=>{
  return (
    <p>Number of exercises {params.exercises1 + params.exercises2 + params.exercises3}</p>
  )
}

export default App