import React from 'react'

export default function Counter() {
  const [count, setCount] = React.useState(0)

  const handleIncrementClick = () => {
    setCount(count + 1)
  }

  const handleDecrementClick = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <button onClick={handleDecrementClick}>-</button>
      <text>{count}</text>
      <button onClick={handleIncrementClick}>+</button>
    </div>
  )
}