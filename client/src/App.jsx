import React from 'react'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import MainLayout from './dashboard/layouts/MainLayout'
import AdminIndex from './dashboard/pages/AdminIndex'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<MainLayout/>} >
            <Route index element={<Navigate to='/dashboard/admin'  />} />
            <Route path='admin' element={<AdminIndex/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
