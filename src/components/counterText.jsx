import React from 'react'
import { useSelector } from 'react-redux'

export default function CounterText() {
  const count = useSelector((state) => state.counter.value)

  return (
      <text>{count}</text>
  )
}