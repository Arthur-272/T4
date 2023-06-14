import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://express-t4.onrender.com/api/users');

                if (response.ok) {
                    const data = await response.json();
                    setUsers(data);
                    setFilteredUsers(data);
                } else {
                    const errorData = await response.json();
                    setError(errorData.message);
                }
            } catch (error) {
                console.error('Error:', error);
                setError('An error occurred while fetching users.');
            }
        };

        fetchUsers();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gridGap: '20px',
    };

    const onClick = (user) => {
        navigate("/user-profile", {state: {...user}});
    }

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = users.filter(
            (user) =>
                user.name.toLowerCase().includes(query) ||
                user.name.toLowerCase().includes(query)
        );
        setFilteredUsers(filtered);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by first name or last name"
                value={searchQuery}
                onChange={handleSearch}
            />
            <div style={gridContainerStyle}>
                {filteredUsers.map((user) => (
                    <li key={user._id}>
                        <button onClick={() => onClick(user)}>
                            <img src={user.picture} alt={user.name} />
                            <p>{user.name}</p>
                        </button>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default UsersList;
