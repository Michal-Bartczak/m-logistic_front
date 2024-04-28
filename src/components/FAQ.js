import React from 'react';
// import './FAQ.css'

const FAQComponent = () => {
    return (
        <div id="main">
            <div className="container ml-7" style={{height: '100%'}}>
                <h2 style={{color: '#f7403b', fontSize: '3em', marginTop: '52px', textAlign: 'center'}}>Najczęściej
                    zadawane pytania</h2>
                <h4 style={{textAlign: 'center', marginBottom: '50px'}}>Zanim zadasz pytanie sprawdź czy nie ma go tutaj </h4>
                <div className="row">
                    <div className="col-md- mt-5 col-md-mt-5-custom">
                        <ol className="list-styled">
                            <li>
                                <h5> Jak założyć konto?</h5>
                                <p className="param" style={{color: '#808080'}}>
                                    Aby założyć konto, wystarczy odwiedzić naszą stronę internetową i kliknąć na
                                    przycisk "Zarejestruj się". Następnie będziesz musiał podać swoje imię i nazwisko,
                                    adres e-mail i hasło.
                                    Po kliknięciu na przycisk "Zarejestruj się" otrzymasz e-mail z linkiem aktywacyjnym.
                                    Po kliknięciu na link aktywacyjny Twoje konto zostanie utworzone.
                                </p>
                            </li>
                            <li>
                                <h5> Jak złożyć zamówienie?</h5>
                                <p className="param" style={{color: '#808080'}}>
                                    Aby złożyć zamówienie, wystarczy odwiedzić naszą stronę internetową i wybrać
                                    produkty, które chcesz zamówić.
                                    Następnie będziesz musiał podać adres wysyłki i płatności. Po kliknięciu na przycisk
                                    "Złóż zamówienie" Twoje zamówienie zostanie złożone.
                                </p>
                            </li>
                            <li>
                                <h5> Jak wysłać paczkę?</h5>
                                <p className="param" style={{color: '#808080'}}>
                                    Aby wysłać paczkę, wystarczy przynieść ją do naszego magazynu. Nasi pracownicy
                                    pomogą Ci wpakować paczkę i wygenerować etykietę wysyłkową.
                                    Możesz również wysłać paczkę online, odwiedzając naszą stronę internetową i klikając
                                    na przycisk "Wyślij paczkę".
                                </p>
                            </li>
                            <li>
                                <h5> Jaki jest czas wysyłki?</h5>
                                <p className="param" style={{color: '#808080'}}>
                                    Czas wysyłki zależy od wybranego sposobu wysyłki.
                                    Większość paczek jest wysyłana w ciągu 24 godzin od złożenia zamówienia.
                                </p>
                            </li>
                            <li>
                                <h5> Jaki jest koszt wysyłki?</h5>
                                <p className="param" style={{color: '#808080'}}>
                                    Koszt wysyłki zależy od wagi i wymiarów paczki oraz wybranego sposobu wysyłki.
                                    Możesz sprawdzić koszt wysyłki, odwiedzając naszą stronę internetową.
                                </p>
                            </li>
                            <li>
                                <h5> Jak śledzić przesyłkę?</h5>
                                <p className="param" style={{color: '#808080'}}>
                                    Aby śledzić przesyłkę, wystarczy wpisać numer przesyłki w polu wyszukiwania na
                                    naszej stronie internetowej.
                                </p>
                            </li>
                            <li>
                                <h5> Co zrobić, jeśli przesyłka nie dotrze na czas?</h5>
                                <p className="param" style={{color: '#808080'}}>
                                    Jeśli przesyłka nie dotrze na czas, skontaktuj się z naszym działem obsługi klienta.
                                    Skontaktujemy się z firmą kurierską i pomożemy Ci odnaleźć przesyłkę.
                                </p>
                            </li>
                            <li>
                                <h5> Jak zwrócić towar?</h5>
                                <p className="param" style={{color: '#808080'}}>
                                    Jeśli nie jesteś zadowolony z zakupu, możesz go zwrócić w ciągu 14 dni od otrzymania
                                    przesyłki.
                                    Aby zwrócić towar, wystarczy wypełnić formularz zwrotu i dostarczyć go do naszego
                                    magazynu.
                                </p>
                            </li>
                            <li>
                                <h5> Jak uzyskać zwrot pieniędzy?</h5>
                                <p className="param" style={{color: '#808080'}}>
                                    Zwrot pieniędzy zostanie zaksięgowany na Twoim koncie w ciągu 14 dni od otrzymania
                                    zwróconego towaru.
                                </p>
                            </li>
                            <li>
                                <h5> Gdzie mogę uzyskać pomoc?</h5>
                                <p className="param" style={{color: '#808080'}}>
                                    Jeśli masz jakiekolwiek pytania, skontaktuj się z naszym działem obsługi klienta.
                                    Odpowiemy na Twoje pytania w ciągu 24 godzin.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQComponent;



