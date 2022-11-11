import Suma from "./Suma"

const Header = (props) => {
  return <h1>{props.name}</h1>
}

const Content = (props)=>{
  return <p>{props.title} : {props.exercise}</p>
}



const App = () => {
  const course = {
    name: "Half Stack app development Miguel con Midu",
    parts: [
      {
        title: "Fundamentals of React",
        exerciseCount: 10
      },
      {
        title: "Using props to pass data",
        exerciseCount: 7
      },
      {
        title: "State of a component",
        exerciseCount: 14
      },
    ]
  }
  
  return (
    <div>
      <Header name = {course.name} />
      {course.parts.map( item => <Content key={item.title} title={item.title} exercise={item.exerciseCount} />)}
      <Suma parameters={course} /> 
      
    </div>
  )
}


export default App