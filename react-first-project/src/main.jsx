 import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home, { First } from './home.jsx'
import EventHandling from './eventHandling/EventHandling.jsx'
import Profile from './propsExample/profile.jsx'
import UseOfState from './stateExample/UseOfState.jsx'
import StateExample from './secb_day6/stateExample.jsx'
import ConditionalRender from './secb_day6/conditionalRender.jsx'
import CheckPage from './secb_day6/check.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Dashboard from './secb_day6/Dashboard.jsx'
import Login from './secb_day6/login.jsx'

// let person ={
//   age : 23,
//   nmae : "Mahima",
//   address : "Nepal"
// }

/*
  package: react-router
   Install: npm i react-router
   components:
    - BrowerRouter
    - Main Component or root component
  -Routes
    -to include multiple routes
  - Route
    -to creat route with path and element
  - Outlet
    -where to display the element
  -Link
    -to navigation to the required path
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Home/>
    <First/> */}
    {/* <UseOfState/>  
    <EventHandling/>
    <Profile age={20} name={"Samjhana"} address={"BKT"}/> */}
    {/* Spread operator in props */}
    {/* <Profile {...person}/> */}
    {/* <StateExample/>
    <ConditionalRender/>
    <CheckPage isLoggedIn={false}/> */}
    <BrowserRouter>
      <Routes>
        {/* initial route (/) */}
        <Route path='/' element={<App/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='login' element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)


