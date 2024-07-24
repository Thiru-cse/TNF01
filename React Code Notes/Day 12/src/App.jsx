import { useState } from 'react'
import { Provider } from 'react-redux'
import DisplayReduxState from './components/DisplayReduxState'
import UpdateReduxState from './components/UpdateReduxState'
import { operationStore } from './features/OperationStore'
import Card from './components/Example2Redux/Card'
import { productStore } from './features/Example2ReduxOp/ProductStore'


function App() {

  return (
    <>
      <div>
        <h1>App Component</h1>
        {/* <Provider store={operationStore}>
        <DisplayReduxState/>
        <UpdateReduxState/>
        </Provider> */}

        {/* Example:2 */}
        <Provider store={productStore}>
          <Card/>
        </Provider>
      </div>
    </>
  )
}

export default App
