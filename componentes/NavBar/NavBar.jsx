import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/logo.png"
import "./NavBar.css"
const NavBar =()=>{

    return(
    <nav className="menu">

<img style={{ height:"80px" }} src={logo}/>
<p className="item">buzos</p>
<p className="item">buzos</p>


<di  className="item">   <CartWidget/></di>
 
    </nav>
    
    
    
    
    )

}

export default NavBar
