import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Login from './page/Login.jsx'
import Home from './page/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Signup from './page/Singup.jsx'
import Navbar from './components/Navbar.jsx'
import FoodList from './page/foods/FoodList.jsx'
import DynamicFoodMenus from './page/foods/DynamicFoodMenus.jsx'
import FoodSubMenu from './page/foods/FoodSubMenu.jsx'
import FromValidation from './day8/formVAlidation.jsx'
import UseEffectHook from './day9/UseEffectHook.jsx'
import UseEffectWithCleanUp from './day9/UseEffectWithCleanUp.jsx'
import MainComp from './day9/UseContextHook.jsx'
import UseMemoComponent from './day9/UseMemoComponents.jsx'
import UseCallbackComponent from './day9/UseCallbackComponent.jsx'
import TodoExample from './day9/TodoExample.jsx'
import UseReducerExample from './day9/UseReducerExample.jsx'
import CompA from './day11/Users.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path= '/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup isLoggedIn={"True"}/>}/>
          <Route path='food-menu' element={<FoodList/>}/>
          <Route path='d-food-menu' element={<DynamicFoodMenus/>}/>
          <Route path='food-sub-menu' element={<FoodSubMenu/>}/>
          <Route path ='form-validation' element={<FromValidation/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <App />
    <Signup isLoggedIn={(false)}/> */}
    {/* <UseEffectHook/>
    <UseEffectWithCleanUp/>
    <MainComp/> */}
    {/* <Gallery/> */}
    <CompA/>
    <UseReducerExample/>
    <TodoExample/>
    <UseCallbackComponent/>
    {/* <UseMemoComponent/> */}
  </StrictMode>, 
)
