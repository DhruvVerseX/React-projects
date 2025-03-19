import React from 'react';
import './App.css';

function App() {
  return (
    <div className="h-screen w-28 bg-slate-500 flex flex-col ml-50% items-center justify-center">
      <div className='item-start'>
        <h1 className="text-3xl  font-cassandra flex items-center ">Expanse Tracker</h1>
      <div className=''>
        <h3 className="uppercase font-cassandra">Your Balance</h3>
        <p>$260.00</p>
      </div>
      <div className='h-12 w-fit bg-slate-400 gap-6  border rounded-lg flex flex-grow  items-center justify-center'>
        <div className='space-x-4'>
          <h2>
            INCOME
          </h2>
          <span>
            500$
          </span>
        </div>
        <div>
          <h2>
            EXPANSE
          </h2>
          <span>
            200$
          </span>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default App;
