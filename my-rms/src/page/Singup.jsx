import Home from "./Home"
import Login from "./Login"

let Signup = ({isLoggedIn}) =>{
    if(isLoggedIn){
        return(
            <Home/>
        )
    }
    else {
        return(
            <Login/>
        )
    }
}

export default Signup