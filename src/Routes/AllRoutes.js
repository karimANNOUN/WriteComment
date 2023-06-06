import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreatePage, HomePage , PageNotFound } from '../pages'
import { ProtectedRoutes } from './ProtectedRoute'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='create' element={<ProtectedRoutes><CreatePage/></ProtectedRoutes> } />
            <Route path='*' element={<PageNotFound/>} />
           
        </Routes>
    </div>
  )
}
