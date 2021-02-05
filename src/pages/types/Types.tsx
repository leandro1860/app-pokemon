import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import TypesModal from '../../components/typesModal/TypesModal';
import { updateStateTypeModal } from '../../store/actions/action.typeModal';
import { pokemonAbility } from '../../store/actions/action.pokemonAbility';
import { getColour } from '../../assets/getColour/getColours';

const Types = () => {
    const [data, setData] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const url = 'https://pokeapi.co/api/v2/type';

    const pokemonsAbilities = async (url: any) => {
        const pokemons = await axios.get(url);
        dispatch(pokemonAbility(pokemons.data.pokemon));
    };

    const selectedAbility = (url: any, name: any) => {
        dispatch(updateStateTypeModal(true, name));
        pokemonsAbilities(url);
    };

    useEffect(() => {
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
        getTypes();
    }, [url]);

    return loading ? (
        <div className="flex h-full flex-col justify-center items-center background">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
            <p className="text-yellow-200 text-3xl mt-2">Loading..</p>
        </div>
    ) : (
        <div className="flex flex-col background h-full w-full">
            <div className="flex flex-col background h-full justify-center items-center">
                <div className="flex justify-center w-4/5">
                    <div className="flex justify-center items-center flex-wrap">
                        {data.map((item: any, index: number) =>
                            item.name ? (
                                <button
                                    className={`${getColour()} rounded-xl bg-red-600 px-5 m-2 text-white`}
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
            </div>
            <div className="flex items-center fixed h-full w-8 pb-20 ">
                <div className="flex items-center justify-center bg-black w-full h-48 rounded-r-3xl bg-indigo-900 ">
                    <p className="transform -rotate-90 text-yellow-300 text-xl">TYPES</p>
                </div>
            </div>
        </div>
    );
};

export default Types;
