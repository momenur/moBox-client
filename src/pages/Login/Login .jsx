import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import loginImg from '../../assets/login/login.gif'
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password= form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from, {replace: true})
        })
        console.log(email, password);
    } 
    return (
        <div className="bg-base-200">
            <div className="hero min-h-screen md:w-[70%] mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=''>
                        <img className='md:rounded-lg' src={loginImg} alt="register images" />
                    </div>
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <h1 className=' ps-8 mt-6 text-3xl font-semibold'>Please Login!</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign In" />
                            </div>
                            <p>Already Have an Account <span className="text-blue-600 font-semibold"><Link to="/register">Sign Up</Link></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;