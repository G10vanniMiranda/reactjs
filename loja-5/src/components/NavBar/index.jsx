import "./NavBar.css"
import { Link } from "react-router-dom";

export function NavBar(){
    return(
        <div className="nav-bar">
            <button className="menu">
                <img src="./image/menu.png" alt="" />
            </button>
            <ul>
                <li> <Link to="/">         Home </Link> </li>
                <li> <Link to="/courses">  Cursos </Link> </li>
                {/* <li> <Link to="/training"> Treinamentos </Link> </li> */}
                {/* <li> <Link to="/Product">  Produtos </Link> </li> */}
                <li> <Link to="/Employer"> Employer </Link> </li>
                
            </ul>
            <button>Login</button>
        </div>
    )
}