import {Link, useNavigate} from "react-router-dom";
import photo from '/login.svg';
import {useContext} from "react";
import {AuthContext} from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import axios from "axios";
import SocialLogin from "../../components/SocialLogin";


const SignUp = () => {
    const {handleCreateUser,updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)

         // validation or password expression
    if (!/^(?=.*[A-Z]).*$/.test(password)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Your password must have a uppercase character!",
        });
        return;
      } else if (!/^(?=.*[a-z]).*$/.test(password)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Your password must have a lowercase character!",
        });
        return;
      } else if (
        !/^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/.test(password)
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Your password must have a special character!",
        });
        return;
      } else if (!password.length >= 8) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Your password must have 8 characters!",
        });
        return;
      }
      handleCreateUser(email,password)
      .then(result => {
        const createdUser = result.user;
        createdUser;
        form.reset();
          //   ================ update user name ================
          updateUserProfile(name)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });

        //   ---------------- post user to database -----------------
        const saveUser = {name:name, email:email}
        axios.post('https://facebook-ads-house-server.vercel.app/users',saveUser)
        .then(res => {
            if(res.data.insertedId){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "You have successfully created an account",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate('/')
            }
        });

      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
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
            <form onSubmit={handleSignUp} className="card-body" data-aos="fade-right"data-aos-easing="linear"
        data-aos-duration="600">
            <h1 className="text-5xl font-bold text-center">Sign Up</h1>
           
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
              </div>
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
              </div>
              <div className="form-control mt-6">
                
                <input className="btn btn-error hover:bg-red-600 hover:scale-110 hover:duration-150 hover:ease-in" type="submit" value="Sign Up" />
              </div>
              <p className="ps-4">Already have an account ? <Link className='text-red-500 font-bold' to='/login'> Login</Link></p>
           <SocialLogin></SocialLogin>
            </form>
          
          </div>
          
        </div>
    
      </div>
        </div>
    );
};

export default SignUp;