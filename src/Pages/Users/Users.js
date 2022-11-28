import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { TiTick } from 'react-icons/ti'
import toast from 'react-hot-toast';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';
const Users = () => {

    const { user } = useContext(AuthContext);

    const [deletingUser, setDeletingUser] = useState(null)
    const closeModal = () => {
        setDeletingUser(null)
    }
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteUser = (user) => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',


        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Delete successful")
                    refetch()
                }

            })
    }

    const handleMakeVerified = (id) => {
        fetch(`http://localhost:5000/users/verification/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success("Verification successful")
                    refetch()
                }
            })
    }

    return (
        <div>
            <h1 className='text-4xl font-semibold my-5 mx-4'>Users</h1>
            <div className="overflow-x-auto my-8 mx-4">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className='hover'>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Verification</th>
                            <th>Delete</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users &&
                            users?.map((user, i) => <tr key={user._id} className='hover'>
                                <th>{i + 1}</th>
                                <td>
                                    {user.name}
                                </td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.isVerified === 'true' && <p><TiTick className='text-green-600 text-xl' /></p>}</td>
                                <td><label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal1" className="btn btn-xs btn-error">Delete</label></td>
                                <td>{user?.isVerified !== 'true' && <p onClick={() => handleMakeVerified(user._id)} className='btn btn-sm btn-accent'>Make Verified</p>}</td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {deletingUser && <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deletingUser.name} it cannot be undone`}
                successAction={handleDeleteUser}
                successButtonName="delete"
                modalData={deletingUser}
                closeModal={closeModal}>
            </ConfirmationModal>}
        </div>
    );
};

export default Users;