import React from 'react';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();

    const handleDashboardClick = () => {
        const token = localStorage.getItem('authToken');
        history.push(token ? '/dashboard' : '/');
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        history.push('/login');
    };

    return (
        <nav className="bg-purple-800 px-4 py-3">
            <div className="flex flex-col sm:flex-row items-center w-full text-center">
                {/* Bagian Tengah di Laptop, Stack di HP */}
                <div className="flex flex-col sm:flex-row sm:justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 w-full">
                    <span
                        onClick={handleDashboardClick}
                        className="text-white text-lg sm:text-xl lg:text-2xl cursor-pointer"
                    >
                        Dashboard
                    </span>
                    <a href="/kelola-karyawan" className="text-white text-lg sm:text-xl lg:text-2xl">
                        Kelola Karyawan
                    </a>
                    <a href="/catatan-kehadiran" className="text-white text-lg sm:text-xl lg:text-2xl">
                        Catatan Kehadiran
                    </a>
                </div>

                {/* Logout di kanan hanya di Laptop */}
                <div className="mt-2 sm:mt-0 sm:ml-auto">
                    <button
                        onClick={handleLogout}
                        className="text-white text-lg sm:text-xl lg:text-2xl px-4 py-1 bg-gray-400 rounded-md hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
