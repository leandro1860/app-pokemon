/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import TypesModal from '../../components/typesModal/TypesModal';
import { updateStateTypeModal } from '../../store/actions/action.typeModal';
import { pokemonAbility } from '../../store/actions/action.pokemonAbility';

const Types = () => {
    const [data, setData] = useState([{}]);
    const colour: any = ['bg-yellow-300', 'bg-red-400', 'bg-green-200'];
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const url = 'https://pokeapi.co/api/v2/type';
    let numberColour = 0;

    const getTypes = async () => {
        const types = await axios.get(url);
        types.data.results.map((item: any) =>
            setData((data) => [
                ...data,
                {
                    name: item.name,
                    url: item.url,
                },
            ]),
        );
        setTimeout(() => {
            setLoading(false);
        }, 500);
    };

    const pokemonsAbilities = async (url: any) => {
        const pokemons = await axios.get(url);
        dispatch(pokemonAbility(pokemons.data.pokemon));
    };

    const selectedAbility = (url: any, name: any) => {
        dispatch(updateStateTypeModal(true, name));
        pokemonsAbilities(url);
    };

    const getColour = (data: any) => {
        if (numberColour === 0) {
            numberColour++;
            return colour[0];
        } else if (numberColour === 1) {
            numberColour++;
            return colour[1];
        } else if (numberColour === 2) {
            numberColour = 0;
            return colour[2];
        }
    };

    useEffect(() => {
        getTypes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return (
        <div className="flex justify-center ">
            {loading ? (
                <div className="flex h-screen flex-col justify-center items-center pt-20">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
                    <p className="text-yellow-200 text-3xl mt-2">Cargando..</p>
                </div>
            ) : (
                <div className="flex h-screen pt-20 justify-center items-center flex-wrap">
                    <div>
                        {data.map((item: any, index: number) =>
                            item.name ? (
                                <button
                                    className={`${getColour(
                                        index,
                                    )} rounded-xl bg-red-600 h-12 w-28 m-2 text-white`}
                                    key={index}
                                    onClick={() => selectedAbility(item.url, item.name)}
                                >
                                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                </button>
                            ) : null,
                        )}
                        <TypesModal />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Types;
