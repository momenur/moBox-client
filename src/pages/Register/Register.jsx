import { useForm } from "react-hook-form";
import loginImg from '../../assets/login/login.gif'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser} = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User Sign Up Successfully',
                showConfirmButton: false,
                timer: 1500
              })
        })
    }
    return (
        <div className="bg-base-200">
            <div className="hero min-h-screen md:w-[90%] mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=''>
                        <img className='md:rounded-lg' src={loginImg} alt="register images" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <h1 className=' ps-8 mt-6 text-3xl font-semibold'>Please Register!</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" />
                                {errors.name?.type === 'required' && <p className="text-rose-500">Give Us Your Name its required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input {...register("phone", { required: true, 
                                pattern: /^(?:\+88|01)?\d{11}\r?$/
                                })} type="text" name='phone' placeholder="Your Phone Number" className="input input-bordered" />
                                {errors.phone?.type === 'required' && <p className="text-rose-500">Phone Number must be required</p>}
                                {errors.phone?.type === 'pattern' && <p className="text-rose-500">Give a Bangladeshi Phone Number</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" name='email' placeholder="email" className="input input-bordered" />
                                {errors.email?.type === 'required' && <p className="text-rose-500">Give Us Your Name its required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: true, 
                                minLength: 6
                                })} type="password" name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-rose-500">Password must be is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-rose-500">Password Must be 6 Character</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                            <p>Already Have an Account <span className="text-blue-600 font-semibold"><Link to="/login">Sign In</Link></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;