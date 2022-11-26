import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../../../Context/Theme/ThemeProvider';
import { CiLight, CiDark } from 'react-icons/ci'
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {

    const { toggleTheme, setToggleTheme } = useContext(ThemeContext)
    const { user, logOut } = useContext(AuthContext)

    let theme = "light"

    if (toggleTheme) {
        theme = "light";
    }
    else {
        theme = "dark";
    }
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => { console.error(err) })
    }

    const menuItems = <>

        <li><NavLink to='/home' className={({ isActive }) =>
            isActive ? "text-primary text-lg font-bold" : "text-accent font-bold"
        }>Home</NavLink></li>
        {user?.displayName ? <li><NavLink to='/login' className={({ isActive }) =>
            isActive ? "text-primary text-lg font-bold" : "text-accent font-bold"
        } onClick={handleLogOut}>Sign out</NavLink></li> : <li><NavLink to='/login' className={({ isActive }) =>
            isActive ? "text-primary text-lg font-bold" : "text-accent font-bold"
        }>Login</NavLink></li>}
        <li><NavLink to='/blog' className={({ isActive }) =>
            isActive ? "text-primary text-lg font-bold" : "text-accent font-bold"
        }>Blog</NavLink></li>

        {/* 
        {user?.uid ?
            <>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><button onClick={handleLogOut}>Sign out</button></li>
            </>
            :
            <li><Link to='/login'>Login</Link></li>
        } */}
    </>
    return (
        <div data-theme={`${theme}`}>
            <div className="navbar bg-base-100 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {user?.displayName ? <p className='lg:hidden text-center text-primary text-sm pr-2 font-bold'>Hi {user.displayName}</p> : ""}
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/home' className="btn btn-ghost normal-case text-xl font-mono">PC Treasure</Link>
                </div>

                <div className="navbar-end">
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {menuItems}
                        </ul>
                    </div>
                    {user?.displayName ? <p className='hidden lg:block text-primary text-sm pr-2 font-bold'>Hi {user.displayName}</p> : ""}
                    <p onClick={() => setToggleTheme(!toggleTheme)} className="text-2xl font-extrabold lg:pr-6">{toggleTheme ? <CiDark /> : <CiLight />}</p>
                    {/* <label htmlFor='dashboard-drawer' tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label> */}
                </div>
            </div>

        </div>
    );
};

export default Navbar;