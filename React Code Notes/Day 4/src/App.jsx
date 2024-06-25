import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CompA from "./components/CompA";
import LifeCycle from "./components/LifeCycle";
// import './App.css'

function App() {
  let val = 5;
  return (
    <>
    <h1>App Component</h1>
    <LifeCycle/>
    </>
  )
}

export default App;
