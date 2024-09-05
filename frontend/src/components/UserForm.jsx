import React, { useState, useEffect } from 'react';

const UserForm = ({ selectedUser, onFormSubmit }) => {
    const [user, setUser] = useState({ firstName: '', lastName: '', email: '', department: '' });

    useEffect(() => {
        if (selectedUser) {
            setUser(selectedUser);
        }
    }, [selectedUser]);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        onFormSubmit(user);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto my-4 p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">{selectedUser ? 'Edit User' : 'Add New User'}</h2>
            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1">First Name</label>
                <input 
                    type="text" 
                    name="firstName" 
                    value={user.firstName} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required 
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1">Last Name</label>
                <input 
                    type="text" 
                    name="lastName" 
                    value={user.lastName} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required 
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={user.email} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required 
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1">Department</label>
                <input 
                    type="text" 
                    name="department" 
                    value={user.department} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required 
                />
            </div>
            <button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                {selectedUser ? 'Update User' : 'Add User'}
            </button>
        </form>
    );
};

export default UserForm;
