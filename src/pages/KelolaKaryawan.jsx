import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const initialValue = {
    name: "",
    status: "",
    shift: "",
    tanggal_bekerja: "",
};

const KelolaKaryawan = () => {
    const [employee, setEmployee] = useState(initialValue);
    const [employeeList, setEmployeeList] = useState(() => {
        const savedEmployees = localStorage.getItem("employeeList");
        return savedEmployees ? JSON.parse(savedEmployees) : [];
    });
    const [editIndex, setEditIndex] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            history.push('/');
        }
    }, [history]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get("http://localhost:3004/user");
                setEmployeeList(response.data);
            } catch (error) {
                console.error("Error fetching employee data:", error);
            }
        };

        fetchEmployees();
    }, []);

    useEffect(() => {
        localStorage.setItem("employeeList", JSON.stringify(employeeList));
    }, [employeeList]);

    const onValueChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const addOrUpdateEmployee = async () => {
        if (editIndex !== null) {
            const updatedList = employeeList.map((emp, index) =>
                index === editIndex ? { ...employee, id: emp.id } : emp
            );
            setEmployeeList(updatedList);
            setEditIndex(null);
            await axios.put(`http://localhost:3004/user/${employeeList[editIndex].id}`, employee);
        } else {
            const newEmployee = { ...employee, id: Date.now() };
            setEmployeeList([...employeeList, newEmployee]);
            await axios.post("http://localhost:3004/user", newEmployee);
        }
        setEmployee(initialValue);
    };

    const deleteEmployee = (index) => {
        const updatedList = employeeList.filter((_, i) => i !== index);
        setEmployeeList(updatedList);
    };

    const editEmployee = (index) => {
        setEmployee(employeeList[index]);
        setEditIndex(index);
    };

    return (
        <div className="bg-purple-300 min-h-screen p-5 flex flex-col items-center">
            <div className="w-full max-w-5xl bg-white p-5 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-5">Daftar Karyawan</h3>

                {/* Tabel Responsif */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm sm:text-base">
                        <thead>
                            <tr className="bg-purple-200">
                                <th className="border border-gray-300 p-2">Nama</th>
                                <th className="border border-gray-300 p-2">Status</th>
                                <th className="border border-gray-300 p-2">Shift</th>
                                <th className="border border-gray-300 p-2">Tanggal Bekerja</th>
                                <th className="border border-gray-300 p-2">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeeList.map((emp, index) => (
                                <tr key={emp.id} className="border-b">
                                    <td className="px-4 py-2 border border-gray-300">
                                        <Link to={`/catatan-kehadiran/${emp.id}`} className="text-blue-600 hover:underline">
                                            {emp.name}
                                        </Link>
                                    </td>
                                    <td className="border border-gray-300 p-2">{emp.status}</td>
                                    <td className="border border-gray-300 p-2">{emp.shift}</td>
                                    <td className="border border-gray-300 p-2 text-center">{emp.tanggal_bekerja}</td>
                                    <td className="border border-gray-300 p-2">
                                        <div className="flex items-center justify-center gap-2">  
                                             <button
                                                  onClick={() => editEmployee(index)}
                                                  className="px-3 py-2 bg-gray-500 text-white rounded-md hover:bg-pink-600"
                                             >
                                                  Edit
                                             </button>
                                             <button
                                                 onClick={() => deleteEmployee(index)}
                                                 className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                             >
                                                 Hapus
                                             </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h3 className="text-2xl font-bold text-center mt-8">
                    {editIndex !== null ? "Edit Karyawan" : "Tambah Karyawan Baru"}
                </h3>

                {/* Form Responsif */}
                <div className="w-full max-w-lg mx-auto space-y-4 mt-4">
                    <div className="flex flex-col">
                        <label className="font-medium">Nama Karyawan</label>
                        <input
                            type="text"
                            name="name"
                            value={employee.name}
                            onChange={onValueChange}
                            className="p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium">Status</label>
                        <input
                            type="text"
                            name="status"
                            value={employee.status}
                            onChange={onValueChange}
                            className="p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium">Shift</label>
                        <input
                            type="text"
                            name="shift"
                            value={employee.shift}
                            onChange={onValueChange}
                            className="p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium">Tanggal Bekerja</label>
                        <input
                            type="text"
                            name="tanggal_bekerja"
                            value={employee.tanggal_bekerja}
                            onChange={onValueChange}
                            className="p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div className="mt-4">
                        <button
                            onClick={addOrUpdateEmployee}
                            className="w-full py-2 px-4 bg-violet-500 text-white font-semibold rounded-md hover:bg-violet-600"
                        >
                            {editIndex !== null ? "Simpan Perubahan" : "Tambah Karyawan"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KelolaKaryawan;
