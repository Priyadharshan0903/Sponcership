import './App.css';
import React from 'react';
import Earning from './components/earning'
import Card from './components/card'

import Review from './components/review';
function App() {
  return (
    <div className=" flex flex-col">
      {/* statistics */}
      <div id='yourstats' className=' flex flex-row '>
              <h1 className=' underline text-xl font-bold mt-6 basis-5/6 px-4 underline-offset- ml-8'>Your Statistics</h1>
        <span className=' basis-1/6 mt-4'>
          <button className=' bg-gray-200 px-6 py-2 '>Verify Your Account</button>
        </span>
      </div>

      {/* Earnings */}

      <div id='earnings' className='  mt-6'>
        <div className='  flex flex-row ml-3'>
           <div className=' basis-1/3 text-center ml-7 pr-2'><Earning /></div>
           <div className=' basis-1/3 text-center pr-2'> <Earning /></div>
           <div className='basis-1/3 text-center  pr-11'><Earning /></div>
         </div>
      </div>
      <div>
        <h1 className=' underline px-4 underline-offset-[5px] text-xl font-bold mt-20 ml-8'>Some proposals</h1>
      </div>

      {/*Card */}

      <div className=' flex flex-row ml-11 mr-6'>
        <Card className='basis-1/3  '/>
        <Card className='basis-1/3 '/>
        <Card className='basis-1/3 ' />
      </div>
      <div className=' flex flex-row pb-4 ml-11 ml-8'>
        <Card className='basis-1/3 ' />
        <Card className='basis-1/3 ' />
        <Card className='basis-1/3 '/>
      </div>

      {/* Review*/}

      <div id='review' className=' mt-8'>
              <h1 className=' text-xl font-bold underline pl-3 underline-offset-4 '>Our Client Reviews</h1>

        <Review />
        <Review />
      </div>
    </div>
  );
}

export default App;
