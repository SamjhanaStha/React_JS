import { Link } from "react-router"
import "../sytle.css"

let Navbar = () => {
    return(
        <div>
            <div className="navbar">
                <b>
                <Link to={"/Home"}>Home</Link>
                </b>
                <b>
                    <Link to={"/login"}>Login</Link>
                </b>
                <b>
                    <Link to={"/signup"} >Signup</Link>
                </b>
            </div>
        </div>
    )
}

export default Navbar