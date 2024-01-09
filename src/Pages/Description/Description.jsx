import axios from "axios";
import {useContext} from "react";
import {useLoaderData} from "react-router-dom";
import Swal from "sweetalert2";
import {AuthContext} from "../../Providers/AuthProviders";
import UseCart from "../../Hooks/UseCart";
import {Helmet} from "react-helmet-async";


const Description = () => {
    const product = useLoaderData();
    console.log(product)
    const {_id,name, image, price,description} = product;
    const {user} = useContext(AuthContext);
    const [,refetch] = UseCart();

    const handleAddToCart = ()=> {
      const cartData = {productId :_id, name:name, email:user?.email, price:price, image:image};

      axios.post('http://localhost:5000/cart',cartData)
      .then(res => {
        if(res.data.insertedId){
          refetch();
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your order has been successfully added to cart",
            showConfirmButton: false,
            timer: 1500,
          })

        }
      })
      .catch(error => {
        console.log(error);
      })
    };

    return (
    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
        <Helmet>
          <title>Meta-Ads-Shop | Description</title>
        </Helmet>
        <div>
          <img className="object-cover lg:h-5/6 w-full" src={image} alt="" />
        </div>
        <div className="">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-lg font-semibold mt-4 uppercase">
            Price :{" "}
            <span className="font-bold text-2xl text-error">${price}</span>
          </p>
          
          <div>
            <h1 className="text-xl font-bold uppercase mt-3">Description:</h1>
            <div className="divider"></div>
            {description}
          </div>
          <div className="divider"></div>
          <button onClick={handleAddToCart} className="btn text-black bg-error w-full hover:bg-red-600 hover:scale-105 hover:ease-in hover:duration-150 mb-10">ADD TO CART</button>
        </div>
        <div>
          
        </div>
      </div>
   
       
    );
};

export default Description;