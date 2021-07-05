import React from 'react';
import style from './review.module.css';

const ReviewCard = ({ data }) => {
    const { name, title, icon, image } = data;
    return (
        <div className="col-sm-5">
            <div className={`${style.rcard} card my-4`}>
                <div className="header">
                    <div className="row">
                        <div className="col-8 ">
                            <p className={`${style.rname} m-2 ms-2`}>{name}</p>
                            <span className="ms-5">
                                {icon} {icon} {icon} {icon} {icon}
                            </span>
                        </div>
                        <div className="col-2 ms-2 ms-sm-5">
                            <img src={image} alt={name} className={`${style.rImg}`} />
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <p className="as">
                        <b>{title}</b>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
