import axios from 'axios';

const url = "http://localhost:3004"; // URL JSON Server

// Fungsi untuk mengambil data semua pengguna atau data pengguna berdasarkan ID
export const getallUsers = async (id) => {
  id = id || ''; // Jika id tidak diberikan, maka akan mengambil semua pengguna
  // Mengirim request GET untuk mengambil data pengguna dari server
  return await axios.get(`${url}/users/${id}`);
};

// Fungsi untuk menambah pengguna baru
export const addUser = async (user) => {
  // Mengirim request POST untuk menambahkan pengguna baru
  return await axios.post(`${url}/users`, user);
};

// Fungsi untuk mengedit data pengguna berdasarkan ID
export const editUser = async (id, user) => {
  // Mengirim request PUT untuk mengupdate data pengguna berdasarkan ID
  return await axios.put(`${url}/users/${id}`, user);
};

// Fungsi untuk menghapus pengguna berdasarkan ID
export const deleteUser = async (id) => {
  // Mengirim request DELETE untuk menghapus pengguna berdasarkan ID
  return await axios.delete(`${url}/users/${id}`);
};