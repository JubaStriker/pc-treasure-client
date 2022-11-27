import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Users = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            hi
        </div>
    );
};

export default Users;