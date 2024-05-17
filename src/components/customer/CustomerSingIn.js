import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Accordion } from 'react-bootstrap';
import OrderItem from './OrderItem';
import CustomerSidebar from './CustomerSidebar';

const CustomerSignIn = () => {
    const [orders, setOrders] = useState([]);
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    const [filters, setFilters] = useState({
        filterText: '',
        filterData: '',
        filterStatus: 'WSZYSTKIE',
        filterKindEur: 'EUR',
        filterKindHp: 'HP'
    });

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

            const ordersResponse = await axios.post(`http://localhost:8080/api/order/filter`, filters, {
                ...config,
                params: { page, size }
            });
            setOrders(ordersResponse.data.orders);
            setTotalPages(ordersResponse.data.totalPages);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page, size, filters]);

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            setFilters(prevFilters => ({
                ...prevFilters,
                [name]: checked ? value : null
            }));
        } else {
            setFilters(prevFilters => ({
                ...prevFilters,
                [name]: value
            }));
        }
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const renderPagination = () => {
        let pages = [];
        for (let i = 0; i < totalPages; i++) {
            pages.push(
                <button key={i}
                        className={i === page ? 'pagination-btn-active' : 'pagination-btn'}
                        onClick={() => handlePageChange(i)}>
                    {i + 1}
                </button>
            );
        }
        return pages;
    };
    return (
        <div>
            <CustomerSidebar />
            <div id="main">
                <div className="head">
                    <div className="col-div-6" style={{ marginTop: '15px' }}>
                        <span style={{ fontSize: '30px', cursor: 'pointer', color: 'white' }} className="nav2">&#9776; Panel klienta</span>
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
                <div className="col-div-9 filter-container" style={{marginLeft: '36px', marginRight: '36px'}}>
                    <div className="row">
                        <div className="col-3">
                            <input type="text" name="filterText" id="filter-text" value={filters.filterText}
                                   onChange={handleInputChange} placeholder="Wpisz numer zamówienia"/>
                        </div>
                        <div className="col-3 text-center">
                            DATA
                            <input type="date" name="filterData" id="filter-data" value={filters.filterData}
                                   onChange={handleInputChange} placeholder="rrrr-mm-dd"/>
                        </div>
                        <div className="col-3 text-center">
                            <label htmlFor="status">STATUS</label>
                            <select name="filterStatus" id="status" value={filters.filterStatus}
                                    onChange={handleInputChange}>
                                <option value="WSZYSTKIE">WSZYSTKIE</option>
                                <option value="MAGAZYN">MAGAZYN</option>
                                <option value="DOSTAWA">DOSTAWA</option>
                                <option value="DOSTARCZONO">DOSTARCZONO</option>
                            </select>
                        </div>
                        <div className="col-3 text-end">
                            <div className="dimension-filter">RODZAJ
                                <label htmlFor="kind-eur">EUR</label>
                                <input type="checkbox" name="filterKindEur" id="kind-eur"
                                       checked={filters.filterKindEur === 'EUR'} onChange={handleInputChange}/>
                                <label htmlFor="kind-hp">HP</label>
                                <input type="checkbox" name="filterKindHp" id="kind-hp"
                                       checked={filters.filterKindHp === 'HP'} onChange={handleInputChange}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-container">
                    <Accordion>
                        {orders.map((order, index) => (
                            <OrderItem key={index} order={order} eventKey={index.toString()} />
                        ))}
                    </Accordion>
                </div>
                <div id="pagination" className="pagination-container">
                    {renderPagination()}
                </div>
            </div>
        </div>
    );
};

export default CustomerSignIn;
