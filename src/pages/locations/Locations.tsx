/* eslint-disable no-unused-vars */

import React from 'react';
import { useSelector } from 'react-redux';
import { typeState } from '../../store/store';

const Locations = () => {
    const locations = useSelector((state: typeState) => state.reducerMainItems.mainItems);
    return <div>locations</div>;
};

export default Locations;
