import copy from "copy-to-clipboard";
import UseCart from "../../Hooks/UseCart";
import image1 from "/binance.png";
import image2 from "/wise.jpg";
import image3 from "/payoneer.png";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import {useForm} from "react-hook-form";
import {useContext} from "react";
import {AuthContext} from "../../Providers/AuthProviders";
import {Helmet} from "react-helmet-async";



const img_hosting_token = import.meta.env.VITE_ImageUploadToken;
const ProceedToCheckout = () => {
  const navigate = useNavigate();
  const [carts,refetch] = UseCart()
  const totalAmount = carts?.reduce((sum, item) => item.price + sum, 0);
  const binanceAccount = "mesbahulhasan48@gmail.com";
  const binanceId = '424805724';
  const binanceTrc20 = 'TUWoPYmJkDXTmiy4YhBWzZFQNnCZYxzhzg'
  const wise = 'roni.official.rn@gmail.com';
  const payoneer = 'mesbahulhasanofficial@gmail.com';

  const copyToClipboardBinanceAccount = () => {
    copy(binanceAccount);
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Text copied to clipboard successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const copyToClipboardBinanceId = () => {
    copy(binanceId);
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Text copied to clipboard successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const copyToClipboardBinanceTrc20 = () => {
    copy(binanceTrc20);
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Text copied to clipboard successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const copyToClipboardWise = () => {
    copy(wise);
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Text copied to clipboard successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const copyToClipboardPayoneer = () => {
    copy(payoneer);
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Text copied to clipboard successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };





  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const { register, handleSubmit, reset } = useForm();
  const {user} = useContext(AuthContext);
  const onSubmit = (data)=> {


    const formData = new FormData();
    formData.append("image", data.image[0]);
    const {paymentMethod} = data;
    if(paymentMethod === 'Pick one'){
      return Swal.fire({
        icon: "error",
        title: "Selection Error",
        text: "Select payment method!",
      });
    }
    // ==== add the photo to imagebb for hosting and get a image url ====
    Swal.fire({
      title: "Do you want to make this payment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#14A44D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Pay !",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(img_hosting_url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((imgResponse) => {
            if (imgResponse.success) {
              const imgURL = imgResponse.data.display_url;
              const { paymentMethod} = data;
             
              const newItem = {
                paymentMethod:paymentMethod,
                image: imgURL,
                name:user?.displayName,
                email:user?.email,
                amount:totalAmount,
                status:'pending',
                orderId: Math.random().toString(16).slice(2, 16),
                productNames:carts.map(product => product.name),
                time:Date()
              };
              
             
              // ============== hosting end ======================
              // ============== post the product to database ===============
              axios.post("https://facebook-ads-house-server.vercel.app/payment", newItem).then((data) => {
                if (data.data.insertedId) {
                  refetch();
                  reset();
                  Swal.fire(
                    "Success !!",
                    `Your payment has gone to review team`,
                    "success"
                  );
                  navigate('/pendingPage')
                }
    
              });
            }
          });
      }
    });

           axios.delete(`https://facebook-ads-house-server.vercel.app/deleteCarts?email=${user?.email}`)
           .then(() =>{
            refetch()
           } )

  };


  return (
    <div className="flex flex-col justify-center items-center">
      <Helmet>
        <title>Meta-ads-shop | Proceed to checkout</title>
      </Helmet>
      <h1 data-aos="flip-left"data-aos-easing="linear"
    data-aos-duration="500" className="text-center font-bold text-xl uppercase bg-base-100 shadow-md lg:w-96 my-5 py-16 rounded-md px-2 border border-error">
        total payable amount :{" "}
        <span className="text-error">${totalAmount}</span>
      </h1>
      <h1 className="text-center font-bold text-2xl uppercase my-5">
        our payment methods
      </h1>
      <div>
        <div className="flex flex-row bg-base-100 p-10 shadow-2xl rounded-md">
          <div>
            <img
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="500"
              className="md:w-64 object-cover"
              src={image1}
              alt=""
            />
          </div>
          <div>
            <img
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="500"
              className="md:w-64 object-cover"
              src={image2}
              alt=""
            />
          </div>
          <div>
            <img
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="500"
              className="md:w-64 object-cover"
              src={image3}
              alt=""
            />
          </div>
        </div>
      </div>
      <h1 className="lg:w-2/3 bg-base-100 shadow-xl p-4 mt-4 text-sm text-error rounded-md">
        {" "}
        <span className="font-bold uppercase">Note* :</span> please take a
        screenshot after make a payment and submit it below, then{" "}
        <Link className="font-bold link-hover" to={"/contact"}>
          CONTACT WITH US
        </Link>
        , our payment accounts are given below
      </h1>

      <div
        className="shadow-2xl bg-base-100 p-5 md:w-2/3 rounded-lg mt-10"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <div className="justify-center items-center">
          <img className="w-44 h-28 object-cover" src={image1} alt="" />
        </div>
        <div className="divider"></div>
        <div className="flex gap-3 items-center">
          <h1 className="font-bold items-center text-warning">
            Binance :<span className="text-black"> mesbahulhasan48@gmail.com</span>
          </h1>
          <button className="btn btn-outline btn-sm" onClick={copyToClipboardBinanceAccount}>
            copy
          </button>
        </div>
        <div className="gap-3 items-center my-3">
          <h1 className="font-bold items-center text-warning">
          Pay ID :<span className="text-black font-semibold"> 424805724</span>
          </h1>
          <button className="btn btn-outline btn-sm" onClick={copyToClipboardBinanceId}>
            copy
          </button>
        </div>
        <div className="gap-3 items-center my-3">
          <h1 className="font-bold items-center text-warning">
          TRC20 address : <span className="text-black font-semibold">TUWoPYmJkDXTmiy4YhBWzZFQNnCZYxzhzg</span>
          </h1>
          <button className="btn btn-outline btn-sm" onClick={copyToClipboardBinanceTrc20}>
            copy
          </button>
        </div>
      </div>

      <div
        className="shadow-xl bg-base-100 p-5 lg:w-2/3 rounded-lg mt-6"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <div className="flex justify-center items-center">
          <img className="w-44 h-28 object-cover" src={image2} alt="" />
        </div>
        <div className="divider"></div>
        <div className="flex gap-3 items-center">
          <h1 className="font-bold text-center text-blue-500">
          <span className="text-black"> roni.official.rn@gmail.com</span>
          </h1>
          <button className="btn btn-outline btn-sm" onClick={copyToClipboardWise}>
            copy
          </button>
        </div>
      </div>

      <div
        className="shadow-xl bg-base-100 p-5 lg:w-2/3 rounded-lg mt-6"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <div className="flex justify-center items-center">
          <img className="w-44 h-28 object-cover" src={image3} alt="" />
        </div>
        <div className="divider"></div>
        <div className="flex gap-3 items-center">
          <h1 className="font-bold flex flex-row items-center text-pink-500">
           <span className="text-black">mesbahulhasanofficial@gmail.com</span>
          </h1>
          <button className="btn btn-outline btn-sm" onClick={copyToClipboardPayoneer}>
            copy
          </button>
        </div>
      </div>
      <div className="my-10">
        <form
         onSubmit={handleSubmit(onSubmit)}
          className="bg-base-100 shadow-2xl p-10 rounded-md"data-aos="zoom-in"data-aos-easing="linear"
          data-aos-duration="500"
        >
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Payment Method</span>
            </div>
            <select  {...register("paymentMethod", { required: true, maxLength: 120 })} className="select select-bordered select-error mt-3">
              <option defaultChecked>Pick one</option>
              <option>Binance</option>
              <option>Wise</option>
              <option>Payoneer</option>
            </select>
            <div className="label">
              <span className="label-text-alt">
                Give Payment&apos;s Screenshot
              </span>
            </div>
          </label>
          <input
           {...register("image", { required: true, maxLength: 120 })}
            type="file"
            className="file-input file-input-bordered file-input-error w-full max-w-xs mt-1"
          />
          <br />
         <button className="btn btn-error w-full mt-5" type="submit">
            Pay ${totalAmount}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProceedToCheckout;
