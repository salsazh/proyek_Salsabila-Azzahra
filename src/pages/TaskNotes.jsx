// Mengimpor React dan hooks useState, useEffect dari React, serta useParams dan useHistory dari react-router-dom untuk navigasi dan pengambilan parameter URL
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

// Mengimpor axios untuk melakukan HTTP request dan komponen Material UI untuk styling
import axios from 'axios';
import { Container, Typography, Box, Button } from '@material-ui/core';

const TaskNotes = () => {
    // Mengambil parameter userId dan date dari URL menggunakan useParams
    const { userId, date } = useParams();
    
    // Hook useHistory untuk melakukan navigasi ke halaman lain
    const history = useHistory();
    
    // State untuk menyimpan catatan tugas, nama pengguna, dan pesan error
    const [taskNotes, setTaskNotes] = useState('');
    const [userName, setUserName] = useState('');
    const [error, setError] = useState(null);

    // useEffect untuk memeriksa apakah pengguna sudah login dengan memeriksa token di localStorage
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            // Jika token tidak ada, arahkan pengguna ke halaman login
            history.push('/');
        }
    }, [history]);

    // useEffect untuk mengambil data pengguna dan catatan tugas berdasarkan userId dan date
    useEffect(() => {
        const fetchTaskNotes = async () => {
            try {
                // Melakukan request ke server untuk mengambil data pengguna dan catatan tugas
                const userResponse = await axios.get(`http://localhost:3004/user/${userId}`);
                const attendanceResponse = await axios.get(`http://localhost:3004/attendance?userId=${userId}&date=${date}`);

                // Jika data ditemukan, set data nama pengguna dan catatan tugas
                if (userResponse.data && attendanceResponse.data.length > 0) {
                    setUserName(userResponse.data.name);
                    setTaskNotes(attendanceResponse.data[0].taskNotes);
                } else {
                    // Jika data tidak ditemukan, tampilkan pesan error
                    setError('Data tidak ditemukan.');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                // Jika terjadi error saat mengambil data, tampilkan pesan error
                setError('Terjadi kesalahan saat mengambil data.');
            }
        };

        fetchTaskNotes();
    }, [userId, date]); // Hook ini akan dijalankan setiap kali userId atau date berubah

    return (
        <Container maxWidth="sm">
            <Box my={5}>
                {/* Jika ada error, tampilkan pesan error */}
                {error ? (
                    <Typography color="error" align="center">{error}</Typography>
                ) : (
                    <>
                        {/* Menampilkan judul Catatan Tugas */}
                        <Typography variant="h4" align="center" gutterBottom>
                            Catatan Tugas
                        </Typography>
                        
                        {/* Menampilkan nama pengguna */}
                        <Typography variant="h6" align="center" gutterBottom>
                            {userName}
                        </Typography>
                        
                        {/* Menampilkan catatan tugas */}
                        <Typography variant="body1" align="center" gutterBottom>
                            {taskNotes}
                        </Typography>
                        
                        {/* Tombol untuk kembali ke halaman sebelumnya */}
                        <Box textAlign="center" mt={3}>
                            <Button href={`/catatan-kehadiran/${userId}`} variant="contained" color="primary">
                                Kembali
                            </Button>
                        </Box>
                    </>
                )}
            </Box>
        </Container>
    );
};

export default TaskNotes;
