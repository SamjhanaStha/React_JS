import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './page/Login.jsx'
import Home from './page/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Signup from './page/Singup.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path= '/' element={<App/>}>
          <Route index element={<Navbar/>}/>
          <Route path='Home' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup isLoggedIn={true}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <App />
    <Signup isLoggedIn={(false)}/> */}
  </StrictMode>,
)
