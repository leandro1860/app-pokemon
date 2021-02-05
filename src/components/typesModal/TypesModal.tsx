import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateStateTypeModal } from '../../store/actions/action.typeModal';
import { typeState } from '../../store/store';
import MainModal from '../mainModal/MainModal';
import { selectedPokemon } from '../../assets/callsApi/callsApi';
import { getColour } from '../../assets/getColour/getColours';

const TypesModal = () => {
    const dispatch = useDispatch();
    const stateTypeModal = useSelector((state: typeState) => state.reducerTypeModal.stateTypeModal);
    const pokemonAbility = useSelector(
        (state: typeState) => state.reducerPokemonAbility.pokemonAbilities,
    );

    const nameAbility = useSelector((state: typeState) => state.reducerTypeModal.nameAbility);

    const conditionSelectedPokemon = (data: string) => {
        data ? selectedPokemon({ label: data, value: '', url: '' }) : null;
    };

    return (
        stateTypeModal && (
            <div>
                <div className="h-screen flex mb-20 justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-600 bg-opacity-75">
                    <div className="w-11/12 max-w-2xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none p-2">
                            <div className="flex h-10 items-center justify-center py-8 px-2 border-b border-solid border-gray-300 rounded-t">
                                <h3 className="text-xl font-semibold">
                                    Characters with ability{' '}
                                    <p className="text-center text-blue-600">
                                        {nameAbility.toUpperCase()}
                                    </p>{' '}
                                </h3>
                            </div>
                            <div className="flex justify-center items-center flex-wrap overflow-auto h-96 p-4">
                                {pokemonAbility.map((item: any, index: number) =>
                                    item.pokemon ? (
                                        <button
                                            className={`${getColour()} bg-black rounded-xl py-1 px-2 m-1 text-white focus:outline-none`}
                                            key={index}
                                            onClick={() =>
                                                conditionSelectedPokemon(item.pokemon.name)
                                            }
                                        >
                                            <p className="text-sm">
                                                {item.pokemon.name.charAt(0).toUpperCase() +
                                                    item.pokemon.name.slice(1)}
                                            </p>
                                        </button>
                                    ) : null,
                                )}
                            </div>
                            <div className="flex contents-center justify-center border-t border-solid border-gray-300 rounded-b">
                                <button
                                    className="pt-2 text-red-500 background-transparent font-bold uppercase text-md outline-none focus:outline-none"
                                    type="button"
                                    style={{ transition: 'all .15s ease' }}
                                    onClick={() => dispatch(updateStateTypeModal(false, ''))}
                                >
                                    CLOSE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                <MainModal />
            </div>
        )
    );
};

export default TypesModal;
