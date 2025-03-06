import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const Dashboard = () => {
    const [records, setRecords] = useState([]);
    const [filter, setFilter] = useState({
        name: "",
        status: "",
        date: "",
        shift: "all",
        attendanceStatus: "all",
        activeStatus: "all",
    });
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        try {
            const usersResponse = await axios.get("http://localhost:3004/user");
            const attendanceResponse = await axios.get("http://localhost:3004/attendance");

            const usersMap = usersResponse.data.reduce((acc, user) => {
                acc[user.id] = { name: user.name, status: user.status, shift: user.shift };
                return acc;
            }, {});

            const combinedData = attendanceResponse.data.map((record) => ({
                ...record,
                ...usersMap[record.userId],
            }));

            setRecords(combinedData);
        } catch (err) {
            console.error("Error fetching data:", err);
            setError("Gagal memuat data. Silakan coba lagi.");
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value });
    };

    const filteredRecords = records.filter((record) => {
        const matchesName = filter.name ? record.name.toLowerCase().includes(filter.name.toLowerCase()) : true;
        const matchesDate = filter.date ? record.date === filter.date : true;
        const matchesShift = filter.shift !== "all" ? record.shift.toLowerCase().includes(filter.shift.toLowerCase()) : true;
        const matchesAttendanceStatus =
            filter.attendanceStatus !== "all" ? record.attendanceStatus === filter.attendanceStatus : true;
        const matchesActiveStatus =
            filter.activeStatus !== "all" ? record.status?.toLowerCase() === filter.activeStatus.toLowerCase() : true;

        return matchesName && matchesDate && matchesShift && matchesAttendanceStatus && matchesActiveStatus;
    });

    return (
        <div className="bg-purple-300 min-h-screen p-3 sm:p-5">
            <div className="max-w-6xl mx-auto bg-white p-3 sm:p-5 rounded-lg shadow">
                <h1 className="text-xl sm:text-2xl font-bold text-center mb-4">Dashboard Kehadiran dan Karyawan</h1>

                {/* Input filter nama dan tanggal */}
                <div className="mb-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nama"
                        value={filter.name}
                        onChange={handleFilterChange}
                        className="p-2 border rounded w-full sm:w-1/2"
                    />
                    <input
                        type="date"
                        name="date"
                        value={filter.date}
                        onChange={handleFilterChange}
                        className="p-2 border rounded w-full sm:w-1/3"
                    />
                </div>

                {/* Dropdown filter */}
                <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                    <select name="shift" value={filter.shift} onChange={handleFilterChange} className="p-2 border rounded">
                        <option value="all">Semua Shift</option>
                        <option value="morning">Pagi</option>
                        <option value="evening">Sore</option>
                        <option value="night">Malam</option>
                    </select>

                    <select
                        name="attendanceStatus"
                        value={filter.attendanceStatus}
                        onChange={handleFilterChange}
                        className="p-2 border rounded"
                    >
                        <option value="all">Semua Kehadiran</option>
                        <option value="Hadir">Hadir</option>
                        <option value="Izin">Izin</option>
                    </select>

                    <select name="activeStatus" value={filter.activeStatus} onChange={handleFilterChange} className="p-2 border rounded">
                        <option value="all">Semua Status Aktif</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>

                {/* Pesan error */}
                {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

                {/* Tabel dengan scroll horizontal di HP */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-purple-300 text-sm sm:text-base">
                                <th className="border border-gray-300 p-2">Nama</th>
                                <th className="border border-gray-300 p-2">Status Kehadiran</th>
                                <th className="border border-gray-300 p-2">Shift</th>
                                <th className="border border-gray-300 p-2">Tanggal</th>
                                <th className="border border-gray-300 p-2">Status</th>
                                <th className="border border-gray-300 p-2">Catatan Tugas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRecords.length > 0 ? (
                                filteredRecords.map((record) => (
                                    <tr key={record.id} className="text-sm sm:text-base">
                                        <td className="border border-gray-300 p-2">{record.name}</td>
                                        <td className="border border-gray-300 p-2">{record.attendanceStatus}</td>
                                        <td className="border border-gray-300 p-2">{record.shift}</td>
                                        <td className="border border-gray-300 p-2">{record.date}</td>
                                        <td className="border border-gray-300 p-2">{record.status}</td>
                                        <td className="border border-gray-300 p-2">{record.taskNotes}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center p-4">Data tidak ditemukan</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
