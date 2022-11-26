import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const User = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            hi
        </div>
    );
};

export default User;