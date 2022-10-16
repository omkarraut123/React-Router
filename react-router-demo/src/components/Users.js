import React from 'react';
import { useSearchParams } from 'react-router-dom';
const Users = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') == 'active';
    return (
        <div>
            <h1>Users Component..!</h1>
            <button onClick={() => setSearchParams({filter: 'active'})}>Active Users</button>
            <button onClick={() => setSearchParams({})}>Reset Filter</button>
            { showActiveUsers ? <h2>Active Users</h2> : <h2>No Active Users</h2>}
        </div>
    );
};

export default Users;