import {Contact} from './Contact'
export const Contacts = ({persons}) =>{

    return (
        <div>
             {persons.map((person)=>{
                return <Contact person = {person} key={person.id} name={person.name} number={person.number} />
                })
            }
        </div>
    )
}