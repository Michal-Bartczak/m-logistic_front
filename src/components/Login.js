import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Tutaj można dodać logikę wysyłania danych do serwera
        console.log('Logowanie użytkownika:', username, password);
    };

    return (
        <div id="main">
            <div className="container ml-7 mt-5 ml-3">
                <h2 style={{color: '#f7403b', fontSize: '3em', textAlign: 'center'}}>Logowanie</h2>
                <h4 style={{textAlign: 'center', marginBottom: '50px'}}>Zaloguj się, aby móc w pełni korzystać z konta </h4>


                <form onSubmit={handleSubmit} id="logForm">
                    <div className="form-group">
                        <label htmlFor="username">Nazwa użytkownika</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            required
                            style={{width: '30%'}}
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Hasło</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            required
                            style={{width: '30%'}}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-secondary" style={{marginTop: '10px'}}>Zaloguj</button>
                </form>

                <div className="mt-3">
                    <p>Nie masz jeszcze konta? <Link to="/register">Zarejestruj się tutaj</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
