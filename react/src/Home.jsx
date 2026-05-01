import { useContext } from "react"
import { ThemeContext } from "./theme_context"
import { useLocation } from "react-router"

const Home = ()=>{
    // use context
    let theme = useContext(ThemeContext)
    // useLocation hook is used to get data that is send from useNAvigation
    let location = useLocation()
    console.log(location)
    return(
        <div>
            <h3 className={`title ${theme == "light" || "title-dark" }`}>Home Page</h3>
            <b>ID: {location.state}</b>
        </div>
    )
}
export default Home