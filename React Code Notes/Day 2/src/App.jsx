import React from 'react';
import CompA from './component/CompA';
import CompB from './component/CompB';
import CompC from './component/CompC';
import Home from './component/Home';

const App = () => {
  let a = 10;
  const arr = [1,2,3,4,5];
  const obj ={batch:"TNF01",team:"thiru"};
  const arrObj = [
    {id:1,name:"john", designation:"FE Dev"},
    {id:2,name:"kumar", designation:"FSD Dev"},
    {id:3,name:"doe", designation:"BE Dev"}
  ]
  return (
    <div>
      {/* <h1>{a}</h1>
      <CompA a={a} arr={arr} />
      <CompB obj={obj} />
      <CompC arrObj={arrObj}/> */}
      <Home arrObj={arrObj} />
    </div>
  );
};

export default App;