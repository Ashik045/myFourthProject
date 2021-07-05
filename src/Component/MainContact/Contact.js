/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import style from './contact.module.css';
import Contactfooter from './Contactfooter';

const detailOne = [
    { text: 'About us' },
    { text: 'Contact scale' },
    { text: 'Careers' },
    { text: 'Security' },
    { text: 'Privacy' },
    { text: 'Terms' },
];

const detailTwo = [{ text: 'Help Center' }, { text: 'Video Tutorials' }];

const detailThree = [{ text: 'Developer Tools' }];

const detailFour = [
    { text: 'Customer Success' },
    { text: 'Scale' },
    { text: 'Revies' },
    { text: 'Educations' },
    { text: 'Privacy' },
    { text: 'Individuals' },
];

const detailFive = [
    { text: 'About us' },
    { text: 'AvailAbility' },
    { text: 'Careers' },
    { text: 'Sending Notifications' },
    { text: 'Privacy' },
];

const Contact = () => {
    const [nameInp, setNameInp] = useState('MR. ');
    const [emailInp, setemailInp] = useState('');
    const [pasInp, setpasInp] = useState('');
    const nameInps = useRef();

    useEffect(() => {
        nameInps.current.focus();
    }, []);
    const handleName = (e) => {
        setNameInp(e.target.value);
    };
    const handleEmail = (e) => {
        setemailInp(e.target.value);
    };
    const handlepas = (e) => {
        setpasInp(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire('Good job!', 'You will be in our touch son!', 'success');
    };

    return (
        <>
            <section className={`${style.cSection}`}>
                <h1 className="text-center mb-4">Get In Touch</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-8">
                            <div className="my-2">
                                <label className="form-label">Full Name :</label>
                                <input
                                    ref={nameInps}
                                    type="text"
                                    value={nameInp}
                                    onChange={handleName}
                                    className="form-control"
                                />
                            </div>
                            <div className="my-2">
                                <label className="form-label">Email :</label>
                                <input
                                    type="email"
                                    value={emailInp}
                                    onChange={handleEmail}
                                    className="form-control"
                                />
                                <div className="form-text">we will never share your email</div>
                            </div>
                            <div className="my-2">
                                <label className="form-label">Password :</label>
                                <input
                                    type="password"
                                    value={pasInp}
                                    onChange={handlepas}
                                    className="form-control"
                                />
                            </div>

                            <div className="input-group my-3">
                                <input type="file" className="form-control" />
                                <label className="input-group-text">Upload</label>
                            </div>
                            <input className="w-100 btn btn-primary" type="submit" value="submit" />
                        </div>
                    </div>
                </form>
            </section>

            <section className={`${style.conSec}`}>
                <div className={`${style.contact}`}>
                    <div className="container mt-5">
                        <div className="row d-flex justify-content-between ms-5 ms-sm-none">
                            <Contactfooter header="About" tdetails={detailOne} />
                            <Contactfooter header="Support" tdetails={detailTwo} />
                            <Contactfooter header="Developer" tdetails={detailThree} />
                            <Contactfooter header="Solutions" tdetails={detailFour} />
                            <Contactfooter header="Features" tdetails={detailFive} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Contact;
