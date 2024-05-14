import React from 'react';
import { Link } from 'react-router-dom';

const DriverSidebar = () => {
    return (
        <div id="mySidenav" className="sidenav">
            <p className="logo"><span>M</span>-Logistic</p>
            <Link to="/driver/homepage" className="icon-a"><i className="fa fa-truck icons"></i>&nbsp;&nbsp; Lista przesyłek</Link>
            <Link to="/driver/edit-password" className="icon-a"><i className="fa fa-key icons"></i>&nbsp;&nbsp; Zmień hasło</Link>
            <Link to="#" className="icon-a"><i className="fa fa-user-circle-o" aria-hidden="true"></i>&nbsp;&nbsp; Zmień dane</Link>
            <Link to="/driver/raport" className="icon-a"><i className="fa fa-folder-open" aria-hidden="true"></i>&nbsp;&nbsp; Raporty</Link>
            <Link to="/logout" className="icon-a"><i className="fa fa-sign-out icons" aria-hidden="true" style={{ color: '#f7403b' }}></i>&nbsp;&nbsp; Wyloguj</Link>
        </div>
    );
};

export default DriverSidebar;
