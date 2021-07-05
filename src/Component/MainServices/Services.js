/* eslint-disable react/no-array-index-key */
import React from 'react';
import { FaCheckCircle, FaSkating } from 'react-icons/fa';
import style from './service.module.css';
import ServiceCard from './ServiceCard';

const servicDetail = [
    {
        title: 'Write For Audience',
        icon: <FaCheckCircle />,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, saepe?',
    },
    {
        title: 'Keep In Conversonal',
        icon: <FaSkating />,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, beatae!',
    },
    {
        title: 'Provide Value',
        icon: <FaCheckCircle />,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, beatae!',
    },
    {
        title: 'Find A Fresh Single',
        icon: <FaSkating />,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, beatae!',
    },
    {
        title: 'Publish Consistantly',
        icon: <FaCheckCircle />,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, beatae!',
    },
    {
        title: 'Share Straghtfully',
        icon: <FaCheckCircle />,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, beatae!',
    },
];

const Services = () => (
    <section className={`${style.sSection}`}>
        <h1 className="text-center mt-3">Services We Provide</h1>
        <hr />
        <div className={`${style.subservices} container`}>
            <h2 className={`${style.shead} text-center my-5`}>Our New Content Commandents</h2>
            <div className="row">
                {servicDetail.map((details, index) => (
                    <ServiceCard details={details} key={index} />
                ))}
            </div>
        </div>
    </section>
);

export default Services;
