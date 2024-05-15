// src/components/OrderItem.js
import React from 'react';
import { Accordion } from 'react-bootstrap';


const fetchDataLp = (trackingNumber) => {
    console.log(`Fetching data for LP with tracking number: ${trackingNumber}`);
};

const fetchLabelData = (trackingNumber) => {
    console.log(`Fetching label data for tracking number: ${trackingNumber}`);
};

const OrderItem = ({ order, eventKey }) => {
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
                        <a href="#" onClick={() => fetchDataLp(order.trackingNumber)} className="link-details-lp">List przewozowy</a>
                    </div>
                    <div className="col-2 text-center">
                        <a href="#" onClick={() => fetchLabelData(order.trackingNumber)} className="link-details">Etykieta</a>
                    </div>
                    <div className="col-2 text-end">
                        <a href="#" className="link-details">{order.provider}</a>
                    </div>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    );
};

export default OrderItem;
