import React from 'react';
import AdminSidebar from '../admin/AdminSidebar';
import Footer from '../common/Footer';

const AdminLayout = ({ children }) => {
    return (
        <div>
            <AdminSidebar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default AdminLayout;
