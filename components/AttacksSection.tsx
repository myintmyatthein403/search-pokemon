import React from 'react';
import { PokemonAttack } from '@/types';

interface AttacksSectionProps {
    fastAttacks: PokemonAttack[];
    specialAttacks: PokemonAttack[];
}

const AttacksSection: React.FC<AttacksSectionProps> = ({ fastAttacks, specialAttacks }) => {
    return (
        <div className="mt-4">
            <h2 className="text-lg font-bold mb-2">Attacks</h2>
            <div>
                <h3 className="text-base font-semibold mb-1">Fast Attacks</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {fastAttacks.map((attack, index) => (
                        <li key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                            <div className="p-4">
                                <p className="text-white text-lg font-semibold mb-2">{attack.name}</p>
                                <p className="text-gray-300 mb-1">Type: {attack.type}</p>
                                <p className="text-gray-300">Damage: {attack.damage}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                <h3 className="text-base font-semibold mb-1">Special Attacks</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {specialAttacks.map((attack, index) => (
                        <li key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                            <div className="p-4">
                                <p className="text-white text-lg font-semibold mb-2">{attack.name}</p>
                                <p className="text-gray-300 mb-1">Type: {attack.type}</p>
                                <p className="text-gray-300">Damage: {attack.damage}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AttacksSection;
