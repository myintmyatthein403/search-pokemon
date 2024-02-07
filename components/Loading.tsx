import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <div className="animate-bounce mb-4">
                <svg
                    className="w-16 h-16 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 2c-1.1 0-2 .9-2 2v1c0 5.5-4.5 10-10 10h12v-2H2c3.3 0 6-2.7 6-6V4c0-1.1-.9-2-2-2z" />
                    <path d="M22 12c0-5.5-4.5-10-10-10V0c6.6 0 12 5.4 12 12h-2zm-12 10c1.1 0 2 .9 2 2v1c0 1.1-.9 2-2 2s-2-.9-2-2v-1c0-1.1.9-2 2-2zm-3-3c-1.1 0-2 .9-2 2v1c0 1.1.9 2 2 2s2-.9 2-2v-1c0-1.1-.9-2-2-2zm6-1c-1.1 0-2 .9-2 2v1c0 1.1.9 2 2 2s2-.9 2-2v-1c0-1.1-.9-2-2-2zm8-2c1.1 0 2-.9 2-2s-.9-2-2-2v2zm-3 3c1.1 0 2-.9 2-2s-.9-2-2-2v2zm-6-1c1.1 0 2-.9 2-2s-.9-2-2-2v2zm3-3c1.1 0 2-.9 2-2s-.9-2-2-2v2zm-6 6c-1.1 0-2 .9-2 2s.9 2 2 2v-2zm3-3c-1.1 0-2 .9-2 2s.9 2 2 2v-2zm6 1c-1.1 0-2 .9-2 2s.9 2 2 2v-2z" />
                </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Loading...</h2>
            <p className="text-sm">Please wait while we load your game</p>
        </div>
    );
};

export default Loading;
