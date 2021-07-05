/* eslint-disable react/no-array-index-key */
import React from 'react';

const Contactfooter = (props) => {
    const { header, tdetails } = props;
    return (
        <div className="col-sm-2 ">
            <h3 className="mb-5">{header}</h3>
            <ul className="list-unstyled">
                {tdetails &&
                    tdetails.map((datas, index) => (
                        <li className="my-4 " key={index}>
                            {datas.text}
                        </li>
                    ))}
            </ul>
        </div>
    );
};
export default Contactfooter;
