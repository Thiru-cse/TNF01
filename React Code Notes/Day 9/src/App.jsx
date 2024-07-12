import React from 'react'
import WithoutUseRef from './useref/WithoutUseRef'
import UseReducer from './usereducer/UseReducer'

export default function App() {
  return (
    <div>
      <h1>App Comp</h1>
      {/* <WithoutUseRef/> */}
      <UseReducer/>
    </div>
  )
}
