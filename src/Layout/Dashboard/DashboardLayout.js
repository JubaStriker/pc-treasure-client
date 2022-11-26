import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ThemeContext } from '../../Context/Theme/ThemeProvider';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { toggleTheme } = useContext(ThemeContext)

    let theme = "light"

    if (toggleTheme) {
        theme = "light";
    }
    else {
        theme = "dark";
    }
    return (
        <div data-theme={`${theme}`}>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 text-base-content bg-base-200">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/allUsers'>All users</Link></li>
                        <li><Link to='/dashboard/addDoctor'>Add A Doctor</Link></li>
                        <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>



                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;