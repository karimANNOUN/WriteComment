import React from 'react'
import { useTitle } from '../Hooks/UseTitle'
import notfound from "../assets/hadi tania.png"

export const PageNotFound = () => {
  useTitle("not found")
  return (
    <main >
      <div className='flex  justify-center items-center mt-12 fixed top-[25%] '>
      <span className='text-2xl font-bold' >Page Not Found</span>
      <img src={notfound} alt='not found' className='w-1/2 h-1/2' />
    </div>

    </main>
    
  )
}
