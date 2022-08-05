import React from 'react'
import CounterText from '../components/counterText'
import DecrementButton from '../components/decrementButton'
import IncrementButton from '../components/incrementButton'

export default function Counter() {
  return (
    <div>
      <DecrementButton />
      <CounterText />
      <IncrementButton />
    </div>
  )
}