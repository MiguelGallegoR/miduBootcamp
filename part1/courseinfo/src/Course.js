import Suma from "./Suma"
export function Course({course}){
    
    return (
      <>
        <Header title={course.name} /> 
        <Content parts={course.parts} />
        <Suma parameters={course} />
    
        </>
            
    )
}

 const Header = ({title}) => <h1>{title}</h1>
  
const Content = ({parts})=>{
    
    let listParts = parts.map(part => 
            {return (<Part key={part.id} name={part.name} exercises={part.exercises} />)});
        
    return(
        <div>{listParts}</div> 
        )   
    
}

const Part = (props) =>{
    const {name, exercises} = props
    return <p> {name} {exercises}</p>
}