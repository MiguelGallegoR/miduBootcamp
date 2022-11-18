import { Contact } from "./Contact"
export const Filter = ({persons, result, changeResult}) =>{
    let search =  persons.filter((person)=>{
        if(result !== ''){
            return person.name.includes(result) 
        }
        
   })
   
   
    return (
        <div>
            <div>filter shown with <input onChange={changeResult} value={result} /> </div>

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