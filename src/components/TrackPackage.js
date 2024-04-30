import React, {useState} from "react";
import axios  from "axios";

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
        axios.post('/api/track-package-status', {trackingNumber})
            .then(response => {
                if (response.status === 404) {
                    setErrorMessage('Nie znaleziono paczki o numerze: ' + trackingNumber);
                    return;
                }
                setOrderStatus(response.data);
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
                    <div id="statusContainer">
                        <h4 className="status-package">Aktualny status:</h4>
                        <ul>
                            <li className={orderStatus === "MAGAZYN" ? "status active" : "status"}>Twoja przesyłka jest
                                w naszym magazynie. Niedługo ruszy do Ciebie!
                            </li>
                            <li className={orderStatus === "DOSTAWA" ? "status active" : "status"}>Twoja przesyłka jest
                                już w drodze do Ciebie!
                            </li>
                            <li className={orderStatus === "DOSTARCZONO" ? "status active" : "status"}>Twoja przesyłka
                                została już dostarczona!
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrackPackage;

