import React from 'react';
import Sidebar from '../common/Sidebar';
import Footer from '../common/Footer';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Sidebar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
