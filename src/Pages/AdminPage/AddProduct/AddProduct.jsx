
import axios from "axios";
import {useForm} from "react-hook-form";
import Swal from "sweetalert2";


const img_hosting_token = import.meta.env.VITE_ImageUploadToken;
const AddProduct = () => {


  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data)=> {


    const formData = new FormData();
    formData.append("image", data.image[0]);

    // ==== add the photo to imagebb for hosting and get a image url ====
    Swal.fire({
      title: "Do you want to add this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#14A44D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add to service !",
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
              const { name, price ,description} = data;
              const newItem = {
                name,
                price: parseFloat(price),
                description:description,
                image: imgURL,
              };
              console.log(newItem);
              // Math.random().toString(16).slice(2, 16)
              // ============== hosting end ======================
              // ============== post the product to database ===============
              axios.post("http://localhost:5000/product", newItem).then((data) => {
                if (data.data.insertedId) {
                  reset();
                  Swal.fire(
                    "Added !!",
                    `${name} has been added successfully`,
                    "success"
                  );
                }
              });
            }
          });
      }
    });
  };


  

  return (
    <div>
      <form className="border border-error p-10" onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Product Name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-error input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Product Price</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            {...register("price", { required: true, maxLength: 120 })}
            className="input input-error input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
           {...register("description", { required: true, maxLength: 5000 })}
            className="textarea textarea-error textarea-bordered h-24"
            placeholder="Product Description"
          ></textarea>
        </label>
        <input
          type="file"
          {...register("image", { required: true, maxLength: 120 })} 
          className="file-input file-input-bordered file-input-error w-full max-w-xs my-3"
        />
      <div className="flex items-center justify-center">
      <input className="btn w-full btn-error hover:ease-in hover:scale-110 hover:duration-150 hover:bg-red-500" type="submit" value="ADD" />
      </div>
      </form>
    </div>
  );
};

export default AddProduct;
