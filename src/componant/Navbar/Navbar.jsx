import { useContext, useState } from "react";
import "./Navbar.css"
import { NavLink, Link, useNavigate } from "react-router-dom";
import { acountContext } from "../../Context/AcountContext";

function Navbar() {
const {token , setToken } =    useContext(acountContext)
let navigate =   useNavigate()

function logout() {
    localStorage.removeItem('token');
    setToken(null)
    navigate("/login")
}


let [NavBar , setNavBar] = useState(false);

const changeSize =()=>
{
    if(window.scrollY > 50)
    {
        setNavBar(true)
    }
    else
    {
        setNavBar(false)
    }
 
}

window.addEventListener(' ',changeSize)


    let [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav  className={NavBar ? 'scrole':"noScrole"}>
            <ul className="">
                <li>

                    <Link className=" text-3xl font-bold ps-2  start-0 inline text-black" to=""> <i className="fa-solid fa-cart-shopping text-green-800" />fresh cart</Link>
                </li>
            </ul>
            <div className="menu   flex lg:hidden   "
                onClick={() => {
                    setMenuOpen(!menuOpen)
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div >
            <div className=" row1  ps-32">
            <ul className={menuOpen ? "hidden lg:flex " : " "}>


{token ? <>
    <li>
    <NavLink className=" rounded  ms-1 flex-col lg:ms-0  w-auto  lg:flex  lg:mb-0 font-bold " to="">home</NavLink>
</li>
<li>
    <NavLink className=" rounded  ms-1 flex-col lg:ms-0 w-auto  lg:flex  lg:mb-0 font-bold " to="cart">cart</NavLink>
</li>
<li>
    <NavLink className=" rounded  ms-1 lg:ms-0 flex-col w-auto  lg:flex  lg:mb-0 font-bold " to="cont">Wish list </NavLink>
</li>
<li>
    <NavLink className=" rounded  ms-1 lg:ms-0 flex-col w-auto  lg:flex  lg:mb-0 font-bold " to="Product">Product</NavLink>
</li>
<li>
    <NavLink className=" rounded  ms-1 lg:ms-0 flex-col w-auto  lg:flex  lg:mb-0 font-bold " to="Catrgories">Catrgories</NavLink>
</li>
<li>
    <button onClick={logout} className=" rounded  ms-1 lg:ms-96 flex-col w-auto  lg:flex  lg:mb-0 font-bold " >logout</button>
</li>

</>:<>
    <li>
    <NavLink className=" rounded  ms-1 lg:ms-0 flex-col w-auto  lg:flex  lg:mb-0 font-bold " to="login">login</NavLink>
</li>
<li>
    <NavLink className=" rounded  ms-1 lg:ms-0 flex-col w-auto  lg:flex  lg:mb-0 font-bold " to="register">register</NavLink>
</li>
<li>
    <NavLink className=" rounded  ms-1 lg:ms-0 flex-col w-auto  lg:flex  lg:mb-0 font-bold " to="forget">forget</NavLink>
</li>
</>}
</ul>
            </div>
        </nav>


        









    )
}

export default Navbar; 
