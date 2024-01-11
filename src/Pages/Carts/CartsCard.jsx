import axios from "axios";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const CartsCard = ({ cart, refetch }) => {
  const { name, image, price, _id } =
    cart;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "green",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axios.delete(`http://localhost:5000/deleteCart?id=${id}`)
              .then(res => {
                refetch();
                if(res.data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your item has been deleted",
                        icon: "success"
                      });
                }
              })
              .catch(error => console.log(error))
               
            }
          });

    }
  return (
    <div className="card md:h-80 card-side bg-base-100 shadow-xl border border-error"data-aos="zoom-in"data-aos-easing="linear"
    data-aos-duration="500">
      <figure>
        <img className="w-64 md:w-96 object-cover lg:ps-10  hover:scale-110 hover:ease-in hover:duration-150" src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="uppercase text-lg font-bold text-error">price : {price}</p>
        <div className="card-actions md:justify-end">
          <button onClick={()=> handleDelete(_id)} className="btn bg-error mr-5 hover:scale-110 hover:ease-in hover:duration-150 hover:bg-red-500">
            <MdDelete size={20} /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartsCard;