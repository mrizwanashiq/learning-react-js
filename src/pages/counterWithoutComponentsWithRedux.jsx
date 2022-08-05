import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handleIncrementClick = () => {
    dispatch(increment())
  }

  const handleDecrementClick = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <div>
        <button onClick={handleIncrementClick}>+</button>
        <text>{count}</text>
        <button onClick={handleDecrementClick}>-</button>
      </div>
    </div>
  )
}