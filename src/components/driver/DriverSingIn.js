import React, { useEffect, useState } from 'react';

const DriverSignIn = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch('http://localhost:8080/api/driver/data', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => setError(error.message));
    }, []);

    return (
        <div>
            <h1>Welcome Driver</h1>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {data ? <p>{data.message}</p> : <p>Loading...</p>}
        </div>
    );
};

export default DriverSignIn;
