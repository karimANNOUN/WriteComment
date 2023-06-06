import React, { useState } from 'react'
import { addDoc ,serverTimestamp } from 'firebase/firestore'
import { colRef } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';
import { useTitle } from '../Hooks/UseTitle';

export const CreatePage = () => {
const [title,setTitle]=useState("")
const [description,setDescription]=useState("")
useTitle("Add")

const navigate = useNavigate()


  function handelSubmit(event){
    event.preventDefault();
    addDoc(colRef,{
        title:title,
        description:description,
        author:{
            name:auth.currentUser.displayName,
            id:auth.currentUser.uid
        },
        createdAt:serverTimestamp(), // hadi khasa bl wa9t li derna fih lhaja 
        updatedAt:serverTimestamp()
      })
      navigate("/")
  }



  return (
    <main>
         <section >
      <span className='text-4xl italic font-bold  block my-12'>Add New Post</span>
      <div className='mt-12'>
      <form onSubmit={handelSubmit}>
      <input className='w-[60%] h-12 border-b rounded mb-4' type='text' name='title' value={title} placeholder='Title' onChange={(event)=>setTitle(event.target.value)} required />
         <div className="w-[60%] mb-4 border h-48 mx-auto border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
             <div className="px-4 py-2 h-[70%] bg-white rounded-t-lg dark:bg-gray-800" >
                 <label htmlFor="comment" className="sr-only">Your comment</label>
                 <textarea id="comment" rows="4" name='description' value={description}  onChange={(event)=>setDescription(event.target.value)} className="w-full h-full  px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
             </div>
             <div className="flex items-center justify-end px-3 py-2 border-t dark:border-gray-600">
                 <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                     Post comment
                 </button>
                 
             </div>
         </div>
      </form>

      </div>
 


      </section>
    </main>
   
  )
}
