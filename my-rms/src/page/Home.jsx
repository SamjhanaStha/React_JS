/** 
1. Create a new project name "my-rms". 
2. Create Navbar, Footer, components inside components folder. 
3. Create Home, login, and Singup inside pages folder. 
4. Setup route and create route for home login signup. 
5. inside App.jsx, use Navbar, Outlet and footer.
6. Add CSS accordinly
**/

import '../style.css'

let Home = ()=>{
    return(
        <div className="home">
            <h1>Welcome to Home Page</h1><br />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quas numquam dignissimos mollitia deserunt libero. Dolores neque, fuga minus, illum, ratione eligendi non consequatur praesentium eos officiis sequi voluptate repudiandae?</p>
        </div>
    )
}

export default Home