/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemons = () => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextUrl, setNextUrl] = useState(url);
    const [loadMore, setLoadMore] = useState(true);
    const [data, setData] = useState([{}]);
    const getUrlPokemons = async () => {
        const pokemons = await axios.get(url);
        pokemons.data.results.map((item: any) => getPokemon(item.url));
        setNextUrl(pokemons.data.next);
        pokemons.data.next ? setLoadMore(true) : setLoadMore(false);
    };

    const getPokemon = async (data: any) => {
        const pokemon = await axios.get(data);
        setData((data) => [
            ...data,
            { name: pokemon.data.name, image: pokemon.data.sprites.front_default },
        ]);
    };

    const next = () => {
        console.log('hola');
        setUrl(nextUrl);
        console.log(nextUrl);
    };

    useEffect(() => {
        getUrlPokemons();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);
    return (
        <div>
            <div className="flex justify-center flex-wrap">
                {data.map((item: any, index: number) =>
                    item.name ? (
                        <div className="flex flex-col items-center mt-4 w-40" key={index}>
                            <p>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
                            <img src={item.image} alt="" />
                        </div>
                    ) : null,
                )}
            </div>
            {loadMore && (
                <div className="flex justify-center">
                    <button
                        className="w-full bg-blue-800 text-white rounded-2xl h-10 mx-4 mt-6"
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
