import React from 'react';
import style from './service.module.css';

const ServiceCard = ({ details }) => {
    const { title, icon, text } = details;

    return (
        <div className="col-sm-6 col-md-4 ">
            <div className={`${style.subservices} card my-4 m-2`}>
                <div className="card-title">
                    <h3>
                        {icon} {title}
                    </h3>
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <p className="ms-none ms-sm-4">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
