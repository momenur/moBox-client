import loginImg from '../../assets/login/login.gif'
const Register = () => {
    return (
        <div className="bg-base-200">
            <div className="hero min-h-screen md:w-[90%] mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=''>
                        <img className='md:rounded-lg' src={loginImg} alt="register images" />
                    </div>
                    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <h1 className=' ps-8 mt-6 text-3xl font-semibold'>Please Register!</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text" placeholder="+88" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;