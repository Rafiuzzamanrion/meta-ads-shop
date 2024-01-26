import img from '/google.png'
import {useContext} from 'react';
import {AuthContext} from '../Providers/AuthProviders';
import axios from 'axios';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';

const SocialLogin = () => {
 const {googleLogIn} = useContext(AuthContext);
 const navigate = useNavigate();
 const handleGoogleLogIn = () => {
    googleLogIn()
    .then(result => {
        const loggedInUser = result.user;
        const saveUser = {name:loggedInUser.displayName, email:loggedInUser.email}

        axios.post("http://localhost:5000/users", saveUser)
        .then((data) => {
            if (data.data.insertedId) {
              Swal.fire({
                position: "top",
                icon: "success",
                title: "You have successfully created an account",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
            else{
              Swal.fire({
                position: "top",
                icon: "success",
                title: "You have successfully Logged in here",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate('/');
            }
          });
        })
        .catch((error) => {
          console.log(error.message);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error.message}`,
          });
        });
 }
    return (
        <div>
         <div className='mt-2 flex items-center justify-center'>
            
            <button onClick={handleGoogleLogIn} className="bg-transparent hover:scale-125 hover:ease-in hover:duration-150"><img className='w-9 h-9 object-cover' src={img} alt="" /></button>
         </div>   
        </div>
    );
};

export default SocialLogin;