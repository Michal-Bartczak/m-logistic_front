import React, { useEffect } from 'react';
import { jsPDF } from 'jspdf';

const PdfDocument = ({ data, onGenerated }) => {
    useEffect(() => {
        generatePdf();
    }, []);  // Jeżeli data powinna wpływać na ponowne generowanie PDF, dodać 'data' do tablicy zależności

    const generatePdf = () => {
        const doc = new jsPDF();

        // Ustawienie czcionki na pogrubioną i większą dla tytułu
        doc.setFontSize(22);  // Duża czcionka dla tytułu
        doc.setFont(undefined, 'bold');  // Pogrubienie czcionki
        doc.text('M-LOGISTIC', 105, 20, null, null, 'center');  // Wyśrodkowanie tekstu na stronie

        // Powrót do normalnej czcionki dla reszty tekstu
        doc.setFontSize(10);  // Normalna wielkość czcionki
        doc.setFont(undefined, 'normal');  // Normalna grubość czcionki

        // Dodawanie reszty danych
        doc.text(`Numer śledzenia: ${data.trackingNumber}`, 20, 40);
        doc.text(`Odbiorca: ${data.recipientName}`, 20, 50);
        doc.text(`Adres: ${data.address}`, 20, 60);
        doc.text(`Waga: ${data.weight}`, 20, 70);
        doc.text(`Data utworzenia: ${data.creationDate}`, 20, 80);

        // Zapisanie dokumentu
        doc.save('list-przewozowy.pdf');
        if(onGenerated) {
            onGenerated();  // Wywołanie callback po wygenerowaniu PDF
        }
    };

    return null; // Komponent nie renderuje żadnego elementu wizualnego
};

export default PdfDocument;
