import React from 'react'
import CounterText from '../components/counterText'
import DecrementButton from '../components/decrementButton'
import IncrementButton from '../components/incrementButton'
import IncreaseByAmount from '../components/increaseByAmount'

export default function Counter() {
  return (
    <div>
      <DecrementButton />
      <CounterText />
      <IncrementButton />
      <br />
      <IncreaseByAmount />
    </div>
  )
}