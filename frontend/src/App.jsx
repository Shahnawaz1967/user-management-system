import React, { useState } from 'react';
import UserTable from './components/UserTable';
import UserForm from './components/UserForm';
import axios from 'axios';

const App = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleEdit = (user) => {
        setSelectedUser(user);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/users/${id}`)
            .then(() => {
                window.location.reload();
            })
            .catch(error => console.error(error));
    };

    const handleFormSubmit = (user) => {
        if (user._id) {
            // Update user
            axios.put(`http://localhost:5000/api/users/${user._id}`, user)
                .then(() => {
                    setSelectedUser(null);
                    window.location.reload();
                })
                .catch(error => console.error(error));
        } else {
            // Create new user
            axios.post('http://localhost:5000/api/users', user)
                .then(() => {
                    window.location.reload();
                })
                .catch(error => console.error(error));
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
            <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">User Management Dashboard</h1>
                <UserForm selectedUser={selectedUser} onFormSubmit={handleFormSubmit} />
                <div className="mt-6">
                    <UserTable onEdit={handleEdit} onDelete={handleDelete} />
                </div>
            </div>
        </div>
    );
};

export default App;
