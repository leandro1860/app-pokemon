import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="h-20 w-full bg-indigo-900 flex flex-end items-center justify-around ">
            <div>
                <p className="text-xl text-white">
                    Created by{' '}
                    <a className="text-red-500" href="https://github.com/leandro1860">
                        Leandro Páez
                    </a>
                </p>
            </div>

            <div className="flex items-center">
                <a href="https://www.linkedin.com/in/leandro-emanuel-paez/">
                    {' '}
                    <FontAwesomeIcon className="text-blue-500 fa-3x" icon={faLinkedin} />
                </a>
            </div>
        </div>
    );
};

export default Footer;
