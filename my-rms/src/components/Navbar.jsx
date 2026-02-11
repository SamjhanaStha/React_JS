import { Link } from "react-router"
import "../style.css"

let Navbar = () => {
    return(
        <div>
            <div className="navbar">
                <b>
                <Link to={"/"}>Home</Link>
                </b>
                <b>
                    <Link to={"/login"}>Login</Link>
                </b>
                <b>
                    <Link to={"/signup"} >Signup</Link>
                </b>
                <b>
                    <Link to={"/food-menu"}>Food Menu</Link>
                </b>
            </div>
        </div>
    )
}

export default Navbar