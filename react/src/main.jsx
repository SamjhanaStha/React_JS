import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Home.jsx'
import UserDetails from './day11/User.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          {/* dynamic route */}
          <Route path='user/:id' element={<UserDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      
  </StrictMode>,
)
