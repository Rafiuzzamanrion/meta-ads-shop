const Card = ({ product, refetch }) => {
  const { _id, name, image, description, price } = product;
  return (
    <div className="mt-16">
      <div className="card h-[500px] w-96 bg-base-100 shadow-xl border border-error">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          
          <div className="card-actions">
            <button className="btn btn-error">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
