import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './app'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})