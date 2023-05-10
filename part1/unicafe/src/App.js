import { useState } from "react";

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        no feedbacks given
      </div>
    )
  }
  return (
    <div>
      <p>{props.stats1} {props.number1} </p>
      <p>{props.stats2} {props.number2} </p>
      <p>{props.stats3} {props.number3} </p>
      <p>{props.stats4} {props.number4} </p>
      <p>{props.stats5} {props.number5} </p>
      <p>{props.stats6} {props.number6} </p>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  
  const average = total === 0 ? 0 : (good - bad) / total 

  const positive = total === 0 ? 0 : (good * 100) / total

  const handleGoodClick = () => {
    console.log(good + 1, 'you voted good')
    setGood(good + 1)
    setTotal(total + 1)
  }

  const handleNeutralClick = () => {
    console.log(neutral + 1, 'you voted neutral')
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleBadClicks = () => {
    console.log(bad + 1, 'you voted bad')
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick} >good</button>
      <button onClick={handleNeutralClick} >neutral</button>
      <button onClick={handleBadClicks} >bad</button>
      <h1>statistics</h1>
      <Statistics
        total={total}
        stats1='good' number1={good}
        stats2='neutral' number2={neutral}
        stats3='bad' number3={bad}
        stats4='all' number4={total}
        stats5='average' number5={average}
        stats6='positive' number6={positive.toString().concat(' %')}
      />
    </div>
  )
}

export default App;