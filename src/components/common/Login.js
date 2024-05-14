import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notAuthorized, setNotAuthorized] = useState(false);
    const [isLoggedOut, setIsLoggedOut] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const message = new URLSearchParams(location.search).get('from');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setIsLoggedOut(params.get("logout") === "true");
    }, [location]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const requestBody = JSON.stringify({
            username: username,
            password: password
        });

        fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Login failed");
                }
            })
            .then(data => {
                const { accessToken } = data;
                localStorage.setItem('token', accessToken);

                // Sprawdzanie roli użytkownika poprzez zapytania do backendu
                checkUserRole(accessToken);
            })
            .catch(() => setNotAuthorized(true));
    };

    const checkUserRole = (token) => {
        const headers = { 'Authorization': 'Bearer ' + token };

        // Sprawdzanie roli użytkownika
        fetch('http://localhost:8080/api/auth/admin', { method: 'POST', headers })
            .then(response => {
                if (response.ok) {
                    navigate('/admin/signIn');
                } else {
                    fetch('http://localhost:8080/api/auth/driver', { method: 'POST', headers })
                        .then(response => {
                            if (response.ok) {
                                navigate('/driver/signIn');
                            } else {
                                fetch('http://localhost:8080/api/auth/customer', { method: 'POST', headers })
                                    .then(response => {
                                        if (response.ok) {
                                            navigate('/customer/signIn');
                                        } else {
                                            fetch('http://localhost:8080/api/auth/employee', { method: 'POST', headers })
                                                .then(response => {
                                                    if (response.ok) {
                                                        navigate('/employee/signIn');
                                                    } else {
                                                        navigate('/');
                                                    }
                                                });
                                        }
                                    });
                            }
                        });
                }
            });
    };

    return (
        <div id="main">
            <div className="container ml-7 mt-5 ml-3">
                <h2 style={{color: '#f7403b', fontSize: '3em', textAlign: 'center'}}>Logowanie</h2>
                <h4 style={{textAlign: 'center', marginBottom: '50px'}}>Zaloguj się, aby móc w pełni korzystać z konta </h4>
                {message === 'send-package' && (
                    <div className="alert alert-info" style={{width: '30%', textAlign: 'center'}}>
                        Ta usługa jest dostępna tylko dla zalogowanych użytkowników. Zaloguj się!
                    </div>
                )}
                {notAuthorized && (
                    <p style={{fontSize: '0.8rem', color: 'tomato', textAlign: 'center'}}>
                        Niepoprawny email lub hasło, spróbuj ponownie
                    </p>
                )}
                {isLoggedOut && (
                    <p style={{fontSize: '0.8rem', color: 'green', textAlign: 'center'}}>
                        Wylogowano pomyślnie
                    </p>
                )}
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
