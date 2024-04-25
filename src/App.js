
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './components/style.css';

function App() {
    return (
        <Router>
            <Sidebar />
            <MainContent />
            <Footer />
        </Router>
    );
}
export default App;
