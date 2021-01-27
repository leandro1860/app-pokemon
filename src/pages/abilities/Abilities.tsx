import React from 'react';
import { useSelector } from 'react-redux';

const Abilities = () => {
    const abilities = useSelector((state: any) => state.reducerMainItems.mainItems);
    console.log(abilities);

    return <div>abilities</div>;
};

export default Abilities;
