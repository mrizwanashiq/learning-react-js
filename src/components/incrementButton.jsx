import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../redux/app'

export default function IncrementButton() {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(increment())
  }

  return (
    <button onClick={handleClick}>+</button>
  )
}