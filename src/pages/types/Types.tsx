/* eslint-disable no-unused-vars */

import React from 'react';
import { useSelector } from 'react-redux';
import { typeState } from '../../store/store';

const Types = () => {
    const types = useSelector((state: typeState) => state.reducerMainItems.mainItems);
    return <div>types</div>;
};

export default Types;
