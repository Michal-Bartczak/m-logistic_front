import React from 'react';
import EmployeeSidebar from '../employee/EmployeeSidebar';
import Footer from '../common/Footer';

const EmployeeLayout = ({ children }) => {
    return (
        <div>
            <EmployeeSidebar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default EmployeeLayout;
