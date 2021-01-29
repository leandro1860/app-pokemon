/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { typeState } from '../../store/store';

const Pokedex = () => {
    const pokedex = useSelector((state: typeState) => state.reducerMainItems.mainItems);
    return <div>pokedex</div>;
};

export default Pokedex;
