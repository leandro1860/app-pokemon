/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Types = () => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/type');
    const [data, setData] = useState([{}]);
    const colour: any = ['bg-yellow-300', 'bg-red-400', 'bg-green-200'];
    const [loading, setLoading] = useState(true);

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

    const selectedAbility = async (url: any) => {
        const ability = await axios.get(url);
        console.log(ability.data);
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
                    {data.map((item: any, index: number) =>
                        item.name ? (
                            <button
                                className={`${getColour(
                                    index,
                                )} rounded-xl bg-red-600 h-12 w-28 m-2 text-white`}
                                key={index}
                                onClick={() => selectedAbility(item.url)}
                            >
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                            </button>
                        ) : null,
                    )}
                </div>
            )}
        </div>
    );
};

export default Types;
