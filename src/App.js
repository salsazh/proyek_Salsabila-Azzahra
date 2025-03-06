import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import CatatanKehadiran from './pages/CatatanKehadiran';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import KelolaKaryawan from './pages/KelolaKaryawan';
import Documentations from './pages/Documentations';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/Signup';

// Komponen utama aplikasi
function App() {
  // Mengecek apakah pengguna sudah login dengan memeriksa token autentikasi di localStorage
  const isAuthenticated = !!localStorage.getItem('authToken'); // Jika ada token, isAuthenticated bernilai true

  return (
    // Router untuk mengatur rute aplikasi
    <Router>
      <Switch>
        {/* Rute default untuk halaman pertama */}
        <Route path="/" exact>
          {/* Redirect ke halaman login jika user mengakses root */}
          <Redirect to="/login" />
        </Route>

        {/* Rute untuk halaman login */}
        <Route path="/login" component={Login} exact />
        {/* Rute untuk halaman signup */}
        <Route path="/signup" component={SignUp} exact />
        {/* Rute untuk halaman home */}
        <Route path="/home" component={Home} exact />

        {/* Jika pengguna sudah terautentikasi (login), tampilkan halaman berikutnya */}
        {isAuthenticated ? (
          <>
            {/* Navbar yang akan ditampilkan setelah login */}
            <Navbar />
            <Switch>
              {/* Rute untuk halaman dashboard */}
              <Route path="/dashboard" component={Dashboard} exact />
              {/* Rute untuk halaman kelola karyawan */}
              <Route path="/kelola-karyawan" component={KelolaKaryawan} exact />
              {/* Rute untuk halaman catatan kehadiran */}
              <Route path="/catatan-kehadiran" component={CatatanKehadiran} exact />
              {/* Rute untuk halaman dokumentasi */}
              <Route path="/dokumentasi" component={Documentations} exact />
              {/* Jika rute tidak cocok, redirect ke dashboard */}
              <Redirect to="/dashboard" />
            </Switch>
          </>
        ) : (
          // Jika pengguna belum login, redirect ke halaman login
          <Redirect to="/login" />
        )}
      </Switch>
    </Router>
  );
}

// Mengekspor komponen App sebagai default export
export default App;