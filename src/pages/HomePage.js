import React, { useEffect, useRef, useState } from 'react'
import { Cart } from '../component'
import { getDocs , collection } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useTitle } from '../Hooks/UseTitle'
import { Skelton } from '../component'

export const HomePage = () => {
  const [posts,setPosts]=useState([false,false,false]) // hadi false false 3andha relation gedeh mn skeleton ra7 ndirou esque 2 wela 1 wela 3 
  const [toggle,setToggle] = useState(false) // hadi drnaha bah ndirou update lel effect ti3na bah ki nsuprimiw tetna7a valeur wa7dha
  const colRef=useRef(collection(db,"post")) ; // hadi glbnaha b ref pasque f dépendencie tlabha w ki dernaha jetna loup infinie pasque rahi object tsema lezmna nfixiwha bah na9drou ndiroha f dépendencie
useTitle("Home")
  useEffect((()=>{
    async function getposts (){
      const data = await getDocs(colRef.current)
      setPosts(data.docs.map((document)=>({...document.data() , id:document.id}))) 
    }
    
    getposts()
   // eslint-disable-next-line
  }),[colRef,toggle])

  



  return (
    <main className='mt-12'>
      
    
    {posts.map((current , index) =>(
      
      current ? (<Cart key={current.id} current={current} toggle={toggle} setToggle={setToggle} />) : <Skelton key={index} /> 
      
       ))}

      
      

    </main>
  )
}
