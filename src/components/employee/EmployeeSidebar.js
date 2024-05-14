import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeSidebar = () => {
    return (
        <div id="mySidenav" className="sidenav">
            <p className="logo"><span>M</span>-Logistic</p>
            <Link to="/employee/users-list" className="icon-a"><i className="fa fa-users icons"></i>&nbsp;&nbsp; Lista użytkowników</Link>
            <Link to="/employee/employees-list" className="icon-a"><i className="fa fa-briefcase icons"></i>&nbsp;&nbsp; Lista pracowników</Link>
            <Link to="/employee/homepage" className="icon-a"><i className="fa fa-truck icons"/> Lista przesyłek</Link>
            <Link to="/employee/edit-password" className="icon-a"><i className="fa fa-key icons"></i>&nbsp;&nbsp; Zmień hasło</Link>
            <Link to="/employee/raport" className="icon-a"><i className="fa fa-folder-open" aria-hidden="true"></i>&nbsp;&nbsp; Raporty</Link>
            <Link to="/logout" className="icon-a"><i className="fa fa-sign-out icons" aria-hidden="true" style={{ color: '#f7403b' }}></i>&nbsp;&nbsp; Wyloguj</Link>
        </div>
    );
};

export default EmployeeSidebar;
