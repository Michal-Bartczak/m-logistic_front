import React, {useState} from "react";
import axios  from "axios";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Dodaj to na początku pliku App.js


const TrackPackage = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [orderStatus, setOrderStatus] = useState(null);


    const validateAndTrackPackage = () => {
        if (!/^[0-9]{10}$/.test(trackingNumber)) {
            setErrorMessage('Błędny numer przesyłki. Upewnij się, że wprowadziłeś poprawny numer !');
        } else {
           setErrorMessage('');
           trackPackage();
        }
    };
    const trackPackage = () => {
        axios.post('http://localhost:8080/api/track-package-status', { trackingNumber })
            .then(response => {

                if (response.status !== 200) {
                    setErrorMessage('Wystąpił błąd podczas śledzenia przesyłki.');
                    return;
                }

                if (response.data.orderStatus == null) {
                    setErrorMessage(response.data.errorMessage || 'Nieznany błąd');
                    return;
                }
                setOrderStatus(response.data.orderStatus);
            })
            .catch(error => {
                if (error.response && error.response.status === 404) {
                    setErrorMessage('Nie znaleziono paczki o numerze: ' + trackingNumber);
                } else {
                    setErrorMessage('Wystąpił błąd podczas śledzenia przesyłki.');
                }
            });
    };

    return (
        <div id="main">
            <div className="container ml-7 mt-5 ml-3">
                <h2 style={{color: '#f7403b', fontSize: '3em', textAlign: 'center'}}>Śledzenie przesyłki</h2>
                <h4 style={{textAlign: 'center', marginBottom: '50px'}}>Wprowadź numer przesyłki poniżej, aby sprawdzić jej aktualny status </h4>
                <form id="trackingForm" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="trackingNumber">Numer przesyłki:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="trackingNumber"
                            placeholder="Wpisz numer przesyłki"
                            style={{width: '30%'}}
                            pattern="^[0-9]{10}$"
                            maxLength="10"
                            value={trackingNumber}
                            onChange={(e) => setTrackingNumber(e.target.value)}
                        />
                        {errorMessage && <small id="errorTrackingNumber" className="text-danger">{errorMessage}</small>}
                    </div>
                    <button type="submit" className="btn btn-secondary" style={{marginTop: '10px'}} onClick={validateAndTrackPackage}>Sprawdź
                        status
                    </button>
                </form>

                {orderStatus && (
                    <div id="statusContainer" style={{marginTop: '20px'}}>
                        <h4 className="status-package">Aktualny status:</h4>
                        <ul style={{listStyle: 'none', paddingLeft: 0}}>
                            <li className={orderStatus === "MAGAZYN" ? "active" : "status"}
                                style={{marginBottom: '10px'}}>
                                <i className="bi bi-box-seam" style={{marginRight: '10px'}}></i>
                                Twoja przesyłka jest w naszym magazynie. Niedługo ruszy do Ciebie!
                            </li>
                            <li className={orderStatus === "DOSTAWA" ? "active" : "status"}
                                style={{marginBottom: '10px'}}>
                                <i className="bi bi-truck" style={{marginRight: '10px'}}></i>
                                Twoja przesyłka jest już w drodze do Ciebie!
                            </li>
                            <li className={orderStatus === "DOSTARCZONO" ? "active" : "status"}>
                                <i className="bi bi-check-circle" style={{marginRight: '10px'}}></i>
                                Twoja przesyłka została już dostarczona!
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrackPackage;

