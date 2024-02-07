// components/PokemonStat.tsx
import React from 'react';

interface PokemonStatProps {
    label: string;
    value: number | undefined;
}

const PokemonStat: React.FC<PokemonStatProps> = ({ label, value }) => {
    return (
        <div>
            <p><strong>{label}:</strong> {value ?? 'N/A'}</p>
            {value && (
                <div className="bg-gray-700 h-2 rounded-lg mt-1">
                    <div className="bg-green-500 h-full rounded-lg" style={{ width: `${(value / 3000) * 100}%` }}></div>
                </div>
            )}
        </div>
    );
};

export default PokemonStat;
