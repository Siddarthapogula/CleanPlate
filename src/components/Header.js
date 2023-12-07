import { useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../UserContext";
import { useContext } from "react";

const Header = ()=>{

  const {user} = useContext(UserContext);
  console.log(user);

    const [log, setLog] = useState("Login");
    return(
        <div className="flex w-30 p-3 justify-between items-center  border border-gray-400  bg-red-100  shadow-xl">
            <div className="">
                <Link to="/">
                <img  className=" w-20 " alt="Logo" src="https://cdn.dribbble.com/users/630677/screenshots/3833541/zootzoot1.jpg"/>
                </Link>
                
            </div> 
            <div className="">
                <ul className="flex">
                    <h1 className="mr-4">{user.name}</h1>
                    <Link to="/" className="mr-4"><li>Home</li></Link>
                    <Link to="/about" className="mr-4"><li>About Us</li></Link>
                    <Link to="/contact" className="mr-4"><li>Contact</li></Link>
                    <Link to="cart" className="mr-4"><li>Cart</li></Link>
                    <Link to="/grocery" className="mr-4"><li>Grocery</li></Link>

                    <button className=" px-2 py-[5px] rounded-lg bg-green-200" onClick={()=>{
                    log==="Login"?setLog("LogOut"):setLog("Login");
                }}>{log}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;