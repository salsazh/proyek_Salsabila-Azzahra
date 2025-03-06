// Mengimpor React, useState untuk state management, dan useHistory untuk navigasi.
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  // Hook useHistory untuk melakukan navigasi programatik
  const history = useHistory();

  // State untuk menyimpan nilai input email, password, dan error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Fungsi untuk menangani proses login
  const handleLogin = (e) => {
    e.preventDefault(); // Mencegah form untuk melakukan reload halaman saat disubmit

    // Mengambil data pengguna yang disimpan di localStorage
    const users = JSON.parse(localStorage.getItem('users')) || []; // Jika tidak ada, gunakan array kosong
    const user = users.find((u) => u.email === email && u.password === password); // Mencari pengguna yang cocok dengan email dan password

    if (user) {
      // Jika pengguna ditemukan, simpan authToken di localStorage dan arahkan ke halaman home
      localStorage.setItem('authToken', 'your-auth-token'); // Simpan token autentikasi
      history.push('/home'); // Redirect ke halaman home setelah login berhasil
    } else {
      // Jika tidak ditemukan, tampilkan pesan error
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-r from-teal-400 via-purple-500 to-indigo-500">
      {/* Dekorasi latar belakang dengan efek blur */}
      <div className="absolute top-0 right-10 w-16 h-16 md:w-20 md:h-20 bg-teal-300 rounded-full filter blur-xl opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 md:w-32 md:h-32 bg-teal-400 rounded-full filter blur-xl opacity-50"></div>

      {/* Konten utama form login */}
      <div className="bg-white px-6 py-8 rounded-lg shadow-md max-w-md w-full z-10">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-4">Login</h1>

        {/* Menampilkan pesan error jika ada */}
        {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

        {/* Form login */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            {/* Label dan input untuk email */}
            <label className="block text-gray-700 font-semibold text-sm md:text-base mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Mengubah nilai email saat input berubah
              className="border border-gray-300 p-2 md:p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
              required // Menandakan bahwa input ini wajib diisi
            />
          </div>
          <div className="mb-6">
            {/* Label dan input untuk password */}
            <label className="block text-gray-700 font-semibold text-sm md:text-base mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Mengubah nilai password saat input berubah
              className="border border-gray-300 p-2 md:p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your password"
              required // Menandakan bahwa input ini wajib diisi
            />
          </div>
          <button
            type="submit" // Menyubmit form saat tombol login diklik
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold w-full py-2 md:py-3 rounded"
          >
            Login
          </button>
        </form>

        {/* Tautan untuk menuju halaman signup jika pengguna belum memiliki akun */}
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm md:text-base">
            Don't have an account?{' '}
            <button
              onClick={() => history.push('/signup')} // Navigasi ke halaman signup
              className="text-teal-600 font-semibold hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
