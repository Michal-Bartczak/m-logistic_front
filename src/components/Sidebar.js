import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className="sidenav">
            <p className="logo"><span>M</span>-Logistic</p>
            <Link to="/" className="icon-a">Strona główna</Link>
            <Link to="/register" className="icon-a">Rejestracja</Link>
            <Link to="/login" className="icon-a">Logowanie</Link>
            <Link to="/send-package" className="icon-a">Wyślij paczkę</Link>
            <Link to="/track-package" className="icon-a">Śledzenie przesyłki</Link>
            <Link to="/contact" className="icon-a">Kontakt</Link>
            <Link to="/faq" className="icon-a">FAQ</Link>
        </div>
    );
};

export default Sidebar;
