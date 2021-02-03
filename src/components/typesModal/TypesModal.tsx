import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateStateTypeModal } from '../../store/actions/action.typeModal';
import { typeState } from '../../store/store';
/* import { Types } from './types';
import { abilityTypes } from './types'; */

const TypesModal = () => {
    const dispatch = useDispatch();
    const stateTypeModal = useSelector((state: typeState) => state.reducerTypeModal.stateTypeModal);
    const pokemonAbility = useSelector(
        (state: typeState) => state.reducerPokemonAbility.pokemonAbilities,
    );

    const nameAbility = useSelector((state: typeState) => state.reducerTypeModal.nameAbility);

    return (
        stateTypeModal && (
            <div>
                <div className="h-screen bg-red-200 flex mb-20 justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="w-4/5">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex h-10 items-center justify-between p-8 border-b border-solid border-gray-300 rounded-t">
                                <p>Personajes con habilidad {nameAbility.toUpperCase()} </p>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => dispatch(updateStateTypeModal(false, ''))}
                                >
                                    <span className="bg-transparent h-12 text-red-600 h-auto w-auto text-2xl block outline-none focus:outline-none">
                                        ×
                                    </span>
                                </button>
                            </div>

                            <div className="flex justify-center items-center flex-wrap overflow-auto h-96 p-4">
                                {pokemonAbility.map((item: any, index: number) =>
                                    item.pokemon ? (
                                        <button
                                            className={`bg-black rounded-xl bg-red-600 p-2 m-1 text-white`}
                                            key={index}
                                        >
                                            {item.pokemon.name.charAt(0).toUpperCase() +
                                                item.pokemon.name.slice(1)}
                                        </button>
                                    ) : null,
                                )}
                            </div>
                            <div className="flex contents-center justify-center p-4 border-t border-solid border-gray-300 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                    style={{ transition: 'all .15s ease' }}
                                    onClick={() => dispatch(updateStateTypeModal(false, ''))}
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

export default TypesModal;
