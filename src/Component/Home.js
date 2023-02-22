import React from 'react'
import Header from './Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <h1>Jkagk</h1>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Header />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Home
