import { useState } from "react";

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    console.log(good + 1, 'you voted good')
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    console.log(neutral + 1, 'you voted neutral')
    setNeutral(neutral + 1)
  }

  const handleBadClicks = () => {
    console.log(bad + 1, 'you voted bad')
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick} >good</button>
      <button onClick={handleNeutralClick} >neutral</button>
      <button onClick={handleBadClicks} >bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App;