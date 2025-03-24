import React from 'react';
import './App.css';

function App() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <h1>Expense Tracker</h1>
      <div className='w-full '>
        <h3 className=''>
          YOUR BALANCE
        </h3>
        <span className=''>$260.00</span>
        <div className='flex justify-center items-center border '>
          <div className='border'>
            <h2>INCOME</h2>
            <span>500$</span>
          </div>
          <div className='border'>
            <h2>EXPENSE</h2>
            <span>240$</span>
          </div>
          
        </div>
      </div>
      <div>
        <h3>
          History
        </h3>
        <div>
          cash
        </div>
        <div>Book</div>
        <div>Camera</div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h3>Add new Tracnsaction</h3>
        <h4>Text</h4>
        <input type="text" placeholder='Enter text...'/>
        <h4>Amount</h4>
        <span>
          (negative-expense, positive-expense)
        </span>
        <input type="number" placeholder='Enter amount...'/>
      </div>
      <button>Add transaction</button>
    </div>
  );
}

export default App;