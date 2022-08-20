import React from 'react'
import CounterText from './components/counterText'
import DecrementButton from './components/decrementButton'
import IncrementButton from './components/incrementButton'
import ChangesByAmount from './components/changesByAmount'

export default function App() {
  // Declare a new state variable, which we'll call "count" and set it to 0. I will pass count to the CounterText component as a prop.
  const [count, setCount] = React.useState(0)

  // I will pass this function to the `IncrementButton` component as a prop.
  const handleDecrementButtonClick = () => {
    setCount(count - 1)
  }

  // I will pass this function to the `DecrementButton` component as a prop.
  const handleIncrementButtonClick = () => {
    setCount(count + 1)
  }

  // I will pass this function to the `ChangeByAmount` component as a prop.
  const handleChangeByAmountButtonClick = (event) => {
    // prevent the default behavior of the form submit event, which is to refresh the page.
    event.preventDefault();
    // checking if the input is a number
    const amount = parseInt(event.target.number.value)
    if (!isNaN(amount)) {
      setCount(count + amount)
    }
    // resetting the input field
    event.target.number.value = ''
  }
  
  return (
    <div>
      <DecrementButton handleClick={handleDecrementButtonClick} />
      <CounterText count={count}  />
      <IncrementButton handleClick={handleIncrementButtonClick} />
      <ChangesByAmount handleClick={handleChangeByAmountButtonClick} />
    </div>
  )
}