import React from 'react'

export function Counter() {
  const [count, setCount] = React.useState(0)

  const handleIncrementClick = () => {
    setCount(count + 1)
  }

  const handleDecrementClick = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <button onClick={handleIncrementClick}>+</button>
      <text>{count}</text>
      <button onClick={handleDecrementClick}>-</button>
    </div>
  )
}