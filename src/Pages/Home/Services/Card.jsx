import {Link} from "react-router-dom";

const Card = ({ product }) => {
  const { _id, name, image, } = product;
  return (
    <div className="mt-16">
      <div className="card h-[500px] max-w-96 bg-base-100 shadow-xl border border-error">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl object-cover hover:ease-in hover:duration-150 hover:scale-125"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          
          <div className="card-actions">
           <Link to={`/description/${_id}`}>
           <button className="btn btn-error hover:scale-110 hover:duration-100 hover:ease-in hover:bg-red-600">View Details</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
