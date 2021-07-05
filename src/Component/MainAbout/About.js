import React from 'react';
import osam from '../Image/osam1.jpg';
import style from './About.module.css';

const About = () => (
    <section className={`${style.about}`} id="/aboutus">
        <h1 className="text-center my-5">About Us</h1>
        <div className="container">
            <div className="row  d-flex justify-content-center">
                <div className="col-sm-5 mt-5">
                    <h1 className={`${style.ahead} `}>ABOUT HENRITTA</h1>
                    <h5 className={`${style.atext}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic reiciendis
                        culpa earum? Consequatur, in.
                    </h5>
                </div>
                <div className="col-sm-6 text-center">
                    <div className={`${style.box3}`} />
                    <div className={`${style.boxs4}`} />
                    <img
                        src={osam}
                        alt="asd"
                        className={`${style.aImg} ms-nome ms-md-5 mt-3 mt-md-5`}
                    />
                    <div className={`${style.box2} d-none d-sm-block`} />
                </div>
            </div>
        </div>
    </section>
);

export default About;
