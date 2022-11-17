import { useState } from 'react'
import { Contacts } from './Contacts'
import { Add } from './Add'
import { Filter } from './Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [phone, setPhone] = useState('')
  const [result, setResult] = useState('');
  

  const handleChangeName = (event) =>{
      setNewName(event.target.value)
      
  }

  const handleChangePhone = (event) => {
    setPhone(event.target.value)
  }

  const handleChangeResult = (event) =>{
    
    setResult(event.target.value)
    
  }
   

  const handleSubmit = (event) => {
        event.preventDefault();
       
        let newPersonToState = ({
          name: newName,
          number: phone,
          id: persons.length+1
        })
        
        let alreadyBooked = persons.map((person)=>{
          let found = persons.find(person => person.name === newPersonToState.name)
          if(found === undefined){
            setPersons( prevState => [
              ...persons,
              newPersonToState]);
              return false
          }
          return true
        })  
        
        alreadyBooked.forEach((p)=>{
          if(p){
            alert(`${newName} already added on the phonebook`)
            setPersons(persons)
            
          }
        })
        
        setNewName('');
        setPhone('');
  }

 
  return (
    <div>
      <h2>Phonebook</h2>

        <Filter persons ={persons} changeResult = {handleChangeResult} result ={result}  />

        <Add submit={handleSubmit} changeName={handleChangeName} changePhone={handleChangePhone} newName={newName} phone={phone} />
      
      <h2>Numbers</h2>
      <Contacts persons={persons} />
      
    </div>
  )
}

export default App