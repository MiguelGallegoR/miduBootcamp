import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  

  const handleChange = (event) =>{
      setNewName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newName);
    let newPersonToState = ({
      name: newName
    })
    
    let alreadyBooked = persons.map((person)=>{
      //console.log(JSON.stringify(person) === JSON.stringify(newPersonToState));
      if(JSON.stringify(person) !== JSON.stringify(newPersonToState)){
        setPersons([
          ...persons,
          newPersonToState]);
          return false
      }
       return true
    })  
    
    alreadyBooked.map((p)=>{
      if(p){
        alert(`${newName} already added on the phonebook`)
        setPersons(persons)
      }
    })
    
    setNewName('');
  }

 console.log(persons)

  let listOfPersons = persons.map((person)=>{
    return <p key={person.name} >{person.name}</p>
  })  


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} value={newName} />
          
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>
        {listOfPersons}
      </div>
      
      <h2>Numbers</h2>
      
    </div>
  )
}

export default App