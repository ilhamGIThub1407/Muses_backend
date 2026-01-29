import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainLayout from './dashboard/layouts/MainLayout'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<MainLayout/>} >
            {/* <Route path='' index element={<Mainlayout/>} /> */}


        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
