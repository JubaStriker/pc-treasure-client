import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { ThemeContext } from '../../Context/Theme/ThemeProvider';
import Footer from '../../Pages/Shared/Footer/Footer';
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

                        <li><NavLink to='/dashboard/myorders' className={({ isActive }) =>
                            isActive ? "bg-primary text-white font-semibold" : ""
                        }>My Orders</NavLink></li>
                        <li><NavLink to='/dashboard/addproduct' className={({ isActive }) =>
                            isActive ? "bg-primary text-white font-semibold" : ""
                        }>Add Products</NavLink></li>
                        <li><NavLink to='/dashboard/myproducts' className={({ isActive }) =>
                            isActive ? "bg-primary text-white font-semibold" : ""
                        }>My Products</NavLink></li>
                        <li><Link to='/dashboard/users'>All Users</Link></li>

                        <li><Link to='/dashboard/managedoctors'>Manage Users</Link></li>
                    </ul>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;