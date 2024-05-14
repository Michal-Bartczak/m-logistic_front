import React from 'react';
import DriverSidebar from '../driver/DriverSidebar';
import Footer from '../common/Footer';

const DriverLayout = ({ children }) => {
    return (
        <div>
            <DriverSidebar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default DriverLayout;
