import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Direktif Tailwind disertakan di sini
import App from './App';

// Fungsi dummyLogin untuk mensimulasikan login pengguna dan menyimpan token di localStorage
const dummyLogin = () => {
  const dummyToken = 'dummyAuthToken';
  localStorage.setItem('authToken', dummyToken);
};

// Panggil fungsi dummyLogin untuk mensimulasikan login
dummyLogin();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
