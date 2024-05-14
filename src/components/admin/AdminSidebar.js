import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div id="mySidenav" className="sidenav">
            <p className="logo"><span>M</span>-Logistic</p>
            <Link to="/admin/customers-list" className="icon-a"><i className="fa fa-users icons"></i>&nbsp;&nbsp; Lista użytkowników</Link>
            <Link to="/admin/employee-list" className="icon-a"><i className="fa fa-briefcase icons"></i>&nbsp;&nbsp; Lista pracowników</Link>
            <Link to="/admin/homepage" className="icon-a"><i className="fa fa-truck icons"></i>&nbsp;&nbsp; Lista przesyłek</Link>
            <Link to="#" className="icon-a"><i className="fa fa-folder-open" aria-hidden="true"></i>&nbsp;&nbsp; Raporty</Link>
            <Link to="/logout" className="icon-a"><i className="fa fa-sign-out icons" aria-hidden="true" style={{ color: '#f7403b' }}></i>&nbsp;&nbsp; Wyloguj</Link>
        </div>
    );
};

export default AdminSidebar;
