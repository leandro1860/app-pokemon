import React from 'react';
import { useSelector } from 'react-redux';

const Locations = () => {
    const locations = useSelector((state: any) => state.reducerMainItems.mainItems);
    console.log(locations);

    return <div>locations</div>;
};

export default Locations;
