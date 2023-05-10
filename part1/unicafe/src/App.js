import { useState } from "react";

const StatisticLine = ({name, number}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{number}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, total, average, positive}) => {
  
  if (total === 0) {
    return (
      <div>
        no feedbacks given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine name='good' number={good} />
          <StatisticLine name='neutral' number={neutral} />
          <StatisticLine name='bad' number={bad} />
          <StatisticLine name='all' number={total} />
          <StatisticLine name='average' number={average} />
          <StatisticLine name='positive' number={positive} />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick} >{text}</button>
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
      <Button text='good' handleClick={handleGoodClick} />
      <Button text='neutral' handleClick={handleNeutralClick} />
      <Button text='bad' handleClick={handleBadClicks} />
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive.toString().concat(' %')}
      />
    </div>
  )
}

export default App;