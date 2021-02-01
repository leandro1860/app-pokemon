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
                <div className="justify-center items-center flex  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="w-3/6 mt-6 relative my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    {dataCharacter.name.charAt(0).toUpperCase() +
                                        dataCharacter.name.slice(1)}
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => dispatch(updateStateModal(false))}
                                >
                                    <span className="bg-transparent text-red-600 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                    </span>
                                </button>
                            </div>
                            <div className="flex justify-center">
                                <img src={dataCharacter.sprites.front_default} alt="" />
                            </div>
                            <div className="flex flex-col items-center relative p-4 flex-auto">
                                <h1>ALTURA</h1>
                                {dataCharacter.height.length * 0.1 < 5
                                    ? dataCharacter.height * 0.1
                                    : (dataCharacter.height * 0.1).toFixed(2)}{' '}
                                m
                            </div>
                            <div className="flex flex-col items-center justify-center relative p-4 flex-auto">
                                <h1>PESO</h1>
                                {dataCharacter.weight * 0.1} kg
                            </div>
                            <div className="flex flex-col items-center justify-center relative p-4 flex-auto">
                                <h1>TIPO DE POKEMON</h1>
                                {dataCharacter.types.map((item: Types, index: number) => (
                                    <p key={index}>
                                        {' '}
                                        {item.type.name.charAt(0).toUpperCase() +
                                            item.type.name.slice(1)}
                                    </p>
                                ))}
                            </div>
                            <div className="flex flex-col items-center relative p-4 flex-auto">
                                <h1>EXPERIENCIA BASE</h1>
                                {dataCharacter.base_experience} puntos
                            </div>
                            <div className="flex flex-col items-center relative p-4 flex-auto">
                                <h1>HABILIDADES</h1>
                                {dataCharacter.abilities.map(
                                    (item: abilityTypes, index: number) => (
                                        <p key={index}>
                                            {' '}
                                            {item.ability.name.charAt(0).toUpperCase() +
                                                item.ability.name.slice(1)}
                                        </p>
                                    ),
                                )}
                            </div>
                            <div className="flex contents-center justify-center  border-t border-solid border-gray-300 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                    style={{ transition: 'all .15s ease' }}
                                    onClick={() => dispatch(updateStateModal(false))}
                                >
                                    Cerrar
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
