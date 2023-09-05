import { NavLink, useNavigate } from 'react-router-dom';
import avater from '../../../assets/navbar/avater.avif'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useOrders from '../../../hooks/useOrders';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [order] = useOrders()
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Sign Out Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate("/login")
            })
            .catch(error => console.log(error))
    }
    const navOptions = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li>
            <NavLink to="/order">
                My Order
                <div className="badge badge-secondary">+{order.length}</div>
            </NavLink>
        </li>
        {
            user ? <>
                <li><NavLink to="dashboard/customerOrder">Admin Dashboard</NavLink></li>
                <button onClick={handleLogOut}>Sign Out</button>
            </> : <>
                <li><NavLink to="register"><button>Sign Up</button></NavLink></li>
                <li><NavLink to="login"><button>Sign In</button></NavLink></li>
            </>
        }
    </>
    return (
        <div id='navbar-active'>
            <div className="fixed z-50 max-w-screen-xl text-white bg-black bg-opacity-50 navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 bg-black rounded-md w-52 ">
                            {
                                navOptions
                            }
                        </ul>
                    </div>
                    <a className="text-xl normal-case btn btn-ghost">MoiBoX</a>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        {
                            navOptions
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={avater} />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;