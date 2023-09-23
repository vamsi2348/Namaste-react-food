import React,{useState} from 'react';
import { LOGO_URL } from '../utils/constans';
import { Link } from 'react-router-dom';

const Header = () => {
    const [loginout, setLoginout] = useState("Login");

    const toogleLogin = () => {
        //
        if(loginout === "Login"){
            setLoginout("Logout");
        }else{
            setLoginout("Login");

        }
    }

    
    return (
        <div className='header'>
        {/* // logo */}
            <div className='res-logo-container'>
                <img className="logo" alt='logo' src={LOGO_URL} />
            </div>
        {/* //nav-item */}
        <div className='nav-list'>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About US</Link></li>
                <li><Link to={"/contact"}>Contact US</Link></li>
                <li>Cart</li>
                <li><button onClick={() => {
                    loginout === "Login" ? setLoginout("Logout") : setLoginout("Login")
                }}>{loginout}</button></li>
            </ul>

            </div>
            
        </div>
        )
}

export default Header;