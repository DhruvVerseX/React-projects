import React from 'react'
import { Balance } from './Balance'
import { Boxes} from './Boxes'

export const Header = () => {
  return (
    <header className='bg-amber-200 h-screen flex justify-center items-center '>
      <div>
        <h1 children='flex item-center align-center'>
          Expanse Tracker
        </h1>
        <Balance/>
        <Boxes/>
    </div>
    </header>
   
  )
}
