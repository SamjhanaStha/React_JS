import Home from "./Home"
import Login from "./Login"

let Signup = ({isLoggedIn}) =>{
    if(isLoggedIn){
        return(
            <div>
                {/* <h4>your Id already sign up. so you can do log out.</h4> */}
                <Home/>
            </div>
        )
    }
    else {
        return(
            <Login/>
        )
    }
}

export default Signup