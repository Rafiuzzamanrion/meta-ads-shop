import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";
import UseCart from "../../Hooks/UseCart";
import CartsCard from "./CartsCard";

const Cart = () => {
    const [carts,refetch] = UseCart();
  
    const totalPrice = carts.reduce((sum,item) => item.price + sum,0);
    return (
        <div>
           <div className="flex flex-col justify-center items-center">
            <Helmet>
                <title>Meta-ads-shop | My cart</title>
            </Helmet>
            <h1 className="text-4xl text-center font-bold uppercase">Products <span className="text-error">Cart</span></h1>

            <div className="font-semibold p-8 bg-base-100 w-96 rounded-md shadow-xl mt-6 text-center border border-error"data-aos="zoom-in"data-aos-easing="linear"
    data-aos-duration="500">
                <h1 className="text-xl"><span className="text-error font-semibold">Total Amount : ${totalPrice}</span></h1>
               <Link to={'/proceedToCheckout'}> <button className="btn bg-error mt-3 hover:scale-110 hover:duration-150 hover:ease-in hover:bg-red-500">Proceed to checkout</button></Link>
            </div>

            <div className="grid grid-cols-1 gap-5 my-8 justify-center lg:w-10/12">
                {
                    carts.map(cart => <CartsCard key={cart._id} cart = {cart} refetch = {refetch}></CartsCard> )
                }
            </div>
        </div>  
        </div>
    );
};

export default Cart;