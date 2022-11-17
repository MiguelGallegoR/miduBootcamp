import { Contact } from "./Contact"
export const Filter = ({persons, result, changeResult}) =>{
    let search =  persons.filter((person)=>{
        return person.name.includes(result) 
   })
   
   console.log(persons)
   
    return (
        <div>
            <div>escribe algo que <input onChange={changeResult} value={result} /> </div>

            <div>
            {search.map((s)=>{
                console.log(s)
                return <Contact key={s.id} person={s} name={s.name} number={s.number} />
                })
            }
            </div>
        
        </div>
    )

}