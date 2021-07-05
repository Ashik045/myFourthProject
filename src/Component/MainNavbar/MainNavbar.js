import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/udemy.svg';
import stylea from './MainNav.module.css';

const MainNavbar = () => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
            <NavLink to="/" className="navbar-brand">
                <img src={Logo} alt="sda" className={`${stylea.navLogo}`} />
            </NavLink>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto text-center mb-2 mb-lg-0">
                    <li className="nav-item mx-2">
                        <NavLink
                            exact
                            to="/"
                            className="nav-link"
                            activeStyle={{ fontWeight: 'bold', color: 'red' }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item  mx-2">
                        <NavLink
                            exact
                            to="/aboutus"
                            className="nav-link"
                            activeStyle={{ fontWeight: 'bold', color: 'red' }}
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li className="nav-item  mx-2">
                        <NavLink
                            exact
                            to="/details"
                            className="nav-link"
                            activeStyle={{ fontWeight: 'bold', color: 'red' }}
                        >
                            Details
                        </NavLink>
                    </li>
                    <li className="nav-item  mx-2">
                        <NavLink
                            exact
                            to="/services"
                            className="nav-link"
                            activeStyle={{ fontWeight: 'bold', color: 'red' }}
                        >
                            Services
                        </NavLink>
                    </li>
                    <li className="nav-item  mx-2">
                        <NavLink
                            exact
                            to="/reviews"
                            className="nav-link"
                            activeStyle={{ fontWeight: 'bold', color: 'red' }}
                        >
                            Reviews
                        </NavLink>
                    </li>
                    <li className="nav-item  mx-2">
                        <NavLink
                            exact
                            to="/contact"
                            className="nav-link"
                            activeStyle={{ fontWeight: 'bold', color: 'red' }}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default MainNavbar;
