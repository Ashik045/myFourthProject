/* eslint-disable react/no-array-index-key */
import React from 'react';
import image2 from '../Image/girl1.jpg';
import image3 from '../Image/girl3.jpg';
import image1 from '../Image/osam2.jpg';
import DetailCard from './DetailCard';
import styles from './Details.module.css';

const detailArray = [
    {
        name: 'Harry Dome',
        image: image1,
        title: 'Designer',
    },
    {
        name: 'John Carle',
        image: image2,
        title: 'Developer',
    },
    {
        name: 'Julia Ane',
        image: image3,
        title: 'Designer',
    },
];

const Details = () => (
    <section className={`${styles.detailHeader}`} id="/details">
        <div className={`${styles.dHaeder}`} />

        <div className={`${styles.dSubsec}`}>
            <div className={`${styles.subdetail}`}>
                <h1 className={`${styles.textwhite} text-center`}>About our developer</h1>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        {detailArray.map((data, index) => (
                            <DetailCard data={data} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Details;
