import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import PdfDocument from '../pdf/PdfDocument';
import PdfDocumentLabel from "../pdf/PdfDocumentLabel";

const OrderItem = ({ order, eventKey }) => {
    const [showPdf, setShowPdf] = useState(false);
    const [showLabelPdf, setShowLabelPdf] = useState(false);

    const pdfData = {
        trackingNumber: order.trackingNumber,
        recipientName: order.nameRecipient,
        address: `${order.zipCodeRecipient} ${order.cityRecipient}, ${order.streetRecipient}`,
        weight: `${order.weight} kg`,
        creationDate: order.creationDate
    };

    const handlePdfClick = () => {
        setShowPdf(true);
        setShowLabelPdf(false);  // Zapewnij, że tylko jeden dokument PDF może być otwarty na raz
    };

    const handleLabelPdfClick = () => {
        setShowLabelPdf(true);
        setShowPdf(false);  // Zapewnij, że tylko jeden dokument PDF może być otwarty na raz
    };

    return (
        <Accordion.Item eventKey={eventKey} className="accordion-item">
            <Accordion.Header className="accordion-header">
                <div className="row" style={{ width: '100%' }}>
                    <div className="col-3 text-start">
                        <p className="list-header">Numer zamówienia</p>
                        <p className="list">{order.trackingNumber}</p>
                    </div>
                    <div className="col-3 text-center">
                        <p className="list-header">Dane odbiorcy</p>
                        <p className="list">{order.nameRecipient}, {order.zipCodeRecipient} {order.cityRecipient}, {order.streetRecipient}</p>
                    </div>
                    <div className="col-3 text-center">
                        <p className="list-header">Data utworzenia</p>
                        <p className="list">{order.creationDate}</p>
                    </div>
                    <div className="col-3 text-end">
                        <p className="list-header">Status</p>
                        <p className="list">{order.status}</p>
                    </div>
                </div>
            </Accordion.Header>
            <Accordion.Body className="accordion-body">
                <div className="row">
                    <div className="col-2">{order.dimensions}</div>
                    <div className="col-2 text-center">{order.price} zł</div>
                    <div className="col-2 text-center">{order.weigh} kg</div>
                    <div className="col-2 text-center">
                        {showLabelPdf ? (
                            <PdfDocumentLabel data={pdfData} onGenerated={() => setShowLabelPdf(false)} />
                        ) : (
                            <button className="btn btn-secondary" style={{ width: '150px' }} onClick={handleLabelPdfClick}>ETYKIETA</button>
                        )}
                    </div>
                    <div className="col-2 text-center">
                        {showPdf ? (
                            <PdfDocument data={pdfData} onGenerated={() => setShowPdf(false)} />
                        ) : (
                            <button className="btn btn-secondary" style={{ width: '150px' }} onClick={handlePdfClick}>List przewozowy</button>
                        )}

                    </div>
                    <div className="col-2 text-end">
                        {order.provider}
                    </div>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    );
};

export default OrderItem;