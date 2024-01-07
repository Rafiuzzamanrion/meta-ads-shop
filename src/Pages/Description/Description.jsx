import {useLoaderData} from "react-router-dom";


const Description = () => {
    const product = useLoaderData();
    console.log(product)
    const {_id,name, image, price,description} = product;

    return (
    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
        <div>
          <img className="object-cover lg:h-5/6 w-full" src={image} alt="" />
        </div>
        <div className="">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-lg font-semibold mt-4">
            Price :{" "}
            <span className="font-bold text-2xl text-error">${price}</span>
          </p>
          
          <p>
            <h1 className="text-xl font-bold uppercase mt-3">Description:</h1>
            <div className="divider"></div>
            {description}
          </p>
          <div className="divider"></div>
          <button   className="btn text-black bg-error w-full hover:bg-red-600 hover:scale-105 hover:ease-in hover:duration-150 mb-10">ADD TO CART</button>
        </div>
        <div>
          
        </div>
      </div>
   
       
    );
};

export default Description;