import React from 'react';
import '../style/style.css';


const FeatureBox = ({ icon, title, description }) => {
    return (
        <div className="col-md-4 d-flex align-items-stretch">
            <div className="p-2 fixed-height text-center d-flex flex-column justify-content-center">
                <i className={`fa ${icon} fa-3x`}></i>
                <p></p>

                <h5 className="mb-4" style={{fontSize: '1.4rem', color: '#f7403b'}}>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default FeatureBox;
