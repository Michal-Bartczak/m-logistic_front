import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomerSidebar from './CustomerSidebar';
import axios from 'axios';

const fetchDataLp = (trackingNumber) => {
    // Implement logic to fetch data for 'List przewozowy'
    console.log(`Fetching data for LP with tracking number: ${trackingNumber}`);
};

const fetchLabelData = (trackingNumber) => {
    // Implement logic to fetch data for 'Etykieta'
    console.log(`Fetching label data for tracking number: ${trackingNumber}`);
};


const CustomerSignIn = () => {
    const [orders, setOrders] = useState([]);
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                // Fetch username and role
                const userResponse = await axios.get('http://localhost:8080/api/customer/username', config);
                setUsername(userResponse.data);
                setRole(userResponse.data.role);

                // Fetch orders
                const ordersResponse = await axios.get('http://localhost:8080/api/customer/homepage', config);
                setOrders(ordersResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <CustomerSidebar />
            <div id="main">
                <div className="head">
                    <div className="col-div-6">

                        <span style={{ fontSize: '30px', cursor: 'pointer', color: 'white' }}
                              className="nav2">&#9776; Panel klienta</span>
                    </div>
                    <div className="col-div-6">
                        <div className="profile">
                            <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" className="pro-img" alt="profile" />
                            <p>{username} <span>{role}</span></p>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="col-div-3 bg-secondary">
                    <div className="box">
                        <h1 className="header-list">Lista zamówień</h1>
                    </div>
                </div>

                {orders.map((order, index) => (
                    <div key={index} className="col-div-3">
                        <div className="accordion-header">
                            <button className="btn btn-link" type="button" data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`} aria-expanded="true"
                                    aria-controls={`#collapse${index}`}>
                                <div className="row">
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
                            </button>
                        </div>
                        <div id={`collapse${index}`} className="collapse" data-bs-parent="#accordionExample">
                            <div className="box row">
                                <div className="col-2">{order.dimensions}</div>
                                <div className="col-2 text-center">{order.price} zł</div>
                                <div className="col-2 text-center">{order.weight} kg</div>
                                <div className="col-2 text-center">
                                    <a href="#" data-bs-toggle="modal-lp" id="trackingNumberButton-lp"
                                       onClick={() => fetchDataLp(order.trackingNumber)} className="link-details-lp">List przewozowy</a>
                                </div>
                                <div className="col-2 text-center">
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#shippingLabelModal" id="trackingNumberButton"
                                       onClick={() => fetchLabelData(order.trackingNumber)} className="link-details">Etykieta</a>
                                </div>
                                <div className="col-2 text-end"><a href="#" className="link-details">{order.provider}</a></div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Include footerWithModal component here if necessary */}
            </div>
        </div>
    );
};

export default CustomerSignIn;
