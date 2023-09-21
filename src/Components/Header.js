import React,{useState} from 'react';
import { LOGO_URL } from '../utils/constans';

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
                <li>Home</li>
                <li>About US</li>
                <li>Contact US</li>
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