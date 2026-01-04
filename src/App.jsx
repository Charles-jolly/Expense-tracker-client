import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import Edit from './pages/Edit'
import View from './pages/View'
import Error from './pages/Error'
import { ToastContainer, toast } from 'react-toastify';
//import './App.css'

function App() {
  

  return (
    <>
    <ToastContainer/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<View/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/edit/:Id" element={<Edit/>}/>

        {/*not found page*/}
        <Route path="*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
