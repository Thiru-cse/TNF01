import { useState } from "react";
import PropsComp from "./components/PropsComp";
import StateComp from "./components/StateComp";
import ArrayOperation from "./components/ArrayOperation";
import ConditionalRendering from "./components/ConditionalRendering";

function App() {
  const [value, setValue] = useState(0);
  let a = 10;

  let b = [1, 2, 3, 4, 5];
  const [arrvalue, setArrValue] = useState(b); // arrvalue=[1,2,3,4,5]

  const [status, setStatus] = useState(true);
  const [cartCount, setCardCount] = useState(0);
  let data = [
    { id: 1, name: "iphone", price: 1000 },
    { id: 2, name: "samsung", price: 2000 },
    { id: 3, name: "nokia", price: 5000 }
  ];
  const [product, setProduct] = useState(data);

  return (
    <>
      <h1>App Component</h1>
      {/* <PropsComp a={a} /> */}
      {/* <StateComp setValue={setValue} value={value}/> */}
      {/* {arrvalue} */}

      {/* <ArrayOperation arrvalue={arrvalue} setArrValue={setArrValue}/> */}

      {/* {status ?  <ConditionalRendering /> : ""} */}

      <ConditionalRendering cartCount={cartCount} setCardCount={setCardCount} product={product} setProduct={setProduct} />
    </>
  );
}

export default App;
