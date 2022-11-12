import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
    const [feedback, setFeedback] = useState({
      good: 0,
      neutral: 0,
      bad: 0,
      score: 0,
      clicks: 0
    });

    const handleClickGood = () => {
      let newFeedbackState = {
        ...feedback,
        good: feedback.good+1,
        score: feedback.score+1,
        clicks: feedback.clicks+1
      }
      setFeedback(newFeedbackState);
    }

    const handleClickBad = () => {
      let newFeedbackState = {
        ...feedback,
        bad: feedback.bad+1,
        score: feedback.score-1,
        clicks: feedback.clicks+1
      }
      setFeedback(newFeedbackState);
    }

    const handleClickNeutral = () => {
      let newFeedbackState = {
        ...feedback,
        neutral: feedback.neutral+1,
        clicks: feedback.clicks+1
      }
      setFeedback(newFeedbackState);
    }

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={handleClickGood} >Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button>

      <div>
        <h2>Statistics</h2>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
        <p>Clicks: {feedback.clicks}</p>
        <p>Score: {feedback.score}</p>
        <p>Media: {feedback.score/feedback.clicks}</p>
      </div>
    </div>

  )
}

export default App