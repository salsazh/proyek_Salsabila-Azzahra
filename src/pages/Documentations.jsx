import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@material-ui/core';

const Documentations = () => {
    return (
        <Container maxWidth="md">
            <Box my={5}>
                <Typography variant="h3" align="center" gutterBottom>
                    Dokumentasi Proyek Shift Manajemen
                </Typography>
                <Typography variant="body1" paragraph>
                    Selamat datang di dokumentasi proyek Shift Manajemen. Proyek ini bertujuan untuk mengelola jadwal kerja karyawan dengan mudah dan efisien.
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Daftar Isi
                </Typography>
                <List>
                    <ListItem button component="a" href="#pendahuluan">
                        <ListItemText primary="Pendahuluan" />
                    </ListItem>
                    <ListItem button component="a" href="#instalasi">
                        <ListItemText primary="Instalasi" />
                    </ListItem>
                    <ListItem button component="a" href="#struktur-proyek">
                        <ListItemText primary="Struktur Proyek" />
                    </ListItem>
                    <ListItem button component="a" href="#penggunaan">
                        <ListItemText primary="Penggunaan" />
                    </ListItem>
                    <ListItem button component="a" href="#api">
                        <ListItemText primary="API" />
                    </ListItem>
                    <ListItem button component="a" href="#catatan">
                        <ListItemText primary="Catatan" />
                    </ListItem>
                </List>
                <Box id="pendahuluan" my={5}>
                    <Typography variant="h4" gutterBottom>
                        Pendahuluan
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Proyek Shift Manajemen adalah aplikasi untuk mengelola jadwal kerja karyawan. Aplikasi ini memungkinkan pengguna untuk menambah, mengedit, dan menghapus data karyawan serta mencatat kehadiran mereka.
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Fitur Utama
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="Manajemen Karyawan" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Catatan Kehadiran" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Ringkasan Karyawan dan Kehadiran" />
                        </ListItem>
                    </List>
                </Box>
                <Box id="instalasi" my={5}>
                    <Typography variant="h4" gutterBottom>
                        Instalasi
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Ikuti langkah-langkah berikut untuk menginstal proyek ini di mesin lokal Anda.
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Prasyarat
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="Node.js" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="npm atau yarn" />
                        </ListItem>
                    </List>
                    <Typography variant="h5" gutterBottom>
                        Langkah-langkah Instalasi
                    </Typography>
                    <Typography variant="body1" paragraph>
                        1. Clone repositori:
                    </Typography>
                    <Typography variant="body2" paragraph>
                        <code>git clone &lt;URL_REPOSITORI&gt;</code>
                    </Typography>
                    <Typography variant="body1" paragraph>
                        2. Masuk ke direktori proyek:
                    </Typography>
                    <Typography variant="body2" paragraph>
                        <code>cd Shift</code>
                    </Typography>
                    <Typography variant="body1" paragraph>
                        3. Instal dependensi:
                    </Typography>
                    <Typography variant="body2" paragraph>
                        <code>npm install</code>
                    </Typography>
                    <Typography variant="body1" paragraph>
                        4. Jalankan server JSON:
                    </Typography>
                    <Typography variant="body2" paragraph>
                        <code>npm run json-server -- --port 3004</code>
                    </Typography>
                    <Typography variant="body1" paragraph>
                        5. Jalankan aplikasi:
                    </Typography>
                    <Typography variant="body2" paragraph>
                        <code>npm start</code>
                    </Typography>
                </Box>
                <Box id="struktur-proyek" my={5}>
                    <Typography variant="h4" gutterBottom>
                        Struktur Proyek
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Berikut adalah struktur direktori dari proyek ini:
                    </Typography>
                    <Typography variant="body2" paragraph>
                        <pre>
                            {`
Shift/
├── docs/
├── public/
├── src/
│   ├── Components/
│   ├── App.js
│   ├── index.js
│   └── ...
├── db.json
├── package.json
└── README.md
                            `}
                        </pre>
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Direktori Utama
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="docs/: Dokumentasi proyek." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="public/: File statis." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="src/: Kode sumber aplikasi." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="db.json: Database JSON untuk menyimpan data karyawan dan kehadiran." />
                        </ListItem>
                    </List>
                </Box>
                <Box id="penggunaan" my={5}>
                    <Typography variant="h4" gutterBottom>
                        Penggunaan
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Berikut adalah panduan penggunaan aplikasi Shift Manajemen.
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Login
                    </Typography>
                    <Typography variant="body1" paragraph>
                        1. Buka aplikasi di browser: <code>http://localhost:3000</code>
                    </Typography>
                    <Typography variant="body1" paragraph>
                        2. Masukkan email dan password untuk login.
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Manajemen Karyawan
                    </Typography>
                    <Typography variant="body1" paragraph>
                        1. Navigasi ke halaman "Kelola Karyawan".
                    </Typography>
                    <Typography variant="body1" paragraph>
                        2. Tambah, edit, atau hapus data karyawan sesuai kebutuhan.
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Catatan Kehadiran
                    </Typography>
                    <Typography variant="body1" paragraph>
                        1. Navigasi ke halaman "Catatan Kehadiran".
                    </Typography>
                    <Typography variant="body1" paragraph>
                        2. Tambah, edit, atau hapus catatan kehadiran karyawan.
                    </Typography>
                </Box>
                <Box id="api" my={5}>
                    <Typography variant="h4" gutterBottom>
                        API
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Berikut adalah daftar endpoint API yang tersedia dalam proyek ini.
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Endpoint Karyawan
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="GET /user: Mendapatkan daftar semua karyawan." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="GET /user/:id: Mendapatkan data karyawan berdasarkan ID." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="POST /user: Menambah karyawan baru." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="PUT /user/:id: Memperbarui data karyawan berdasarkan ID." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="DELETE /user/:id: Menghapus karyawan berdasarkan ID." />
                        </ListItem>
                    </List>
                    <Typography variant="h5" gutterBottom>
                        Endpoint Kehadiran
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="GET /attendance: Mendapatkan daftar semua catatan kehadiran." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="GET /attendance?userId=:userId: Mendapatkan catatan kehadiran berdasarkan ID karyawan." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="POST /attendance: Menambah catatan kehadiran baru." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="PUT /attendance/:id: Memperbarui catatan kehadiran berdasarkan ID." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="DELETE /attendance/:id: Menghapus catatan kehadiran berdasarkan ID." />
                        </ListItem>
                    </List>
                    <Typography variant="h5" gutterBottom>
                        Contoh Response
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Berikut adalah contoh response dari berbagai endpoint API:
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        GET /user
                    </Typography>
                    <Typography variant="body2" paragraph>
                        <pre>
                            {`
[
    {
        "name": "aryan",
        "status": "active",
        "shift": "morning",
        "tanggal_bekerja": "2023-10-01",
        "id": 1
    },
    {
        "name": "akash",
        "status": "inactive",
        "shift": "evening",
        "tanggal_bekerja": "2023-10-02",
        "id": 2
    },
    {
        "name": "suraj",
        "status": "active",
        "shift": "night",
        "tanggal_bekerja": "2023-10-03",
        "id": 3
    },
    {
        "name": "rakesh",
        "status": "inactive",
        "shift": "morning",
        "tanggal_bekerja": "2023-10-04",
        "id": 4
    },
    {
        "name": "vikas",
        "status": "active",
        "shift": "evening",
        "tanggal_bekerja": "2023-10-05",
        "id": 5
    }
]
                            `}
                        </pre>
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        GET /user/:id
                    </Typography>
                    <Typography variant="body2" paragraph>
                        <pre>
                            {`
{
    "name": "aryan",
    "status": "active",
    "shift": "morning",
    "tanggal_bekerja": "2023-10-01",
    "id": 1
}
                            `}
                        </pre>
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        POST /user
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Request body:
                        <pre>
                            {`
{
    "name": "new user",
    "status": "active",
    "shift": "morning",
    "tanggal_bekerja": "2023-10-06"
}
                            `}
                        </pre>
                        Response:
                        <pre>
                            {`
{
    "name": "new user",
    "status": "active",
    "shift": "morning",
    "tanggal_bekerja": "2023-10-06",
    "id": 6
}
                            `}
                        </pre>
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        PUT /user/:id
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Request body:
                        <pre>
                            {`
{
    "name": "aryan updated",
    "status": "active",
    "shift": "morning",
    "tanggal_bekerja": "2023-10-01"
}
                            `}
                        </pre>
                        Response:
                        <pre>
                            {`
{
    "name": "aryan updated",
    "status": "active",
    "shift": "morning",
    "tanggal_bekerja": "2023-10-01",
    "id": 1
}
                            `}
                        </pre>
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        DELETE /user/:id
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Response:
                        <pre>
                            {`
{}
                            `}
                        </pre>
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        GET /attendance
                    </Typography>
                    <Typography variant="body2" paragraph>
                        <pre>
                            {`
[
    {
        "userId": 1,
        "date": "2023-10-01",
        "status": "Hadir",
        "taskNotes": "Menyelesaikan tugas harian.",
        "id": 1
    },
    {
        "userId": 1,
        "date": "2023-10-02",
        "status": "Izin",
        "taskNotes": "Cuti pribadi.",
        "id": 2
    },
    {
        "userId": 2,
        "date": "2023-10-01",
        "status": "Hadir",
        "taskNotes": "Menyelesaikan tugas harian.",
        "id": 3
    },
    {
        "userId": 2,
        "date": "2023-10-02",
        "status": "Izin",
        "taskNotes": "Cuti pribadi.",
        "id": 4
    },
    {
        "userId": 3,
        "date": "2023-10-01",
        "status": "Hadir",
        "taskNotes": "Menyelesaikan tugas harian.",
        "id": 5
    },
    {
        "userId": 3,
        "date": "2023-10-02",
        "status": "Izin",
        "taskNotes": "Cuti pribadi.",
        "id": 6
    },
    {
        "userId": 4,
        "date": "2023-10-01",
        "status": "Hadir",
        "taskNotes": "Menyelesaikan tugas harian.",
        "id": 7
    },
    {
        "userId": 4,
        "date": "2023-10-02",
        "status": "Izin",
        "taskNotes": "Cuti pribadi.",
        "id": 8
    },
    {
        "userId": 5,
        "date": "2023-10-01",
        "status": "Hadir",
        "taskNotes": "Menyelesaikan tugas harian.",
        "id": 9
    },
    {
        "userId": 5,
        "date": "2023-10-02",
        "status": "Izin",
        "taskNotes": "Cuti pribadi.",
        "id": 10
    }
]
                            `}
                        </pre>
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        GET /attendance?userId=:userId
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Example for <code>GET /attendance?userId=1</code>:
                        <pre>
                            {`
[
    {
        "userId": 1,
        "date": "2023-10-01",
        "status": "Hadir",
        "taskNotes": "Menyelesaikan tugas harian.",
        "id": 1
    },
    {
        "userId": 1,
        "date": "2023-10-02",
        "status": "Izin",
        "taskNotes": "Cuti pribadi.",
        "id": 2
    }
]
                            `}
                        </pre>
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        POST /attendance
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Request body:
                        <pre>
                            {`
{
    "userId": 1,
    "date": "2023-10-03",
    "status": "Hadir",
    "taskNotes": "Menyelesaikan tugas tambahan."
}
                            `}
                        </pre>
                        Response:
                        <pre>
                            {`
{
    "userId": 1,
    "date": "2023-10-03",
    "status": "Hadir",
    "taskNotes": "Menyelesaikan tugas tambahan.",
    "id": 11
}
                            `}
                        </pre>
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        PUT /attendance/:id
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Request body:
                        <pre>
                            {`
{
    "userId": 1,
    "date": "2023-10-01",
    "status": "Hadir",
    "taskNotes": "Menyelesaikan tugas harian dan tambahan."
}
                            `}
                        </pre>
                        Response:
                        <pre>
                            {`
{
    "userId": 1,
    "date": "2023-10-01",
    "status": "Hadir",
    "taskNotes": "Menyelesaikan tugas harian dan tambahan.",
    "id": 1
}
                            `}
                        </pre>
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        DELETE /attendance/:id
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Response:
                        <pre>
                            {`
{}
                            `}
                        </pre>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Documentations;
