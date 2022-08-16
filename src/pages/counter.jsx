import React from 'react'
import CounterText from '../components/counterText'
import DecrementButton from '../components/decrementButton'
import IncrementButton from '../components/incrementButton'
import ChangesByAmount from '../components/changesByAmount'

export default function Counter() {
  const [count, setCount] = React.useState(0)

  const handleDecClick = () => {
    setCount(count - 1)
  }

  const handleIncClick = () => {
    setCount(count + 1)
  }

  const handleAmountClick = (event) => {
    event.preventDefault();
    // checking if the input is a number
    const amount = parseInt(event.target.number.value)
    if (!isNaN(amount)) {
      setCount(count + amount)
    }
    event.target.number.value = ''
  }
  
  return (
    <div>
      <DecrementButton handleClick={handleDecClick} />
      <CounterText count={count}  />
      <IncrementButton handleClick={handleIncClick} />
      <ChangesByAmount handleClick={handleAmountClick} />
    </div>
  )
}