import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../Assets/Images/LogoShift.png';
import shiftmanajemen from '../Assets/Images/shiftmanajemen.png';

const Home = () => {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            history.push('/login');
        }
    }, [history]);

    return (
        <div className="bg-gradient-to-br from-purple-700 via-purple-500 to-purple-300 min-h-screen flex flex-col justify-center items-center text-center p-5">
            <img 
                src={logo} 
                alt="Logo Shift Manajemen" 
                className="w-40 sm:w-56 lg:w-64 h-auto mb-5 animate-spin" 
            />

            <img 
                src={shiftmanajemen} 
                alt="Shift Manajemen" 
                className="max-w-full sm:max-w-sm lg:max-w-md h-auto mb-5" 
            />

            <button
                className="bg-purple-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-12 text-lg sm:text-xl rounded hover:bg-purple-700 transition mb-5"
                onClick={() => history.push('/dashboard')}
            >
                Mulai Sekarang
            </button>
        </div>
    );
};

export default Home;
