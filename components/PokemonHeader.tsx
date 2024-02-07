// components/PokemonHeader.tsx

import React from 'react';
import {typeColors} from "@/components/typeColors";

interface PokemonHeaderProps {
    number: string;
    name: string;
    types: string[];
    onClickBack: () => void;
}

const PokemonHeader: React.FC<PokemonHeaderProps> = ({ number, name, types, onClickBack }) => {
    return (
        <div className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
            <div>
                <p className="text-sm">#{number}</p>
                <h1 className="text-xl font-bold">{name}</h1>
                <div className="flex">
                    {types.map((type, index) => (
                        <span key={index} className={`text-xs bg-${typeColors[type]}-200 text-${typeColors[type]}-800 px-2 py-1 rounded-full mr-2`}>
                            {type}
                        </span>
                    ))}
                </div>
            </div>
            <button className="text-xs px-2 py-1 rounded-full mr-2 bg-gray-600 text-white hover:bg-gray-700" onClick={onClickBack}>
                Back
            </button>
        </div>
    );
};

export default PokemonHeader;
