import { useState } from 'react'
import UseEffectAPI from './components/UseEffectAPI'
import Comp1 from './components/propsdrilling/Comp1';

function App() {

  let a = 10;

  return (
    <>
    <h1>App Component</h1>
    <h1>A value is: {a}</h1>
    {/* <UseEffectAPI/> */}
    <Comp1 a={a}/>
    </>
  )
}

export default App
