const Header = ()=>{
    return(
        <div className="headerContainer">
            <div className="logoContainer">
                <img  className="logo" alt="Logo" src="https://cdn.dribbble.com/users/630677/screenshots/3833541/zootzoot1.jpg"/>
            </div>
            <div className="nav">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;