import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementByAmount } from '../redux/app'

export default function ChangesByAmount() {
  const dispatch = useDispatch()

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(incrementByAmount(parseInt(event.target.number.value)))
    event.target.number.value = ''
  }

  return (
    <form onSubmit={handleClick}>
      <input type='number' name='number' placeholder='Change by Amount'/>
      <button type='submit'>Change by amount</button>
    </form>
  )
}