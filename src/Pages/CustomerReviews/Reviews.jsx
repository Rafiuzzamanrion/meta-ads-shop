import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css/autoplay";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

const Reviews = () => {
  const { data: reviews = [],refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios.get("https://facebook-ads-house-server.vercel.app/reviews");
      return res.data;
    },
  });
  
  const handleAddReview = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const description = form.description.value;
    const rating = form.rating.value;
   

    if (rating === 'Pick one') {
        return Swal.fire({
          icon: "error",
          title: "Selection Error",
          text: "Please select Rating",
        });
      }

     const newRating = parseInt(rating.slice(' ')[1]);
     const reviewData = {name:name,rating:newRating,details:description};
      axios.post('https://facebook-ads-house-server.vercel.app/addReview',reviewData)
      .then(res => {
        if(res.data.insertedId){
          refetch();
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Thank you for your valuable review",
                showConfirmButton: false,
                timer: 1500,
              });
        }
      })
      .catch(error => console.log(error))
      form.reset();
  };


  return (
    <div>
      <h1 className="text-4xl text-black text-center font-semibold my-16">
        Customer <span className="text-error">Review</span>
      </h1>
      <section>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2500 }}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div data-aos="zoom-in"data-aos-easing="linear"
    data-aos-duration="500" className="m-10 flex flex-col items-center lg:mx-24 bg-base-100 shadow-xl p-8 py-16 rounded-xl">
                <div className="rating my-1">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-error"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-error"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-error"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-error"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-error"
                  />
                </div>
                <p className="py-8">{review.details}</p>
                <h3 className="text-3xl text-error font-semibold">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>


      <h1 className="text-black text-4xl font-semibold text-center mt-12">Write a <span className="text-error">Review</span></h1>
      <div className="flex justify-center items-center my-12">
        <form onSubmit={handleAddReview} className="bg-base-100 shadow-xl p-8 border border-error rounded-md md:w-1/2"data-aos="zoom-in"data-aos-easing="linear"
    data-aos-duration="500">
          <div className="grid md:grid-cols-2 gap-5">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
            required
              type="text"
              name="name"
              placeholder="Type here"
              className="input input-error input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Rating</span>
            </div>
            <select
            name="rating"
              defaultValue={"Pick one"}
              className="select select-error select-bordered"
            >
              <option disabled>Pick one</option>
              <option>01 star</option>
              <option>02 star</option>
              <option>03 star</option>
              <option>04 star</option>
              <option>05 star</option>
            </select>
          </label>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Review Description</span>
            </div>
            <textarea
              name="description"
              required
              className="textarea textarea-error textarea-bordered h-24"
              placeholder="Type here"
            ></textarea>
          </label>
         <div className="flex justify-center mt-7">
         <input className="btn bg-error hover:border-orange-400 hover:bg-orange-400 hover:scale-110 hover:ease-in hover:duration-200" type="submit" value="Send Review" />
         </div>
        </form>
      </div>
    </div>
  );
};

export default Reviews;