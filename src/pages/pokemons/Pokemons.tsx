import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/pokemons.css';
import { selectedPokemon } from '../../assets/callsApi/callsApi';
import MainModal from '../../components/mainModal/MainModal';

const Pokemons = () => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextUrl, setNextUrl] = useState(url);
    const [loadMore, setLoadMore] = useState(true);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([{}]);

    const getPokemon = async (data: any) => {
        const pokemon = await axios.get(data);
        const type: string[] = [];
        pokemon.data.types.map((item: any) => type.push(item.type.name));

        setData((data) => [
            ...data,
            {
                name: pokemon.data.name,
                image: pokemon.data.sprites.front_default,
                type: type,
            },
        ]);

        setTimeout(() => {
            setLoading(false);
        }, 500);
    };

    const next = () => {
        setUrl(nextUrl);
    };

    useEffect(() => {
        const getUrlPokemons = async () => {
            const pokemons = await axios.get(url);
            pokemons.data.results.map((item: any) => getPokemon(item.url));
            setNextUrl(pokemons.data.next);
            pokemons.data.next ? setLoadMore(true) : setLoadMore(true);
        };
        getUrlPokemons();
    }, [url]);

    const selectedPokemon1 = (data: string) => {
        data ? selectedPokemon({ label: data, value: '', url: '' }) : null;
    };

    return loading ? (
        <div className="flex justify-center items-center h-full background ">
            <div className="flex flex-col justify-center items-center">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
                <p className="text-yellow-200 text-3xl mt-2">Cargando..</p>
            </div>
        </div>
    ) : (
        <div className="flex flex-col background h-full ">
            <div className="flex justify-center w-full ">
                <div className="flex justify-center flex-wrap w-11/12">
                    {data.map((item: any, index: number) =>
                        item.name ? (
                            <button
                                className="flex items-start  content-start justify-between w-48 h-28 m-2 bg-yellow-100 border-2 border-black rounded-xl"
                                key={index}
                                onClick={() => selectedPokemon1(item.name)}
                            >
                                <div className="flex h-full flex-col justify-between p-2">
                                    <p className="font-serif font-medium text-xl">
                                        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                    </p>
                                    {item.type.length == 1 ? (
                                        <div>
                                            <p className="flex justify-center w-min w-max px-2 bg-green-300	rounded-xl text-sm">
                                                {item.type[0].charAt(0).toUpperCase() +
                                                    item.type[0].slice(1)}
                                            </p>
                                        </div>
                                    ) : item.type.length == 2 ? (
                                        <div>
                                            <p className="flex justify-center w-min w-max px-2 bg-green-300	rounded-xl text-sm">
                                                {item.type[0].charAt(0).toUpperCase() +
                                                    item.type[0].slice(1)}{' '}
                                            </p>
                                            <p className="flex justify-center w-min w-max px-2 mt-1 bg-yellow-500 rounded-xl text-sm">
                                                {item.type[1].charAt(0).toUpperCase() +
                                                    item.type[0].slice(1)}{' '}
                                            </p>
                                        </div>
                                    ) : null}
                                </div>
                                <div className="flex items-center h-full">
                                    <img src={item.image} alt="" />
                                </div>
                            </button>
                        ) : null,
                    )}
                </div>
            </div>
            {loadMore && (
                <div className="flex justify-center w-full">
                    <div className="flex justify-center w-7/12 px-4">
                        <button
                            className="bg-green-400 text-white rounded-2xl h-10 my-6 focus:outline-none w-full"
                            onClick={() => next()}
                        >
                            Load more..
                        </button>{' '}
                    </div>
                </div>
            )}

            <div className="flex items-center fixed w-8 pb-20 h-full">
                <div className="flex items-center justify-center bg-black w-full h-48 rounded-r-3xl bg-indigo-900 ">
                    <p className="transform -rotate-90 text-yellow-300 text-xl">POKEMONS</p>
                </div>
            </div>
            <MainModal />
        </div>
    );
};

export default Pokemons;
