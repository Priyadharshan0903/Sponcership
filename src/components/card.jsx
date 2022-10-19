import React from 'react'
import Pineapple from '../assets/pineapple.jpg'
function card() {
  return (
    <div className='Card-btn w-[30vw] ml-4 mt-14 '>
            <div className='Card-body '>
                 <div>
                      <img src={Pineapple} className='rounded-t-lg bg-cover' />
                 </div>
                 <div className=' bg-gray-200 rounded-b-lg'>
                 <div className='flex flex-row'>
                      <h2 className=' basis-5/6 font-semibold pl-3'>This is the title of the page</h2>
                      <span className=' basis-1/6 pr-2'><h2 className=' font-extrabold'>$12,000</h2></span>
                 </div>
                      <p className=' text-sm  text-justify pt-4 pl-3 pb-6 pr-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.......</p>
               </div>
      </div>
    </div>
  )
}

export default card
