import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ()=>{

    const [log, setLog] = useState("Login");
    return(
        <div className="headerContainer">
            <div className="logoContainer">
                <img  className="logo" alt="Logo" src="https://cdn.dribbble.com/users/630677/screenshots/3833541/zootzoot1.jpg"/>
            </div>
            <div className="nav">
                <ul className="nav-items">
                    <Link to="/" className="link-tags"><li>Home</li></Link>
                    <Link to="/about" className="link-tags"><li>About Us</li></Link>
                    <Link to="/contact" className="link-tags"><li>Contact</li></Link>
                    <Link to="cart" className="link-tags"><li>Cart</li></Link>
                    <button className="loginBtn" onClick={()=>{
                    log==="Login"?setLog("LogOut"):setLog("Login");
                }}>{log}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;