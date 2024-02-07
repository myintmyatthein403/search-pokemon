// components/PokemonImage.tsx

import React from 'react';

interface PokemonImageProps {
    src: string;
    alt: string;
}

const PokemonImage: React.FC<PokemonImageProps> = ({ src, alt }) => {
    return (
        <div className="p-4">
            <img className="w-full h-auto" src={src} alt={alt} />
        </div>
    );
};

export default PokemonImage;
