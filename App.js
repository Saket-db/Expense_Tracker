import './App.css';
import React from 'react';
import  Header  from './Components/Header';
import  Balance  from './Components/Balance';
import  Income  from './Components/Income';
import  History  from './Components/History';
import Addtrans from './Components/Addtrans';

function App() {
  return (
    <div>
      <Header />
        <div className = "container">
        <Balance />
        <Income />
        <History />
        <Addtrans />
      </div>
    </div>
  );
}

export default App;
