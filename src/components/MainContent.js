import React from 'react';
import FeatureBox from './FeatureBox';
import { Link } from 'react-router-dom'; //


const MainContent = () => {
    return (
        <div id="main">
            <div className="container text-center mt-5 mb-5" style={{padding: '0', marginTop: '0'}}>
                <h1 className="logo" style={{fontSize: '4rem'}}>Witaj w <span>M</span>-Logistic</h1>
                <p className="logo">Twój partner w zarządzaniu transportem i logistyką magazynową.</p>

                <div className="container">
                    <div className="row align-items-center"> {/* Dodajemy align-items-center tutaj */}
                        <FeatureBox
                            icon="fa-cogs"
                            title="Efektywne Zarządzanie Procesami"
                            description='Skoncentruj się na kluczowych aspektach swojego biznesu, a M-Logistic zajmie się resztą.
                             Nasza aplikacja umożliwia zarządzanie zamówieniami, dostawami i zwrotami z jednego, intuicyjnego interfejsu.'
                        />
                        <FeatureBox
                            icon="fa-map"
                            title="Planowanie Tras Dostaw"
                            description="Optymalizuj swoje trasy dostaw dzięki zaawansowanym funkcjom M-Logistic.
                             Nasza aplikacja umożliwia planowanie najbardziej efektywnych tras, co przekłada się na oszczędność czasu i paliwa."
                        />
                        <FeatureBox
                            icon="fa-globe"
                            title="Przesyłki Międzynarodowe"
                            description="Z M-Logistic wysyłka paczek staje się prostsza.
                            Nasza aplikacja ułatwia wysyłanie paczek do klientów na całym świecie, zapewniając bezpieczeństwo przesyłek dzięki globalnej sieci partnerów logistycznych."
                        />
                    </div>

                    <div className="row align-items-center"> {/* Dodajemy align-items-center tutaj */}
                        <FeatureBox
                            icon="fa-archive"
                            title="Zarządzanie Magazynem"
                            description="M-Logistic pomaga w zarządzaniu zapasami.
                            Nasza aplikacja umożliwia łatwe monitorowanie poziomu zapasów oraz wysyła inteligentne powiadomienia, abyś nigdy nie był zaskoczony brakiem towaru."
                        />
                        <FeatureBox
                            icon="fa-line-chart"
                            title="Analiza Danych Operacyjnych"
                            description="Wykorzystaj potencjał danych z M-Logistic do optymalizacji swojego biznesu.
                             Nasza aplikacja umożliwia analizę kluczowych wskaźników efektywności operacyjnej."
                        />
                        <FeatureBox
                            icon="fa-undo"
                            title="Bezproblemowe Zwroty"
                            description="M-Logistic sprawia, że proces obsługi zwrotów jest łatwy i bezproblemowy.
                             Dzięki naszej aplikacji, możesz szybko przetwarzać zwroty, co przekłada się na wyższe zadowolenie klientów."
                        />
                    </div>

                    <div className="row mt-5" style={{padding: 'auto'}}>
                        <div className="col-12" style={{paddingBottom: '20px'}}>
                            <Link to="/register" className="btn btn-secondary btn-lg">Zarejestruj się</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
