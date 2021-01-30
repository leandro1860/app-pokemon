/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Background from '../../assets/images/pokemonRoadBackground.jpeg';

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
        setLoading(false);
    };

    const next = () => {
        setUrl(nextUrl);
        console.log(nextUrl);
    };

    useEffect(() => {
        getUrlPokemons();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return (
        <div
            style={{
                backgroundImage: `url(${Background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
            }}
        >
            {loading ? (
                'Leandro'
            ) : (
                <div className="flex flex-col ">
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
            )}
        </div>
    );
};

export default Pokemons;
