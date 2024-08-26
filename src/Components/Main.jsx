import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Booking from './Booking'
import Bookinglist from './Bookinglist'
const Main = () => {
  return (
    <main>
        <Routes>
            <Route path='/' element={<Header/>}></Route>
            <Route path='/booking' element={<Booking/>}></Route>
            <Route path='/reservations' element={<Bookinglist/>}></Route>
            <Route path='/menu' element={<Main/>}></Route>

        </Routes>
    </main>
  )
}

export default Main