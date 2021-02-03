import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/pokemons.css';

const Pokemons = () => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextUrl, setNextUrl] = useState(url);
    const [loadMore, setLoadMore] = useState(true);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([{}]);

    const getUrlPokemons = async () => {
        const pokemons = await axios.get(url);
        pokemons.data.results.map((item: any) => getPokemon(item.url));
        setNextUrl(pokemons.data.next);
        pokemons.data.next ? setLoadMore(true) : setLoadMore(true);
    };

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
        getUrlPokemons();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return loading ? (
        <div className="flex justify-center items-center pt-20 h-screen">
            <div className="flex flex-col justify-center items-center">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
                <p className="text-yellow-200 text-3xl mt-2">Cargando..</p>
            </div>
        </div>
    ) : (
        <div className="flex flex-col pt-20">
            <div className="flex justify-center flex-wrap">
                {data.map((item: any, index: number) =>
                    item.name ? (
                        <div
                            className="flex items-start  content-start justify-between w-64 h-36 m-6  bg-yellow-100 border-2 border-black rounded-xl"
                            key={index}
                        >
                            <div className="flex h-full flex-col justify-between">
                                <p className="font-serif font-medium text-xl mt-2 ml-2">
                                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                </p>
                                {item.type.length == 1 ? (
                                    <div>
                                        <p className="flex justify-center w-min w-max px-2 m-2 bg-green-300	 rounded-xl">
                                            {item.type[0].charAt(0).toUpperCase() +
                                                item.type[0].slice(1)}
                                        </p>
                                    </div>
                                ) : item.type.length == 2 ? (
                                    <div>
                                        <p className="flex justify-center w-min w-max px-2 m-2 bg-green-300	rounded-xl">
                                            {item.type[0].charAt(0).toUpperCase() +
                                                item.type[0].slice(1)}{' '}
                                        </p>
                                        <p className="flex justify-center w-min w-max px-2 m-2 bg-yellow-500 border-2 rounded-xl">
                                            {item.type[1].charAt(0).toUpperCase() +
                                                item.type[0].slice(1)}{' '}
                                        </p>
                                    </div>
                                ) : null}
                            </div>
                            <div className="flex items-center h-full">
                                <img src={item.image} alt="" />
                            </div>
                        </div>
                    ) : null,
                )}
            </div>

            {loadMore && (
                <div className="flex justify-center">
                    <button
                        className="w-full bg-green-700 text-white rounded-2xl h-10 mx-4 my-6 focus:outline-none"
                        onClick={() => next()}
                    >
                        Cargar mas
                    </button>{' '}
                </div>
            )}
        </div>
    );
};

export default Pokemons;
