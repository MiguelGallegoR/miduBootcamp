import { useState } from 'react'

const Statistics = (props) => {
  // ...

  return (
    <div>
       <h2>Statistics</h2>
       <table>
        <tbody>
            <tr><td>Good: {props.good}</td></tr>
            <tr><td>Neutral: {props.neutral}</td></tr>
            <tr><td>Bad: {props.bad}</td></tr>
            <tr><td>Clicks: {props.clicks}</td></tr>
            <tr><td>Score: {props.score}</td></tr>
            <tr><td>Media: {props.score/props.clicks}</td></tr>
            <tr><td>Positive: {(props.good/props.clicks)*100} %</td></tr>          
        </tbody>
       </table>
        
    </div>
  )
}

const StatisticsButtons = (props) =>{
  return  (
    <div>
      <button name = {props.name} onClick={props.func} >{props.name}</button>
      <br/>
    </div>
  )
}

const App = () => {
  
    const [feedback, setFeedback] = useState({
      good: 0,
      neutral: 0,
      bad: 0,
      score: 0,
      clicks: 0
    });

    const handleClick = (event) => {
      /*
        let newFeedbackState;
        if(event.target.name === 'good'){
          newFeedbackState = {
            ...feedback,
            good: feedback.good+1,
            score: feedback.score+1,
            clicks: feedback.clicks+1
          }
        
        }
        if(event.target.name === 'neutral'){
          newFeedbackState = {
            ...feedback,
            neutral: feedback.neutral+1,
            clicks: feedback.clicks+1
          }
        
        }
        if(event.target.name === 'bad'){
          newFeedbackState = {
            ...feedback,
            bad: feedback.bad+1,
            score: feedback.score-1,
            clicks: feedback.clicks+1
          }
        
        }
      
        setFeedback(newFeedbackState);
        console.log(event.target.name);
     */
        const {name} = event.target;
        let values = {
          good: 1,
          neutral : 0
        }

        let newFeedbackState = {
          ...feedback,
          [name]: feedback[name]+1,
          score: name === 'bad' ? feedback.score - 1 : feedback.score + values[name],
          clicks : feedback.clicks+1
        }

        setFeedback(newFeedbackState);
    }


  return (
    <div>
      <h2>give feedback</h2>
      <StatisticsButtons name = 'good' func = {handleClick}/>
      <StatisticsButtons name = 'neutral' func = {handleClick}/>
      <StatisticsButtons name = 'bad' func = {handleClick}/>
      {feedback.clicks === 0
        ? <h2>No feedback given</h2> 
        : <Statistics good={feedback.good} neutral = {feedback.neutral} bad = {feedback.bad} clicks ={feedback.clicks} score ={feedback.score} />
      }
    </div>

  )
}

export default App