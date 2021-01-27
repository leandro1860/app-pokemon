import React from 'react';
import { useSelector } from 'react-redux';

const Pokedex = () => {
    const pokedex = useSelector((state: any) => state.reducerMainItems.mainItems);
    console.log(pokedex);

    return <div>pokedex</div>;
};

export default Pokedex;
