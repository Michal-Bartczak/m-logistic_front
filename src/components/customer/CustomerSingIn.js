import OrderItem from "./OrderItem";
import {Accordion} from "react-bootstrap";
import CustomerSidebar from "./CustomerSidebar";
import {useEffect, useState} from "react";
import axios from "axios";

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

                const userResponse = await axios.get('http://localhost:8080/api/customer/details', config);
                setUsername(userResponse.data.username);
                setRole(userResponse.data.roles);

                const ordersResponse = await axios.get('http://localhost:8080/api/customer/homepage', config);
                setOrders(ordersResponse.data);
            } catch (error) {
                console.error('Błąd podczas pobierania danych:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <CustomerSidebar />
            <div id="main">
                <div className="head">
                    <div className="col-div-6" style={{ marginTop: '15px' }}>
                        <span style={{ fontSize: '30px', cursor: 'pointer', color: 'white' }}
                              className="nav2">&#9776; Panel klienta</span>
                    </div>
                    <div className="col-div-6">
                        <div className="profile">
                            <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" className="pro-img" alt="profile" style={{ marginTop: '15px' }} />
                            <p style={{ fontSize: '1.3rem' }}>{username} <span>{role}</span></p>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="col-div-3">
                    <div className="box">
                        <h1 className="header-list">Lista zamówień</h1>
                    </div>
                </div>
                {/*Tu chce*/}
                <div className="accordion-container">
                    <Accordion>
                        {orders.map((order, index) => (
                            <OrderItem key={index} order={order} eventKey={index.toString()} />
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};
export default CustomerSignIn