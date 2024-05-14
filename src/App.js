import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainContent from './components/common/MainContent';
import ContactComponent from './components/common/ContactComponent';
import FAQ from "./components/common/FAQ";
import TrackPackage from "./components/common/TrackPackage";
import MainRegisterComponent from './components/common/MainRegisterComponent';
import AdminSignIn from './components/admin/AdminSignIn';
import DriverSignIn from './components/driver/DriverSingIn';
import CustomerSignIn from './components/customer/CustomerSingIn';
import EmployeeSignIn from './components/employee/EmployeeSignIn';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './components/style/style.css';
import MainLayout from "./components/layout/MainLayout";
import LoginComponent from "./components/common/Login";
import AdminLayout from "./components/layout/AdminLayout";
import DriverLayout from "./components/layout/DriverLayout";
import CustomerLayout from "./components/layout/CustomerLayout";
import EmployeeLayout from "./components/layout/EmployeeLayout";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout><MainContent /></MainLayout>} />
                <Route path="/contact" element={<MainLayout><ContactComponent /></MainLayout>} />
                <Route path="/FAQ" element={<MainLayout><FAQ /></MainLayout>} />
                <Route path="/track-package" element={<MainLayout><TrackPackage /></MainLayout>} />
                <Route path="/login" element={<MainLayout><LoginComponent /></MainLayout>} />
                <Route path="/register" element={<MainLayout><MainRegisterComponent /></MainLayout>} />
                <Route path="/admin/signIn" element={<AdminLayout><AdminSignIn /></AdminLayout>} />
                <Route path="/driver/signIn" element={<DriverLayout><DriverSignIn /></DriverLayout>} />
                <Route path="/customer/signIn" element={<CustomerLayout><CustomerSignIn /></CustomerLayout>} />
                <Route path="/employee/signIn" element={<EmployeeLayout><EmployeeSignIn /></EmployeeLayout>} />
                {/* Dodaj więcej tras dla innych linków, jeśli to konieczne */}
            </Routes>
        </Router>
    );
}

export default App;
