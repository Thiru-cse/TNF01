import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {

  const error = useRouteError();
  console.log(error);

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'center', height: '100vh'}}>
      <h1>Error</h1>
      <Link to="/">Go back to home</Link>
    </div>
  )
}

export default Error