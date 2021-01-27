import React from 'react';
import { useSelector } from 'react-redux';

const Types = () => {
    const types = useSelector((state: any) => state.reducerMainItems.mainItems);
    console.log(types);

    return <div>types</div>;
};

export default Types;
