import React from 'react'
import { auth , db } from '../firebase/config'
import { deleteDoc ,doc } from 'firebase/firestore'
export const Cart = ({current , toggle , setToggle}) => {
  const isAuth= JSON.parse(localStorage.getItem("isAuth")) 

 async function handelDelete(){
  const document = doc(db,"post",current.id)
  await deleteDoc(document)
  setToggle(!toggle)
  
 }


  return (
    <section className='border-b-2 my-4 w-[80%] mx-auto  '>
      <div className='flex justify-start mt-3'>
      <span className='text-2xl italic font-bold  block'>{current.title}</span>
      </div>
      <div className='text-left my-3'>
      <span className='text-sm italic font-medium  '>{current.description}</span>
      </div>
      <div className='flex justify-between mb-3'>
      <span className='border rounded-none px-3 py-1 bg-gray-400'>{current.author.name}</span>
      { isAuth && (auth.currentUser.uid === current.author.id)  &&  <span onClick={handelDelete} ><i className="bi bi-trash3 text-red-700"></i></span> }
    
      </div>
     
    </section>
  )
}
