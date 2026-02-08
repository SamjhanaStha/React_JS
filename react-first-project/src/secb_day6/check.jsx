import Dashboard from "./Dashboard"
import Login from "./login"

let CheckPage = ({isLoggedIn}) =>{
    if(isLoggedIn){
        return(
            <Dashboard/>
        )
    } else {
        return(
            <Login/>
        )
    }
}

export default CheckPage