 import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home, { First } from './home.jsx'
import EventHandling from './eventHandling/EventHandling.jsx'
import Profile from './propsExample/profile.jsx'
import UseOfState from './stateExample/UseOfState.jsx'

let person ={
  age : 23,
  nmae : "Mahima",
  address : "Nepal"
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Home/>
    <First/> */}
    <UseOfState/>  
    <EventHandling/>
    <Profile age={20} name={"Samjhana"} address={"BKT"}/>
    {/* Spread operator in props */}
    <Profile {...person}/>
  </StrictMode>,
)
