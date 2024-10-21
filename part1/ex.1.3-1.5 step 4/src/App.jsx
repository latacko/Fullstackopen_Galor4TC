const App = () => {
  // const-definitions
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = (params)=>{
  return (
    <h1>{params.course.name}</h1>
  )
}

const Content = (params)=>{
  return (
    <p>
      <p>
        {params.course.parts[0].name} {params.course.parts[0].exercises}
      </p>
      <p>
        {params.course.parts[1].name} {params.course.parts[1].exercises}
      </p>
      <p>
        {params.course.parts[2].name} {params.course.parts[2].exercises}
      </p>
    </p>
  )
}

const Total = (params)=>{
  return (
    <p>Number of exercises {params.course.parts[0].exercises + params.course.parts[1].exercises + params.course.parts[2].exercises}</p>
  )
}

export default App