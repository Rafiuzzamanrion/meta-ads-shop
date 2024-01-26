import copy from "copy-to-clipboard";
import UseCart from "../../Hooks/UseCart";
import image1 from "/binance.png";
import image2 from "/paypal.png";
import image3 from "/payoneer.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { IoIosArrowForward } from "react-icons/io";

const ProceedToCheckout = () => {
  const [carts] = UseCart();
  const totalAmount = carts?.reduce((sum, item) => item.price + sum, 0);
  const binance = "hello guys";
  const copyToClipboard = () => {
    copy(binance);
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Text copied to clipboard successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handlePayment = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 data-aos="flip-left"data-aos-easing="linear"
    data-aos-duration="500" className="text-center font-bold text-xl uppercase bg-base-100 shadow-md w-96 my-5 py-16 rounded-md px-2 border border-error">
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
              className="w-64 object-cover"
              src={image1}
              alt=""
            />
          </div>
          <div>
            <img
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="500"
              className="w-64 object-cover"
              src={image2}
              alt=""
            />
          </div>
          <div>
            <img
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="500"
              className="w-64 object-cover"
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
        className="shadow-2xl bg-base-100 p-5 lg:w-2/3 rounded-lg mt-10"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <div className="flex justify-center items-center">
          <img className="w-44 h-28 object-cover" src={image1} alt="" />
        </div>
        <div className="divider"></div>
        <div className="flex gap-3 items-center">
          <h1 className="font-bold flex flex-row items-center text-warning">
            Binance Account
            <IoIosArrowForward size={20} />{" "}
            <span className="text-black">mesbaulhasan97@gmail.com</span>
          </h1>
          <button className="btn btn-outline btn-sm" onClick={copyToClipboard}>
            copy
          </button>
        </div>
        <div className="flex gap-3 items-center my-3">
          <h1 className="font-bold flex flex-row items-center text-warning">
            Binance Pay ID
            <IoIosArrowForward size={20} />
            <span className="text-black font-semibold">12345678</span>
          </h1>
          <button className="btn btn-outline btn-sm" onClick={copyToClipboard}>
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
          <h1 className="font-bold flex flex-row items-center text-blue-500">
            Paypal Account
            <IoIosArrowForward size={20} />{" "}
            <span className="text-black">mesbaulhasan97@gmail.com</span>
          </h1>
          <button className="btn btn-outline btn-sm" onClick={copyToClipboard}>
            copy
          </button>
        </div>
        <div className="flex gap-3 items-center my-3">
          <h1 className="font-bold flex flex-row items-center text-blue-500">
            Paypal Pay ID
            <IoIosArrowForward size={20} />
            <span className="text-black font-semibold">12345678</span>
          </h1>
          <button className="btn btn-outline btn-sm" onClick={copyToClipboard}>
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
            Binance Account
            <IoIosArrowForward size={20} />{" "}
            <span className="text-black">mesbaulhasan97@gmail.com</span>
          </h1>
          <button className="btn btn-outline btn-sm" onClick={copyToClipboard}>
            copy
          </button>
        </div>
        <div className="flex gap-3 items-center my-3">
          <h1 className="font-bold flex flex-row items-center text-pink-500">
            Binance Pay ID
            <IoIosArrowForward size={20} />
            <span className="text-black font-semibold">12345678</span>
          </h1>
          <button className="btn btn-outline btn-sm" onClick={copyToClipboard}>
            copy
          </button>
        </div>
      </div>
      <div className="my-10">
        <form
          onSubmit={handlePayment}
          className="bg-base-100 shadow-2xl p-10 rounded-md"data-aos="zoom-in"data-aos-easing="linear"
          data-aos-duration="500"
        >
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Payment Method</span>
            </div>
            <select className="select select-bordered select-error mt-3">
              <option defaultChecked>Pick one</option>
              <option>Binance</option>
              <option>Paypal</option>
              <option>Payoneer</option>
            </select>
            <div className="label">
              <span className="label-text-alt">
                Give Payment&apos;s Screenshot
              </span>
            </div>
          </label>
          <input
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
