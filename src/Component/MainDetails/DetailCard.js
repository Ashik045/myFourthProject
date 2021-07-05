import React from 'react';
import styles from './Details.module.css';

const DetailCard = ({ data }) => {
    const { name, image, title } = data;
    return (
        <div className="col-sm-4">
            <div
                className={`${styles.cards} card my-4 `}
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <img src={image} alt="" className={`${styles.dimage}`} />
                <div className="card-body">
                    <div className="card-title">
                        <h2>{name}</h2>
                    </div>
                    <h4>{title}</h4>
                </div>
            </div>
        </div>
    );
};
export default DetailCard;
