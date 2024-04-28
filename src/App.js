import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ContactComponent from './components/ContactComponent'; // Załóżmy, że to twój komponent kontaktowy
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FAQ from "./components/FAQ";
import TrackPackage from "./components/TrackPackage";
import './components/style.css'
import Login from "./components/Login";




function App() {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/contact" element={<ContactComponent />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/track-package" element={<TrackPackage />} />
                <Route path="/login" element={<Login />} />

                {/* Dodaj więcej tras dla innych linków, jeśli to konieczne */}
            </Routes>
            <Footer />
        </Router>
    );
}
export default App;