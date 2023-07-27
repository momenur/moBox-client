import { Link } from 'react-router-dom';
import avater from '../../../assets/navbar/avater.avif'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
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
        })
        .catch(error => console.log(error))
    }
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/order">Order</Link></li>

        {
            user ? <>
            <li onClick={handleLogOut} className='text-rose-500 font-semibold'><Link>Sign Out</Link></li>
            </> : <>
                <li><Link to="register">Sign Up</Link></li>
                <li><Link to="login">Sign In</Link></li>
            </>
        }
    </>
    return (
        <div className="">
            <div className="navbar bg-black text-white fixed z-50 bg-opacity-50 max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 bg-black rounded-md w-52 ">
                            {
                                navOptions
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">MoiBoX</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
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