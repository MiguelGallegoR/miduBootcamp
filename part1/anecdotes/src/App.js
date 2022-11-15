import { useState } from 'react'

const Best = (props) =>{
    return (
      <div>
          <h2>Anecdote with most votes</h2>
          <p>{props.anecdote}</p>
          <p>has {props.votes} votes</p>
      </div>
      
    )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  
  const [selected, setSelected] = useState(0)
 
  const getRandomAnecdote = (event) =>{
    let random = Math.floor(Math.random()*anecdotes.length);
    setSelected(random);
  }

  let newArray = [...anecdotes];
  newArray.fill(0);
  const [votes, setVotes] = useState(newArray);
  const vote = (event) =>{
    
    let result = votes.map((v,i)=>{
      if(i === selected){
        return v+1
      }else{
        return v
      }
    })

    setVotes(result)
   
  }
  
  let mostVoted = Math.max(...votes);
  let idx = votes.indexOf(mostVoted)
  
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={getRandomAnecdote} >next anecdote</button>
      <button onClick={vote} >vote</button>
      <Best anecdote={anecdotes[idx]} votes={mostVoted} />
    </div>
  )
}

export default App