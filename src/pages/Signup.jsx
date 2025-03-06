// Mengimpor React dan useState untuk state management, serta useHistory untuk navigasi.
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  // Hook useHistory untuk melakukan navigasi ke halaman lain
  const history = useHistory();

  // State untuk menyimpan nilai email, password, dan pesan yang ditampilkan setelah pendaftaran
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Fungsi untuk menangani proses pendaftaran pengguna
  const handleSignUp = (e) => {
    e.preventDefault(); // Mencegah form melakukan reload halaman saat disubmit

    // Mengambil data pengguna yang sudah ada di localStorage atau membuat array kosong jika tidak ada
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Menambahkan pengguna baru ke dalam array users
    users.push({ email, password });
    
    // Menyimpan data pengguna yang baru ke dalam localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Menampilkan pesan sukses setelah akun berhasil dibuat
    setMessage('Account created successfully!');
    
    // Mengarahkan pengguna ke halaman login setelah 2 detik
    setTimeout(() => history.push('/login'), 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-r from-teal-400 via-purple-500 to-indigo-500">
      {/* Dekorasi latar belakang dengan efek blur */}
      <div className="absolute top-16 left-10 w-14 h-14 md:w-16 md:h-16 bg-teal-300 rounded-full filter blur-xl opacity-50"></div>
      <div className="absolute bottom-0 right-10 w-20 h-20 md:w-24 md:h-24 bg-teal-400 rounded-full filter blur-xl opacity-50"></div>

      {/* Konten utama form pendaftaran */}
      <div className="bg-white px-6 py-8 rounded-lg shadow-md max-w-md w-full z-10">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-4">Sign Up</h1>
        
        {/* Menampilkan pesan sukses jika ada */}
        {message && <p className="text-green-500 text-sm text-center mb-2">{message}</p>}

        {/* Form untuk input email dan password */}
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            {/* Label dan input untuk email */}
            <label className="block text-gray-700 font-semibold text-sm md:text-base mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Mengubah nilai email saat input berubah
              className="border border-gray-300 p-2 md:p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
              required // Menandakan input ini wajib diisi
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
              required // Menandakan input ini wajib diisi
            />
          </div>
          <button
            type="submit" // Menyubmit form saat tombol Sign Up diklik
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold w-full py-2 md:py-3 rounded"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
