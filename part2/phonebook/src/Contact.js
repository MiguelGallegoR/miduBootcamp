
export const Contact = ({person}) =>{

    return (
    <p key={person.id} >{person.name} - {person.number}</p>)
}