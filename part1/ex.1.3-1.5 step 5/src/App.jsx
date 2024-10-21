const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
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
        {params.parts[0].name} {params.parts[0].exercises}
      </p>
      <p>
        {params.parts[1].name} {params.parts[1].exercises}
      </p>
      <p>
        {params.parts[2].name} {params.parts[2].exercises}
      </p>
    </p>
  )
}

const Total = (params)=>{
  return (
    <p>Number of exercises {params.parts[0].exercises + params.parts[1].exercises + params.parts[2].exercises}</p>
  )
}

export default App