const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
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
        {params.part1.name} {params.part1.exercises}
      </p>
      <p>
        {params.part2.name} {params.part2.exercises}
      </p>
      <p>
        {params.part3.name} {params.part3.exercises}
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