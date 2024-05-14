import React, { useState } from 'react';
import DriverRegistrationForm from './DriverRegistrationForm';
import CustomerRegistrationForm from './CustomerRegistrationForm';

const MainRegistrationComponent = () => {
    const [userType, setUserType] = useState('customer'); // domyślnie ustawiony na 'driver'

    const handleUserTypeChange = (type) => {
        setUserType(type);
    };

    return (

        <div id="main">
            <div className="container ml-7 mt-5 ml-3">
                <h2 style={{color: '#f7403b', fontSize: '3em', textAlign: 'center'}}>Rejestracja</h2>
                <h4 style={{textAlign: 'center', marginBottom: '50px'}}>Załóż konto, aby móc zarządzać przesyłkami </h4>
                <div style={{marginBottom: '25px', width: '30%', display: 'flex'}}>
                    <button
                        type="button"
                        style={{width: '50%'}}
                        className={`btn btn-secondary ${userType === 'customer' ? 'active' : ''}`}
                        onClick={() => handleUserTypeChange('customer')}
                    >
                        Klient
                    </button>
                    <button
                        type="button"
                        style={{width: '50%'}}
                        className={`btn btn-secondary ${userType === 'driver' ? 'active' : ''}`}
                        onClick={() => handleUserTypeChange('driver')}
                    >
                        Kierowca
                    </button>
                </div>
                {userType === 'customer' ? <CustomerRegistrationForm/> : <DriverRegistrationForm/>  }
            </div>
        </div>
    );
};

export default MainRegistrationComponent;
