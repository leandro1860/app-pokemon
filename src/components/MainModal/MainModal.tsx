import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateStateModal } from '../../store/actions/action.modal';
import { typeState } from '../../store/store';
import { Types } from './types';
import { abilityTypes } from './types';

const MainModal = () => {
    const stateModal = useSelector((state: typeState) => state.reducerModal.stateModal);
    const dataCharacter = useSelector(
        (state: typeState) => state.reducerDataCharacter.dataCharacter,
    );
    const dispatch = useDispatch();

    return (
        stateModal && (
            <div>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-600 bg-opacity-75">
                    <div className="w-11/12 relative mx-auto max-w-2xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none p-2">
                            <div className="flex items-start justify-center p-4 border-b border-solid border-gray-300 rounded-t">
                                <h3 className="text-3xl font-semibold text-blue-600">
                                    {dataCharacter.name.charAt(0).toUpperCase() +
                                        dataCharacter.name.slice(1)}
                                </h3>
                            </div>
                            <div className="overflow-auto h-96">
                                <div className="flex justify-center">
                                    <img src={dataCharacter.sprites.front_default} alt="" />
                                </div>
                                <div className="flex flex-col items-center relative p-4 flex-auto">
                                    <h1 className="font-semibold">HEIGHT</h1>
                                    <p className="text-green-500">
                                        {' '}
                                        {dataCharacter.height.length * 0.1 < 5
                                            ? dataCharacter.height * 0.1
                                            : (dataCharacter.height * 0.1).toFixed(2)}{' '}
                                        m
                                    </p>{' '}
                                </div>
                                <div className="flex flex-col items-center justify-center relative p-4 flex-auto">
                                    <h1 className="font-semibold">WEIGHT</h1>
                                    <p className="text-green-500">
                                        {' '}
                                        {(dataCharacter.weight * 0.1).toFixed(1)} kg
                                    </p>
                                </div>
                                <div className="flex flex-col items-center justify-center relative p-4 flex-auto">
                                    <h1 className="font-semibold">TYPE OF POKEMON</h1>
                                    {dataCharacter.types.map((item: Types, index: number) => (
                                        <p className="text-green-500" key={index}>
                                            {' '}
                                            {item.type.name.charAt(0).toUpperCase() +
                                                item.type.name.slice(1)}
                                        </p>
                                    ))}
                                </div>
                                <div className="flex flex-col items-center relative p-4 flex-auto">
                                    <h1 className="font-semibold">BASIC EXPERIENCE</h1>
                                    <p className="text-green-500">
                                        {dataCharacter.base_experience} puntos
                                    </p>
                                </div>
                                <div className="flex flex-col items-center relative p-4 flex-auto">
                                    <h1 className="font-semibold">ABILITIES</h1>
                                    {dataCharacter.abilities.map(
                                        (item: abilityTypes, index: number) => (
                                            <p className="text-green-500" key={index}>
                                                {' '}
                                                {item.ability.name.charAt(0).toUpperCase() +
                                                    item.ability.name.slice(1)}
                                            </p>
                                        ),
                                    )}
                                </div>
                            </div>
                            <div className="flex contents-center justify-center border-t border-solid border-gray-300 rounded-b">
                                <button
                                    className=" pt-2 text-red-500 background-transparent font-bold uppercase text-md outline-none focus:outline-none"
                                    type="button"
                                    style={{ transition: 'all .15s ease' }}
                                    onClick={() => dispatch(updateStateModal(false))}
                                >
                                    CLOSE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </div>
        )
    );
};

export default MainModal;
