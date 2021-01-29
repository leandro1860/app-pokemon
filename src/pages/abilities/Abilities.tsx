/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { typeState } from '../../store/store';

const Abilities = () => {
    const abilities = useSelector((state: typeState) => state.reducerMainItems.mainItems);
    return <div>abilities</div>;
};

export default Abilities;
