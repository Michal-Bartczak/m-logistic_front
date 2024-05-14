import React from 'react';
import { Link } from 'react-router-dom';
import '../style/style.css';


const CustomerSidebar = () => {
    return (
        <div id="mySidenav" className="sidenav">
            <p className="logo"><span>M</span>-Logistic</p>
            <Link to="/customer/send" className="icon-a">
                <i className="fa fa-cube icons"></i>&nbsp;&nbsp;&nbsp; Wyślij paczkę
            </Link>
            <Link to="/customer/homepage" className="icon-a" >
                <i className="fa fa-truck icons"style={{width: '20px'}}></i>&nbsp;&nbsp;&nbsp; Lista przesyłek
            </Link>
            <Link to="/customer/edit-password" className="icon-a">
                <i className="fa fa-key icons"></i>&nbsp;&nbsp;&nbsp; Zmień hasło
            </Link>
            <Link to="/customer/edit-details" className="icon-a">
                <i className="fa fa-user icons" aria-hidden="true"style={{width: '20px'}}></i>&nbsp;&nbsp;&nbsp; Zmień dane
            </Link>
            <Link to="/logout" className="icon-a">
                <i className="fa fa-sign-out icons" aria-hidden="true" style={{ color: '#f7403b', width: '20px' }}></i>&nbsp;&nbsp;&nbsp; Wyloguj
            </Link>
        </div>
    );
};

export default CustomerSidebar;
