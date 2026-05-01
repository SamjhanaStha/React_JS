import { useState } from 'react'
// import { ThemeContext } from './theme_context'
import Home from './Home'
import { Link, Outlet, Route, Routes } from 'react-router'

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <>
      {/* <button onClick={()=>setTheme(
        theme == "light" ? "dark" : "light"
      )}>Togggle Theme</button>
      <h1 className={`title ${theme == "light" || "title-dark" }`}>Counter App</h1>
      <ThemeContext.Provider value={theme}>
            <Home/>
        </ThemeContext.Provider> */}

        {/* Navbar should be placed here only */}
        <div>
          Navbar
          {/* Link should go here */}
          <Link to={"/"}>Home</Link><br />
          <Link to={"/user/23134"}>User</Link><br />
        </div>
        <Outlet/>
        {/* footer should be placed here only */}
        <div>
          Footer
        </div>
        {/* All route config should be here */}
        
    </>
  )
}

export default App