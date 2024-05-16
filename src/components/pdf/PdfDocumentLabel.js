// LabelPdfDocument.js
import React, { useEffect } from 'react';
import { jsPDF } from 'jspdf';

const PdfDocumentLabel = ({ data, onGenerated }) => {
    useEffect(() => {
        generatePdf();
    }, [data]);

    const generatePdf = () => {
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        doc.setFontSize(16);  // Duża czcionka dla tytułu etykiety
        doc.setFont("helvetica", "bold");
        doc.text('Etykieta Zamówienia', 105, 30, null, null, 'center');  // Wyśrodkowanie tytułu


        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.text(`Numer Zamówienia: ${data.trackingNumber}`, 20, 50);
        doc.text(`Odbiorca: ${data.recipientName}`, 20, 60);
        doc.text(`Adres: ${data.address}`, 20, 70);
        doc.text(`Waga: ${data.weight} kg`, 20, 80);
        doc.text(`Data Utworzenia: ${data.creationDate}`, 20, 90);

        // Zapisanie dokumentu
        doc.save('etykieta-zamowienia.pdf');
        if (onGenerated) {
            onGenerated();  // Wywołanie callback po wygenerowaniu PDF
        }
    };

    return null; // Komponent nie renderuje żadnego elementu wizualnego
};

export default PdfDocumentLabel;
