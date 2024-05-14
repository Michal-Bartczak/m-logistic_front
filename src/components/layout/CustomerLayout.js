import React from 'react';
import CustomerSidebar from '../customer/CustomerSidebar';
import Footer from '../common/Footer';

const CustomerLayout = ({ children }) => {
    return (
        <div>
            <CustomerSidebar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default CustomerLayout;
