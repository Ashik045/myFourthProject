import React from 'react';
import { NavLink } from 'react-router-dom';
import image1 from '../Image/header.jpg';
import style from './Home.module.css';

const MainHome = () => (
    <section className={`${style.headerBg}`}>
        <div className="container">
            <div className="row">
                <div className="col-sm-5">
                    <div className="picsec">
                        <div className={`${style.box1} d-none d-sm-block`} />
                        <div className={`${style.box4} `} />
                        <div className={`${style.box5} d-none d-sm-block`} />
                        <img src={image1} alt="as" className={`${style.headerimg} img-fluid`} />

                        <div className={`${style.box2}`} />
                        <div className={`${style.box3}`} />
                    </div>
                </div>
                <div className={`${style.seccol} col-sm-5`}>
                    <h1 className={`${style.heading} ms-none ms-sm-5 mt-5`}>
                        HENRITTA <br />
                        MITCHELL
                    </h1>
                    <h3 className={`${style.headText} ms-none ms-sm-5 mt-3`}>
                        ITS WEB DESIGN SERVICE
                    </h3>
                </div>
            </div>
            <div className={`${style.grpbtn} mt-sm-5 mt-2`}>
                <div className="row">
                    <div
                        className="col-sm-4 mt-sm-5 mt-0"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <NavLink exact to="/aboutus" className={`${style.hbtn}`}>
                            About us
                        </NavLink>
                    </div>
                    <div
                        className="col-sm-4 mt-sm-5 mt-4"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <NavLink exact to="/contact" className={`${style.hbtn2}`}>
                            Contact us
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default MainHome;
