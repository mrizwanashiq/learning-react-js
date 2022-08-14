import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementByAmount } from '../redux/app'

export default function ChangesByAmount() {
  const dispatch = useDispatch()

  const handleClick = (event) => {
    event.preventDefault();
    // checking if the input is a number
    const amount = parseInt(event.target.number.value)
    if (!isNaN(amount)) {
      dispatch(incrementByAmount(amount))
    }
    event.target.number.value = ''
  }

  return (
    <form onSubmit={handleClick}>
      <input type='number' name='number' placeholder='Change by Amount'/>
      <button type='submit'>Change by amount</button>
    </form>
  )
}