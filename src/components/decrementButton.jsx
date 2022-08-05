import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from '../redux/app'

export default function DecrementButton() {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(decrement())
  }

  return (
    <button onClick={handleClick}>-</button>
  )
}