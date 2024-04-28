import React from 'react';
import './contact.css';

const ContactComponent = () => {
    return (
        <div id="main">
            <div className="container ml-7 mt-5 ml-3">
                <h2 style={{color: '#f7403b', fontSize: '3em', textAlign: 'center'}}>Skontaktuj
                    się z nami</h2>
                <h4 style={{textAlign: 'center', marginBottom: '50px'}}>Wypełnij poniższy formularz kontaktowy </h4>
                <form action="#" method="#">
                    <div className="form-group" style={{width: '30%', background: ''}}>
                        <label htmlFor="name">Imię i nazwisko:</label>
                        <input type="text" id="name" name="name" className="form-control" required/>
                    </div>

                    <div className="form-group" style={{width: '30%'}}>
                        <label htmlFor="email">Adres email:</label>
                        <input type="email" id="email" name="email" className="form-control" required/>
                    </div>

                    <div className="form-group" style={{width: '30%'}}>
                        <label htmlFor="message">Wiadomość:</label>
                        <textarea id="message" name="message" rows="4" className="form-control" required></textarea>
                    </div>

                    <button type="submit" className="btn btn-secondary" style={{marginTop: '10px'}}>Wyślij</button>
                </form>
                <div className="contact" style={{marginTop: '50px'}}>
                    <h6>Nasz adres:</h6>
                    <p className="p-contact" style={{color: '#8e8e8e'}}> ul. Przykładowa 1, 00-000 Miasto</p>
                    <h6>Email:</h6>
                    <p className="p-contact" style={{color: '#8e8e8e'}}> kontakt@przykladowy-email.com</p>
                    <h6>Telefon:</h6>
                    <p className="p-contact" style={{color: '#8e8e8e'}}> +48 123 456 789</p>
                </div>
            </div>
        </div>
    );
};

export default ContactComponent;
