/* eslint-disable react/no-array-index-key */
import React from 'react';
import { IoIosStar } from 'react-icons/io';
import girl1 from '../Image/girl1.jpg';
import girl2 from '../Image/girl2.jpg';
import girl3 from '../Image/osam1.jpg';
import girl4 from '../Image/osam3.jpg';
import ReviewCard from './ReviewCard';

const details = [
    {
        name: 'Debi Hrre',
        image: girl1,
        icon: <IoIosStar />,
        title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore commodi, voluptates veritatis adipisci nulla natus.',
    },
    {
        name: 'Henry Das',
        image: girl2,
        icon: <IoIosStar />,
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, suscipit inventore accusamus eius labore',
    },
    {
        name: 'Jhon Aher',
        image: girl3,
        icon: <IoIosStar />,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi, sint necessitatibus repellendus quia officiis.',
    },
    {
        name: 'Prettia DE',
        image: girl4,
        icon: <IoIosStar />,
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, neque dolorum. Est odio corrupti repellat!',
    },
];

const Reviews = () => (
    <div>
        <h1 className="text-center my-4">What People Says About Us</h1>
        <div className="container">
            <div className="row d-flex justify-content-around">
                {details.map((data, index) => (
                    <ReviewCard data={data} key={index} />
                ))}
            </div>
        </div>
    </div>
);

export default Reviews;
