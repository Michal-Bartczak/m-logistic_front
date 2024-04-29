import React, { useState } from 'react';
import axios from "axios";

const CustomerRegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   const handleSubmit = async (e) => {
       e.preventDefault();
       try {
           const response = await axios.post('http://localhost:8080/api/registration/customer', formData);
           console.log('Registration successful:', response.data);
           setMessage('Rejestracja zakończona sukcesem!');
       } catch (error) {
           if (error.response) {
               // The request was made and the server responded with a status code
               // that falls out of the range of 2xx
               console.error('Failed to register:', error.response.data);
               setMessage(`Błąd rejestracji: ${error.response.data}`);
           } else if (error.request) {
               // The request was made but no response was received
               console.error('No response:', error.request);
               setMessage('Brak odpowiedzi od serwera.');
           } else {
               // Something happened in setting up the request that triggered an Error
               console.error('Error:', error.message);
               setMessage(`Błąd: ${error.message}`);
           }
       }
   };
    return (
        <div>
            <h2>Rejestracja Klienta</h2>
            {message && <div className="alert alert-info" style={{width: '30%'}}>{message}</div>}
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">Nazwa użytkownika:</label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    required
                    style={{width: '30%'}}
                    value={formData.username}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Adres email:</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    style={{width: '30%'}}
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Hasło:</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                    style={{width: '30%'}}
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" style={{marginTop: '10px'}} className="btn btn-secondary">Zarejestruj się</button>
        </form>
        </div>
    );
};

export default CustomerRegistrationForm;
