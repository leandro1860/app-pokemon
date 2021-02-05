import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/header-pokemon-logo.png';
import sphere from '../../assets/images/header-pokemon-sphere.png';

const Header = () => {
    return (
        <div className="fixed flex w-full justify-between items-center max-h-20	bg-indigo-900 border-solid border-yellow-100 border-b-1 px-6">
            <Link to="/">
                <img className="max-h-20" src={logo} alt="" />
            </Link>
            <Link to="/">
                <img className="h-full max-h-12" src={sphere} alt="" />
            </Link>
        </div>
    );
};

export default Header;
