import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
    showSuggestions: boolean;
    suggestions: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, showSuggestions, suggestions }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchQuery);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setSearchQuery(suggestion);
        onSearch(suggestion);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-8">
            <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
                <input
                    className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Search Pokémon..."
                    value={searchQuery}
                    onChange={handleChange}
                />
                <button
                    className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="submit"
                >
                    Search
                </button>
            </div>
            {showSuggestions && (
                <ul className="mt-2 bg-white border rounded-md shadow-lg">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} className="cursor-pointer py-2 px-4 hover:bg-blue-100" onClick={() => handleSuggestionClick(suggestion)}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </form>
    );
};

export default SearchBar;
