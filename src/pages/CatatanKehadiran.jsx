// Import library yang diperlukan
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const CatatanKehadiran = () => {
    const { id } = useParams();
    const history = useHistory();
    const [attendanceRecords, setAttendanceRecords] = useState([]);
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState(null);
    const [newRecord, setNewRecord] = useState({ userId: '', date: '', status: '', taskNotes: '' });
    const [editRecordId, setEditRecordId] = useState(null);
    const [editRecord, setEditRecord] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) history.push('/');
    }, [history]);

    const fetchData = useCallback(async () => {
        try {
            const usersResponse = await axios.get('http://localhost:3004/user');
            const attendanceResponse = await axios.get('http://localhost:3004/attendance');

            const usersMap = usersResponse.data.reduce((acc, user) => {
                acc[user.id] = user.name;
                return acc;
            }, {});

            const recordsWithNames = attendanceResponse.data.map((record) => ({
                ...record,
                userName: usersMap[record.userId],
            }));

            setUserData(usersResponse.data);
            setAttendanceRecords(recordsWithNames);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Data tidak ditemukan atau terjadi kesalahan.');
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleInputChange = (e) => {
        setNewRecord({ ...newRecord, [e.target.name]: e.target.value });
    };

    const handleAddRecord = async () => {
        try {
            if (!newRecord.userId || !newRecord.date || !newRecord.status) {
                setError('Nama, Tanggal, dan Status harus diisi');
                return;
            }

            const recordToAdd = {
                ...newRecord,
                id: Date.now(),
                userName: userData.find((user) => user.id === newRecord.userId)?.name,
            };

            await axios.post('http://localhost:3004/attendance', recordToAdd);
            setNewRecord({ userId: '', date: '', status: '', taskNotes: '' });
            fetchData();
            setError(null);
        } catch (error) {
            console.error('Error adding record:', error);
            setError('Gagal menambahkan catatan kehadiran.');
        }
    };

    return (
        <div className="bg-purple-300 min-h-screen p-5 flex items-center justify-center">
            <div className="w-full max-w-4xl bg-white p-5 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-5">Catatan Kehadiran Karyawan</h1>
                <div className="mb-5">
                    <h2 className="text-xl font-semibold mb-3">Tambah Catatan Baru</h2>
                    <select name="userId" value={newRecord.userId} onChange={handleInputChange} className="w-full p-2 mb-3 border rounded">
                        <option value="">Pilih Nama</option>
                        {userData.map((user) => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        ))}
                    </select>
                    <input name="date" type="date" value={newRecord.date} onChange={handleInputChange} className="w-full p-2 mb-3 border rounded" />
                    <input name="status" placeholder="Kehadiran" value={newRecord.status} onChange={handleInputChange} className="w-full p-2 mb-3 border rounded" />
                    <input name="taskNotes" placeholder="Catatan Tugas" value={newRecord.taskNotes} onChange={handleInputChange} className="w-full p-2 mb-3 border rounded" />
                    <button onClick={handleAddRecord} className="w-full bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Tambah Catatan</button>
                </div>
                {attendanceRecords.length > 0 && (
                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-300 text-sm md:text-base">
                            <thead>
                                <tr className="bg-purple-300">
                                    <th className="border p-2">Nama</th>
                                    <th className="border p-2">Tanggal</th>
                                    <th className="border p-2">Status</th>
                                    <th className="border p-2">Catatan</th>
                                    <th className="border p-2">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attendanceRecords.map((record) => (
                                    <tr key={record.id} className="text-center">
                                        <td className="border p-2">{record.userName}</td>
                                        <td className="border p-2">{record.date}</td>
                                        <td className="border p-2">{record.status}</td>
                                        <td className="border p-2">{record.taskNotes}</td>
                                        <td className="border p-2 flex flex-col sm:flex-row gap-2 justify-center">
                                            <button className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-600">Edit</button>
                                            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">Hapus</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CatatanKehadiran;
