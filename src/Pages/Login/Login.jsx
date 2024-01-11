import {Link, useLocation, useNavigate} from "react-router-dom";
import photo from '/login.svg'
import {useContext} from "react";
import {AuthContext} from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin";


const Login = () => {
    const {logInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email,password)
        .then(result => {
            const loggedInUser = result.user;
            loggedInUser;
            form.reset();
            navigate(from,{replace:true})
            Swal.fire({
                position: "top",
                icon: "success",
                title: "You have successfully Logged in",
                showConfirmButton: false,
                timer: 1500,
              });
        })
        .catch(error => {
            console.log(error)
            Swal.fire({
                position: "top",
                icon: "error",
                title: "Your password is wrong",
                showConfirmButton: false,
                timer: 1500,
              });
        })
    }
    return (
        <div>
           <div className="hero min-h-screen bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-16 w-1/2 pt-7">
           
            <img data-aos="flip-left"data-aos-easing="linear"
        data-aos-duration="600" src={photo} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <form onSubmit={handleLogin} className="card-body"data-aos="fade-right"data-aos-easing="linear"
        data-aos-duration="600">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                
                <input className="btn btn-error hover:bg-red-600 hover:scale-110 hover:duration-150 hover:ease-in" type="submit" value="Login" />
              </div>
              <p className="text-sm ps-5 ">Don&apos;t have an account? <Link className='text-red-500 font-bold' to='/signup'> Sign Up</Link></p>
              <SocialLogin></SocialLogin>
            </form>

          </div>
        </div>
    
      </div> 
        </div>
    );
};

export default Login;