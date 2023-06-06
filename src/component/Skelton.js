import React from 'react'
import Skeleton from 'react-loading-skeleton'
export const Skelton = () => { // skeleton ada ydirlna loading ta page 9bel matfetcher data ti3na w tjibha
  return (
    <section className='border-b-2 my-4 w-[80%] mx-auto  '>
    <div className='flex justify-start mt-3'>
    <span className='text-2xl italic font-bold  block'><Skeleton /></span>
    </div>
    <div className='text-left my-3'>
    <span className='text-sm italic font-medium  '><Skeleton count={3} /></span>
    </div>
    <div className='flex justify-between mb-3'>
    <Skeleton width="70px"/>
 
  
    </div>
   
  </section>
  )
}
