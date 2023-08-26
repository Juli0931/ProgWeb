import React, { useState } from 'react';
import { Header, Counter, Button, Footer } from './components';
import "./components/Styles/Style.css"

export function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <div className='App'>
      <Header/>
      <Counter count={count}/>
      <div className='ButtonsDiv'>
        <Button tittle= 'Increase' handle={Increment}/>
        <Button tittle= 'Reset' handle={Reset}/>
        <Button tittle= 'Decrease' handle={Decrement}/>
      </div>
      <Footer/>
    </div>
  );
}